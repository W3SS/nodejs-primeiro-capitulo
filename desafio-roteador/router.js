var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;
	var page = verificaPathName(pathname);

	fs.readFile(page, function(err, html) {
		res.writeHead(200, {"Content-Type" : "text/html"});
		res.end(html);
	});
});

var montaDiretorio = function(file) {
	return __dirname + "/" + file;
};


var verificaPathName = function(path) {
	if (path == '/') {
		return montaDiretorio("/artigos.html"); 
	} else {
		var file = montaDiretorio(path + ".html");
		if (fs.existsSync(file)){
			return file;
		} else {
			return montaDiretorio("erro.html");
		}
	}
	
}

server.listen(3000, function(){
	console.log("Servidor rodando");
})