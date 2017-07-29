var fs = require('fs');
var config = require('../../config.json');
var homepath = require('os').homedir();


function create(path) {
  path = getPath(path);
  if (!isExist(path)){
    return fs.mkdirSync(path);
  }else{
    return false;
  }
}

function list(path) {
  path = getPath(path);
  return fs.readdirSync(path).filter(file=>{
    return (file !== '.DS_store' && file.indexOf('.') !== 0);
  });
}

function isExist(path) {
  path = getPath(path);
  return fs.existsSync(path);
}

function getPath(path) {
  return homepath + config.projectsPath + '/' + path;
}

module.exports = {create,list,isExist}
