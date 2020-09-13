const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');


const User = require('../modals/Users');


//@route      POST api/users
//@ desc      REGISTER a user
//@access     PUBLIC

router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('email','Email is required').isEmail(),
    check('password','password is required with minimum 6 characters').isLength({min:6})
],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {name, email , password} = req.body;
    try{

        let user = await User.findOne({email});
        if (user){
            return res.status(400).json({msg:"user already exists"});
        }
        user=new User({
            name,email,password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);

        await user.save();

        res.send('User saved');


    }
    catch (e) {

        console.error(e.message);
        res.status(500).send('server error');

    }
}

);


module.exports = router;