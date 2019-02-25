var express = require('express');
var router = express.Router();
const { createUser } = require('../modules/handlers/user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', createUser);

module.exports = router;
