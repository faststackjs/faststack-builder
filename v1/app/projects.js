var express = require('express')
var router = express.Router()
var folder = require('../utils/folder');
var projectsActions = require('../actions/projects');

// import nested routes
var projects      = require('./projects');
var connections   = require('./connections');
var layers        = require('./layers');
var models        = require('./models');
var packages      = require('./packages');
var routes        = require('./routes');


router.get('/', function (req, res) {
  res.send(projectsActions.list())
})


router.post('/', function (req, res) {
  projectsActions.create(req.body.name).then(message=>{
    res.send(message);
  })
})


router.get('/:name', function (req, res) {
  res.send(projectsActions.getByName(req.params.name));
})


router.get('/:name/isExist', function (req, res) {
  res.send(folder.isExist(req.params.name));
})

// router.put('/:name', function (req, res) {
//   res.send('update')
// })
//
//
// router.delete('/:name', function (req, res) {
//   res.send('delete')
// })




// setup nested routes
router.use('/:name/connections', connections);
router.use('/:name/layers', layers);
router.use('/:name/models', models);
router.use('/:name/packages', packages);
router.use('/:name/routes', routes);



module.exports = router
