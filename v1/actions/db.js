var folder    = require('../utils/folder');
var file      = require('../utils/file');
var _         = require('lodash');




function findAll(project,modelName) {
  return getDatabase(project)[modelName];
}

function findItem(project,modelName,id) {
  return _.find(getDatabase(project)[modelName], {id});
}

function createItem(project,modelName,data) {
  var list = getDatabase(project);
  list[modelName].push(data);
  saveDatabase(project,list);
  return data;
}

function updateItem(project,modelName,id,data) {
  var list = getDatabase(project);
  var index = _.findIndex(list[modelName], {id});
  list[modelName].splice(index, 1, data);
  saveDatabase(project,list);
  return data;
}

function deleteItem(project,modelName,id) {
  var list = getDatabase(project);
  list[modelName] = _.reject(list[modelName], {id});
  saveDatabase(project,list);
  return true;
}







function getDatabase(project) {
  return JSON.parse(file.read(project+'/faststack.json'))
}

function saveDatabase(project,data) {
  file.write(project+'/faststack.json',JSON.stringify(data,null,4));
  return true;
}


module.exports = {findAll,findItem,createItem,updateItem,deleteItem}
