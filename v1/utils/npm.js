const { exec } = require('child_process');
var config = require('../../config.json');
var homepath = require('os').homedir();
var file = require('../utils/file');

function init(path) {
  path = getPath(path);
  return new Promise((resolve, reject) =>{
    exec('npm init -y',{cwd:path},(error, stdout, stderr)=>{
      if (error) reject(error);
      else resolve({message:'project created'})
    })
  });
}

function list(path) {
  return JSON.parse(file.read(path+'/package.json'));
}

function install(path,packageName) {
  path = getPath(path);
  return new Promise((resolve, reject) =>{
    exec('npm install '+packageName+' --save',{cwd:path},(error, stdout, stderr)=>{
      if (error) reject(error);
      else resolve({message:'package installed'})
    })
  });
}

function uninstall(path,packageName) {
  path = getPath(path);
  return new Promise((resolve, reject) =>{
    exec('npm uninstall '+packageName+' --save',{cwd:path},(error, stdout, stderr)=>{
      if (error) reject(error);
      else resolve({message:'package uninstalled'})
    })
  });
}

function isExist() {

}

function getPath(path) {
  return homepath + config.projectsPath + '/' + path;
}


module.exports = {init,list,install,uninstall,isExist};
