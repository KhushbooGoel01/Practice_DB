var http = require('http');
const { type } = require('os');
var data = {Reciever: "khushboo", Subject: "Backend Done", Body: "gghhgchfgf"}
http.createServer(function(req, res){
res.writeHead(200, {'Content-Type': 'application\json' })
res.write(JSON.stringify(data));
res.end();


}).listen(3900)