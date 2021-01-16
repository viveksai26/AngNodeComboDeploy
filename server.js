//Install express server
const express = require('express');
const path = require('path');

const app = require('./server/app')

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/user-management'));
app.use('/api', app);
app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/user-management/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);