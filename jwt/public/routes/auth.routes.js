const { Router } = require('express')

const { postAuth } = require('../controllers/auth.controller')

const routes = Router()



routes.post('/', postAuth)


module.exports = routes