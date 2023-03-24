const { Router } = require('express')

const { getUser, postUser, putUser, deleteUser } = require('../controllers/users.controller')

// const { check } = require('express-validator')

// const {  validatorPath, CorreoExisting } = require('../middlewares/validation')

// const { validatorJwt } = require('../middlewares/validationJwt')

const route = Router()


route.get('/', 

// [ 

//     validatorJwt


// ],

getUser)

route.post('/', 

// [
//     check('identificacion', 'la identificacion debe tener por lo menos 8 caracteres y maximo 10').isLength({min:8, max:10}),
    
//     // check('correo', 'ingrese un correo valido').isEmail(),

//     check('correo').custom( CorreoExisting ),
    
//     validatorPath


// ],




postUser)

route.put('/:id', putUser)

route.delete('/:id', deleteUser)


module.exports = route