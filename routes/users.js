const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');



const User = require('../modals/Users');


//@route      POST api/users
//@ desc      REGISTER a user
//@access     PUBLIC

router.post('/', (req,res)=>{

    const {name , email , password ,password2} = req.body;

    if(!name || !email || !password || !password2){
        return res.status(400).json({msg:'Please Enter All Fields'});
    }
    if(password2 !== password){
        return res.status(400).json({msg:'Confirm Password is not match with entered password'});
    }

    User.findOne({email})
        .then(user =>{
            if(user){
                return res.status(400).json({msg:'User Already Exists'})
            }
            const newUser = new User({
                name,email,password
            });

            bcrypt.genSalt(10,(err,salt) => {
                bcrypt.hash(newUser.password,salt,(err,hash) =>{
                    if(err){
                        throw err;
                    }
                    newUser.password = hash;
                    newUser.save()
                        .then(user =>{

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
            })
        });
}

);


module.exports = router;