var express = require('express')
var router = express.Router()
const { createUser, getAllUsers } = require('../modules/handlers/user')

router.get('/', getAllUsers)

router.post('/register', createUser)

module.exports = router
