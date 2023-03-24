const { request, response } = require('express')

const bycrypt = require('bcrypt')

const User = require('../models/user.model')

const { generarJwt } = require('../helpers/jwt')

const postAuth = async (req = request, res = response ) => {


    const { email, password } =  req.body




    try {

        const usuario = await User.findOne( { email })


        if(!usuario){

            return res.status(400).json({
    
                msg: "El usuario no esta registrado en la base de datos"
    
            })
    
    
        }


        if(!usuario.estado){

           return res.status(400).json({
                msg: "Lo sentimos! El usuario se encuentra inactivo"
            })

        }


        const compararContrasena = bycrypt.compareSync(password, usuario.password)

        if(!compararContrasena){

           return res.status(400).json({

                msg: "Error! la contraseña no coincide"

            })


        }


        const token = await generarJwt( 

            usuario.documento,
            usuario.nombre,
            usuario.apellidos,
            usuario.sexo,
            usuario.genero,
            usuario.telefono,
            usuario.email,
            usuario.rol

        )


        res.json({

            msg: "ok",
            token

        })


        
    } catch (error) {

        console.log(error)

       res.status(500).json({
            msg: "Error 500! comunicate con el administrador"
        })

        
    }

   
}


module.exports = {

    postAuth


}



