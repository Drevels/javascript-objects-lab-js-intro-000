var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}
//function deleteFromObjectByKey(Object, key){
  //var newObj = object.assign({},object)
  //delete newObj[key];
 // return newObj;
 
}
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object;
}
