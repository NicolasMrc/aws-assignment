var express = require('express')
var router = express.Router()

// get the number in params and return its double
router.get('/', function (req, res, next) {
  res.render('documentation/index')
})

module.exports = router
