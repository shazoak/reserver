const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const auth = require('../middleware/auth');

const Order = require('../modals/Order');


//@route      GET api/orders
//@ desc      Get all users orders
//@access     PRIVATE

router.get('/',async (req,res) =>{
    try{
        const orders = await Order.find().sort({date:-1});
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

    const {enrolment,status,date,Q,tables,msg} = req.body;


    try {
        const newOrder = new Order({
            enrolment,status,date,Q,tables,msg
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

router.get('/',[
    check('enrolment','Enrolment is required').not().isEmpty()
],async (req,res) =>{
    try {
        await Order.findByIdAndUpdate(req.params.id, req.body);
        await Order.save();
        res.send(order)
    } catch (err) {
        res.status(500).send(err)
    }
});


//@route      DELETE api/orders/:id
//@ desc      DELETE order
//@access     PRIVATE

router.delete('/:id',auth,async (req,res) =>{

    try {
        const order = await Order.findByIdAndDelete(req.params.id);

        if (!order) res.status(404).send("No order found");
        res.status(200).send();
    } catch (err) {
        res.status(500).send(err)
    }


});




module.exports = router;