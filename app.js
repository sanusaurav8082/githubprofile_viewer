var express = require("express");
var app=express();
var path=require('path');
var bodyParser = require('body-parser')
var port = 3000;
app.use('/',function(req,res,next){
	console.log("Server running on port 3000");
	return next();
});
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname,'public')));
app.set("view engine","ejs");
app.get('/',function(req,res){
	res.render('index');
});
app.post('/',function(req,res){
	res.render('post',{msg:req.body.username});
});
app.listen(3000);
