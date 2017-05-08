var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type" : "text/html"});

	if (req.url == "/") {
		res.write("<h1>Pagina Principal</h1>");	
	} else if (req.url == "/bemvindo") {
		res.write("<h1>Pagina bemvindo</h1>");
	} else {
		res.write("<h1>Pagina nao encontrada</h1>");
	}

	res.end();
});

server.listen(3000, function() {
	console.log("servidor rodando");
});