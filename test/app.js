var express=require('express');
var allparams=require('allparams');

var app=express();
var port=process.env.PORT || 5555;

app.use(express.json());
app.use(express.cookieParser());
app.all('/any/:id',allparams(),sendit);

function sendit(req,res,next){
	res.send({all:req.allParams});
}

app.listen(port);
console.log(port +' starting');

