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
var express=require('express');
var allparams=require('allparams');

var app=express();
app.all('/any',allparams(),sendit);

function sendit(req,res,next){
	res.send({all:req.allParams});
}
```

Run the node service and post `{"name":"Frank"}` to the url
`http://localhost/any/411?q=33`
You should see this output
```js
all: {
id: "411"
name: "frank"
q: "33"
}
```
## Release History
|Version|Date|Description|
|:--:|:--:|:--|

|v0.1.0|2014-07-16|Created|

# License 

(The MIT License)

Copyright (c) 2014 PC 
