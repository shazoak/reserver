const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const Tables = require('../modals/Tables');
const auth = require('../middleware/auth');



//@route      POST api/tables
//@ desc      REGISTER a table
//@access     Private

router.post('/',[auth,[
        check('chairs','chairs is required').not().isEmpty(),
    ]],async (req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const {chairs} = req.body;
        try{

            const table=new Tables({
                chairs
            });

            await table.save();

        }
        catch (e) {

            console.error(e.message);
            res.status(500).send('server error');

        }
    }

);


//@route      GET api/tables
//@ desc      get all tables list
//@access     Private

router.get('/',auth,async(req,res)=>{

    try{
        const tables = await Tables.find();
        res.json(tables);

    }catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error');
    }
});


// @route    DELETE api/tables/:id
// @desc     Delete a table
// @access   Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const table = await Tables.findById(req.params.id);

        if (!table) return res.status(404).json({ msg: 'Table not found' });

        await Tables.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Table removed' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route    PUT api/tables/:id
// @desc     Update a table
// @access   Private
router.put('/:id', auth, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    const { status,chairs } = req.body;

    // Build contact object
    const tablesFields = {};
    if (status) tablesFields.status = status;
    if (chairs) tablesFields.chairs = chairs;

    try {
        let table = await Tables.findById(req.params.id);

        if (!table) return res.status(404).json({ msg: 'Contact not found' });

        table = await Tables.findByIdAndUpdate(
            req.params.id,
            { $set: tablesFields },
            { new: true }
        );

        res.json(table);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});







module.exports = router;