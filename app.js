var express = require('express');
var app = express();

var ExpressPeerServer = require('peer').ExpressPeerServer;

var options = {
    debug: true
}


var server = require('http').createServer(app);

app.use('/peerjs', ExpressPeerServer(server, options));

server.listen(process.env.PORT || 9000);