const express = require('express');
const router = express.Router();

const Printing = require('../Model/Printingpress.model');

router.post('/', async (req, res, next) =>{                                 //Post
    try {
        const print = new Printing(req.body);
        const result = await print.save();
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

router.get('/', async (req, res, next) =>{                                  //Get All
    try {
        const result = await Printing.find({},{__v: 0});
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

router.get('/:id', async (req, res, next) =>{                               //Get Specific
    const id = req.params.id;
    try {
        const result = await Printing.findById(id);
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

router.delete('/:id', async (req, res, next) =>{                            //Delete
    const id = req.params.id;
    try {
        const result = await Printing.findByIdAndDelete(id);
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

router.patch('/:id', async (req, res, next) =>{                             //Patch
    try {
        const id = req.params.id;
        const updates = req.body;
        const result = await Printing.findByIdAndUpdate(id, updates);
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});


module.exports = router;