
const bcrypt = require('bcrypt')
const User = require('../models/users.model')


const getUser = async (req, res) => {

    const usuarios =  await User.find()

    res.json({

        ok: 200,
        usuarios

    })

}


const postUser = async (req, res) => {

    const { identificacion, nombre, apellidos, direccion, estado, telefono, correo, contrasena } =  req.body

    const saveUser = new User( { identificacion, nombre, apellidos, direccion, estado, telefono, correo, contrasena } )

    saveUser.contrasena = bcrypt.hashSync(contrasena, 25)

    await saveUser.save()

    res.json({

        ok: 200,
        msg: "Usuario guardado correctamente"

    })

}


const putUser = async (req, res) => {

    const id = req.params.id

    const { documento, identificacion, nombre, apellidos, direccion, telefono, correo, contrasena } =  req.body

    const editUser = User.findByIdAndUpdate(id, { documento, identificacion, nombre, apellidos, direccion, telefono, correo, contrasena })



    res.json({

        ok: 200,
        msg: "Usuario editado correctamente"

    })

}


const deleteUser = async (req, res) => {

    const  id = req.params.id

    const deleteUser = User.findByIdAndDelete(id)

    return res.json({

        ok: 200,
        msg: "Usuario eliminado correctamente"

    })

}


module.exports = {

    getUser,
    postUser,
    putUser,
    deleteUser


}



