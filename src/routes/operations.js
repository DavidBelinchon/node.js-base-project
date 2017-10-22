const express = require('express'),
      router = express.Router(),
      operations = require('../services/operationsService.js');


//http://localhost:3000/operate/sum/?num=1&num2=1
router.get('/sum', function (req, res) {

    res.send(''+operations.sum(req.query.num1,req.query.num2));
    
});

router.get('/minus', function (req, res) {
    
    res.send(''+operations.minus(req.query.num1,req.query.num2));
    
});

router.get('/multiply', function (req, res) {
    
    res.send(''+operations.multiply(req.query.num1,req.query.num2));
    
});

router.get('/divide', function (req, res) {
    
    res.send(''+operations.divide(req.query.num1,req.query.num2));
    
});



module.exports = router;