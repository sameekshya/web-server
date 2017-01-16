var express = require('express');

var middleware = require('./middleware.js');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(middleware.logger);

app.get('/express',function(req,res){
	res.send('Hello Express!!!');
}); 

app.get('/about',middleware.requireAuthentication,function(req,res){
	res.send('About Us.');
}); 

app.use(express.static(__dirname));

app.listen(PORT,function(){
	console.log('Server listening...'+PORT);
});