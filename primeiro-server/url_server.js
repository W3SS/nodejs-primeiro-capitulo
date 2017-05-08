var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type" : "text/html"});
	res.write("<h1>Dados da query string</h1>");

	var result = url.parse(req.url);

	console.log(result);

	for (var key in result) {
		res.write("<h2>" + key + " : " + result[key] + "</h2>");
	}

	res.end();
});

server.listen(3000, function() {
	console.log("servidor http rodando");
});