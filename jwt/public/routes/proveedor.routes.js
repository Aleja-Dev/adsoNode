const { Router } = require('express')

const { getProveedor, postProveedor, putProveedor, deleteProveedor } = require('../controllers/provedores.controller')

const route = Router()


route.get('/', getProveedor)

route.post('/', postProveedor)

route.put('/', putProveedor)

route.delete('/', deleteProveedor)


module.exports = route