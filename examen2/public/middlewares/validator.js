
const { validationResult } = require('express-validator')

const User = require('../models/user.model')

const validatorPath = async (req, res, next) =>{

    const errors = validationResult(req)

    if(!errors.isEmpty()){

        return res.status(400).json(errors)

    }

    next()
}


const EmailExisting = async ( email = '') => {


    const emailExisting = await User.findOne( { email } )

    if(emailExisting){

        throw new Error('El correo ya existe en la base de datos')
    }

    
}


const DocumentoExisting = async ( documento = '') => {


    const documentoExisting = await User.findOne( { documento } )

    if(documentoExisting){

        throw new Error('El documento ya existe en la base de datos')
    }

    



}


module.exports = {

    validatorPath,
    EmailExisting,
    DocumentoExisting

}
