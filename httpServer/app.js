/*
let http=require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type':'text/plain'});
    res.end('Hello world /n');
}).listen(3000, '127.0.0.1');
*/

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

