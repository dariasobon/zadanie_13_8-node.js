var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(request, response){
		if (request.method === 'GET' && request.url === '/hello') {
			response.setHeader("Content-Type", "text/html; charset=utf-8");
			fs.readFile('./index.html', 'utf-8', function(err, data) {
				if (!err) response.write(data);
				response.end();
			});
		} else {
			fs.readFile('./filenotfound.jpg', function(err,data){
			response.statusCode = 404;
			if(!err) response.write(data);
			response.end();
		});
	}
});
server.listen(9000);