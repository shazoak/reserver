const express = require('express');
const router = express.Router();



//@route      GET api/auth
//@ desc      GET logged in user
//@access     PRIVATE

router.get('/',(req,res)=>{
    res.send('get logged in user');
});


//@route      POST api/auth
//@ desc      Auth user & get token
//@access     Public

router.post('/',(req,res)=>{
    res.send('Log in users');
});





module.exports = router;