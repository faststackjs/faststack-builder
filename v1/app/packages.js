var express = require('express')
var router = express.Router({mergeParams: true})
var file = require('../utils/file');
var npm = require('../utils/npm');


router.get('/', function (req, res) {
  var list = npm.list(req.params.name).dependencies;
  var packages = [];
  Object.keys(list).forEach(pack=>{
    packages.push({name:pack,version:list[pack]});
  })
  res.send(packages);
})

router.get('/:id', function (req, res) {
  var list = npm.list(req.params.name).dependencies;
  var packages;
  Object.keys(list).forEach(pack=>{
    if (pack === req.params.id) {
      packages = {name:pack,version:list[pack]};
    }
  })
  res.send(packages);
})

router.post('/', function (req, res) {
  npm.install(req.params.name,req.body.name).then(message => {
    res.send(message)
  }).catch(error => {
    res.send(error)
  })
})

router.delete('/:id', function (req, res) {
  npm.uninstall(req.params.name,req.params.id).then(message => {
    res.send(message)
  }).catch(error => {
    res.send(error)
  })
})


module.exports = router
