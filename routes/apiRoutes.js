const router =require('express').Router();
const db = require('../models');

router.get('/api/', (req,res) => {

    res.json(results);
})

router.post('/api/', (req,res) => {

    res.json(results);
})

router.put('/api/', (req,res) => {

    res.json(results);
})


module.exports = router;