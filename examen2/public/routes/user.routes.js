const { Router } = require('express')


const rutas = Router()

const { check } = require('express-validator')

const {  getUser,  getUserById, postUser, putUser, deleteUser } = require('../controllers/user.controller')

const { validatorPath, EmailExisting, DocumentoExisting } = require('../middlewares/validator')

const { validatorJwt } = require('../middlewares/validatorJwt')

rutas.get('/', 

// [

//     validatorJwt


// ],

getUser)


rutas.post('/', 

[
    check('direccion', 'La dirección es obligatoria').not().isEmpty(),

    check('nombre', 'La dirección es obligatoria').not().isEmpty(),

    check('apellidos', 'La dirección es obligatoria').not().isEmpty(),


    check('telefono', 'El teléfono es obligatorio').not().isEmpty(),

    check('rol', 'Ingrese un rol valido').isIn( ['Administrador', 'Vendedor'] ),

    check('sexo', 'Ingrese un sexo valido').isIn( ['Femenino', 'Masculino', 'Otro'] ),

    check('sexo', 'La dirección es obligatoria').not().isEmpty(),


    check('genero', 'Ingrese un genero valido').isIn( ['Heterosexual', 'Homosexual', 'Lesbiana', 'Bisexual', 'Otro', 'No especifica'] ),

    check('genero', 'La dirección es obligatoria').not().isEmpty(),


    check('email').isEmail(),

    check('email').custom ( EmailExisting ),

    check('documento').custom ( DocumentoExisting ),

    validatorPath


],



postUser)

rutas.put('/:id', putUser)

rutas.delete('/:id', deleteUser)


module.exports = rutas