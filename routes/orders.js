const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../modals/Users');
const Order = require('../modals/Order');


//@route      GET api/orders
//@ desc      Get all users orders
//@access     PRIVATE

router.get('/',auth,async (req,res) =>{
    try{
        const orders = await Order.find({user:req.user.id}).sort({date:-1});
        res.json(orders);

    }catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error');
    }
});


//@route      POST api/orders
//@ desc      Add new order
//@access     PRIVATE

router.post('/',[auth,[
    check('enrolment','Enrolment is required').not().isEmpty()
]], async (req,res) =>{

    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {enrolment,status,date,Q} = req.body;


    try {
        const newOrder = new Order({
            enrolment,status,date,Q,user:req.user.id
        });

        const order = await newOrder.save();
        res.json(order);

    }
    catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error');

    }



});





//@route      PUT api/orders/:id
//@ desc      update order
//@access     PRIVATE

router.get('/',(req,res) =>{
    res.send('Get all orders');
});



module.exports = router;