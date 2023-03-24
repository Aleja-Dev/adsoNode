
const bcrypt = require('bcrypt')

const User = require('../models/user.model')


const getUser = async (req, res) => {

    const usuarios =  await User.find()

    res.json({

        ok: 200,
        usuarios

    })

}




const postUser = async (req, res) => {

    const { documento, nombre, apellidos, sexo, genero, telefono, email, password, rol, direccion, estado } =  req.body

    const saveUser = new User( { documento, nombre, apellidos, sexo, genero, telefono, email, password, rol, direccion, estado } )

    saveUser.password = bcrypt.hashSync(password, 15)

    await saveUser.save()

    res.json({

        "ok": 200,
        "msg": "Usuario guardado correctamente"

    })

}


const putUser = async (req, res) => {

    const id = req.params.id

    const { documento, nombre, apellidos, sexo, genero, telefono, email, password, rol, direccion, estado } =  req.body

    const editUser = User.findByIdAndUpdate(id, { documento, nombre, apellidos, sexo, genero, telefono, email, password, rol, direccion, estado })

    
    editUser.password = bcrypt.hashSync(password, 15)
    

    res.json({

        "ok": 200,
        "msg": "Usuario editado correctamente"

    })

}


const deleteUser = async (req, res) => {

    const  id = req.params.id

    const deleteUser = User.findByIdAndDelete( id )

    return res.json({

        "ok": 200,
        "msg": "Usuario eliminado correctamente"

    })

}


module.exports = {

    getUser,
    getUserById,
    postUser,
    putUser,
    deleteUser


}



