var folder = require('../utils/folder');
var file = require('../utils/file');
var npm = require('../utils/npm');

function list() {
  var list = folder.list('');
  if (list) {
    return list;
  }else{
    return;
  }
}

function getByName(name) {
  return JSON.parse(file.read(name+'/faststack.json')).info;
}

function create(name) {
  folder.create(name);
  file.write(name+'/faststack.json',JSON.stringify({info:{name},models:[],routes:[],layers:[],connections:[]},null,4));
  folder.create(name+'/layers');
  return npm.init(name)
}


module.exports = {list,create,getByName}
