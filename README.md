allparams
===========

Combines all expressjs query,body and route params into one object  
Use with Express 3.4

# Install

```bash
  npm install allparams
```
# Examples:

Initialization

```js
var allparams=require('allparams');
```
Use it

```js
app.all('/any',allparams(),sendit);

function sendit(req,res,next){
	res.send({all:req.allParams});
}
```


## Release History
|Version|Date|Description|
|:--:|:--:|:--|

|v0.1.0|2014-07-16|Created|

# License 

(The MIT License)

Copyright (c) 2014 PC 
