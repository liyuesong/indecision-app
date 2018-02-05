const path = require('path'); //'path' is build-in
const express = require('express');
// a express application (express instance)
const app = express();

const publicPath = path.join(__dirname, '..', 'public');
// serve up public folder and everything inside
app.use(express.static(publicPath)); // customise express server, use this to register a middleware: something that run for each request

// setup some functions to run when make get request to the server
// path: for all unmatched routes, 
// func with arguements: req - contains information about the request, res - lets you manipulate the response the express server made
app.get('*', (req, res) => {
    // processing all not handled requests
    res.sendFile(path.join(publicPath, 'index.html')); // send file back
});

// start up the server: listen on specific port
app.listen(3000, () => {
    console.log("Server is up!");
});