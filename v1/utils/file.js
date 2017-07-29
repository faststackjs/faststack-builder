var fs = require('fs');
var config = require('../../config.json');
var homepath = require('os').homedir();


function read(path) {
  path = getPath(path);
  return fs.readFileSync(path);
}

function write(path,data) {
  path = getPath(path);
  return fs.writeFileSync(path,data)
}

function isExist(path) {
  path = getPath(path);
  return fs.existsSync(path);
}

function getPath(path) {
  return homepath + config.projectsPath + '/' + path;
}


module.exports = {read,write,isExist}
