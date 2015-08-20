var http1 = require('http');
http1.createServer(function(req,res){
	res.write('<h1>First NodeJs App</h1>');
        res.write('<button>ok</button><br>');
	res.end('Hello World');
}).listen(3000);
console.log("Listen port Server 30000");