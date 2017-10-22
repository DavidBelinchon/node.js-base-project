const express = require('express'),
      router = express.Router();



router.get('/', function (req, res) {

    res.send("init");
    
});

router.get('/get', function (req, res) {
    
    res.send("get");
    
});



module.exports = router;