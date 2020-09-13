const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const Admin = require('../modals/Admin');
const auth = require('../middleware/auth');



//@route      GET api/admin-auth
//@ desc      GET logged in admin
//@access     PRIVATE

router.get('/',auth,async (req,res)=>{
    try {
        const admin = await Admin.findById(req.user.id).select('-password');
        res.json(admin);

    }catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error');
    }
});


//@route      POST api/admin-auth
//@ desc      Auth admin & get token
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
        let admin = await Admin.findOne({email});

        if (!admin){
            return res.status(400).json({msg:'Invalid Credentials'});
        }

        const isMatch = await bcrypt.compare(password,admin.password);

        if(!isMatch){
            return res.status(400).json({msg:'invalid credentials'})
        }

        const payload={
            user:{
                id:admin.id
            }
        };

        jwt.sign(payload,config.get('jwtSecret'),{
            expiresIn: 360000
        },(err,token)=>{
            if (err){
                throw err;
            }
            else {
                res.json({token});
            }
        });



    }catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error');
    }
});





module.exports = router;