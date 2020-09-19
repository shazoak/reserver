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

router.get('/user',auth, (req,res)=>{
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
});


//@route      POST api/auth
//@ desc      Auth user & get token
//@access     Public

router.post('/', (req,res)=>{

    const {email , password } = req.body;

    if(!email || !password){
        return res.status(400).json({msg:'Please Enter All Fields'});
    }

    User.findOne({email})
        .then(user =>{
            console.log(user.email);
            if(!user){
                return res.status(400).json({msg:'User Does Not Exists'})
            }

            bcrypt.compare(password,user.password)
                .then(isMatch =>{
                    if(!isMatch){
                        return res.status(400).json({msg:'Invalid Credentials'})
                    }

                    jwt.sign(
                        { id:user.id },
                        config.get('jwtSecret'),
                        {expiresIn : 3600},
                        (err,token)=>{
                            if(err){throw err}

                            res.json({
                                token,
                                user:{
                                    id:user.id,
                                    name:user.name,
                                    email:user.email,

                                }
                            })

                        }
                    );
                    })
                })

});






module.exports = router;