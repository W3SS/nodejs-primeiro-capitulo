var http = require('http');

var atendeRequisicao = function(req, resp) {
	resp.writeHead(200, {"Content-Type" : "text/html"});
	resp.write("<h1> Hello word</h1>");
	resp.end();
}

var server = http.createServer(atendeRequisicao);

var servidorUp = function() {
	console.log('Servidor hello word esta rodando');
}

server.listen(3000, servidorUp);