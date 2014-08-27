allparams
===========

Combines all expressjs query,body,route and cookie params into one object  
Use with Express 3.4. Requires `express.json()` or `express.bodyParser()` for body parameters  
Requires `express.cookieParser()` for cookie parameters.
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
# Options
`noCookies` don't add cookies to the parameters  
**Warning**: always add secure cookies explicitly to ensure they cannot be overridden by a query or body parameter e.g.
```js
app.all('/any',allparams(),setToken);

function setToken(req,res,next){
	req.allParams.token=req.cookies['token'];
	next();
}
```
## Release History
|Version|Date|Description|
|:--:|:--:|:--|

|v0.1.2|2014-07-31|Always set req.allParams|
|v0.1.0|2014-07-16|Created|

# License 

(The MIT License)

Copyright (c) 2014 PC 
