
const jwt = require('jsonwebtoken')


const generarJwt = ( identificacion, nombre, apellidos, direccion, telefono ) => {


    const payload = { identificacion, nombre, apellidos, direccion, telefono }


    return new Promise( (resolve, reject) => {


        jwt.sign(payload, process.env.SECRETKEY, {

            expiresIn: '180m'



        }, (err, token)=>{

            if (err) {

                reject("Error al generar el token")
                
            }else{

                resolve(token)

            }

        }
        
        ) 

    })



}

module.exports = {

    generarJwt


}