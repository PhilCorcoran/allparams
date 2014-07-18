module.exports = function all(options) {
  
  var options=options || {};

  return function allParams(req, res, next) { 
    var all={};
    if(!options.noCookies){
      add(all,req.cookies);
    }
    add(all,req.params);
    add(all,req.body);
    add(all,req.query);
    if(isEmpty(all)) all=undefined;
    else req.allParams=all;
    return next();

  function add(prams,obj){
    for(var k in obj){
      if(obj.hasOwnProperty(k)){
        prams[k]=obj[k];
      }
    }   
  }

  function isEmpty(map) {
    for(var key in map) {
      if (map.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
}
}
