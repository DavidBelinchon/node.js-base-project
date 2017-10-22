const express = require('express'),
      app = express(),
      configuration = require('./config/config.js'),
      initializeRoute = require('./src/routes/initialize.js'),
      operationsRoute = require('./src/routes/operations.js');



// CORS header
app.use(function(req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET, POST');
   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
   next();
});


// Expose webpage
app.use('/', express.static(__dirname + '/src/web'));


// Routes
app.use('/initialize', initializeRoute);
app.use('/operate', operationsRoute);





app.listen(configuration.port,function () {
    console.log('Node base project listening at port ' + configuration.port);
});
