module.exports = function all() {
  
  return function allParams(req, res, next) { 
    var all={};
    add(all,req.params);
    add(all,req.body); // assumes express.json() or express.bodyParser()
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