const express = require('express');
const router = express.Router();

const adminRouter = require('./adminRouter');

router.get('/list', (req, res, next)=>{
    res.send({
        "bem vindo": "ao list",
        ...req.query
    });
});

router.get('/list/:id/:name', (req, res, next) =>{
    res.send({
        id: req.params.id,
        name: req.params.name
    });
});

router.use('/admin', adminRouter);

module.exports = router;