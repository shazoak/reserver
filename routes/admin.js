const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');



const Admin = require('../modals/Admin');


//@route      POST api/admin
//@ desc      REGISTER a admin
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

            let admin = await Admin.findOne({email});
            if (admin){
                return res.status(400).json({msg:"admin already exists"});
            }
            admin=new Admin({
                name,email,password
            });

            const salt = await bcrypt.genSalt(10);
            admin.password = await bcrypt.hash(password,salt);

            await admin.save();

            // res.send('Admin saved');

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


        }
        catch (e) {

            console.error(e.message);
            res.status(500).send('server error');

        }
    }

);


module.exports = router;