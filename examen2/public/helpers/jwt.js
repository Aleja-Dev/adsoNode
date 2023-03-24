const jwt = require('jsonwebtoken')


const generarJwt = (documento,
    nombre,
    apellidos,
    sexo,
    genero,
    telefono,
    email,
    rol) => {


    const payload = {
        documento,
        nombre,
        apellidos,
        sexo,
        genero,
        telefono,
        email,
        rol
    }


    return new Promise((resolve, reject) => {


        jwt.sign(payload, process.env.SECRETKEY, {

                expiresIn: '45m'



            }, (err, token) => {

                if (err) {

                    reject("Error al generar el token")

                } else {

                    resolve(token)

                }

            }

        )

    })



}

module.exports = {

    generarJwt


}