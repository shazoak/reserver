const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../modals/Users');
const auth = require('../middleware/auth');





//@route      GET api/auth/user
//@ desc      GET user data
//@access     PRIVATE

router.get('/user',auth,async (req,res)=>{
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);

    }catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error');
    }
});


//@route      POST api/auth
//@ desc      Auth user & get token
//@access     Public

router.post('/',[
    check('email','Please include a valid email').isEmail(),
    check('password','Password id required').exists(),

],async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email,password} = req.body;
    try {
        let user = await User.findOne({email});

        if (!user){
            return res.status(400).json({msg:'Invalid Credentials'});
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({msg:'invalid credentials'})
        }

        const payload={
            user:{
                id:user._id
            }
        };

        jwt.sign(payload,config.get('jwtSecret'),{
            expiresIn: 360000
        },(err,token)=>{
            if (err){
                throw err;
            }
            else {
                res.json({user:{id:user.id,name:user.name,email:user.email},token});
            }
        });



    }catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error');
    }
});





module.exports = router;