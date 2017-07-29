var express = require('express')
var router = express.Router({mergeParams: true})
var db = require('../actions/db');


router.get('/', function (req, res) {
  res.send(db.findAll(req.params.name,'routes'));
})

router.get('/:id', function (req, res) {
  res.send(db.findItem(req.params.name,'routes',req.params.id));
})

router.post('/', function (req, res) {
  res.send(db.createItem(req.params.name,'routes',req.body));
})

router.delete('/:id', function (req, res) {
  res.send(db.deleteItem(req.params.name,'routes',req.params.id));
})

router.put('/:id', function (req, res) {
  res.send(db.updateItem(req.params.name,'routes',req.params.id,req.body));
})


module.exports = router
