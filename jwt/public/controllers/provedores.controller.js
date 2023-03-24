
const Proveedor = require('../models/provedores.model')


const getProveedor = async (req, res) => {

    const proveedores =  await Proveedor.find()

    res.json({

        ok: 200,
        proveedores

    })

}


const postProveedor = async (req, res) => {

    const { nombre, apellido, direccion, estado, telefono, empresa, codigoEmpresa } =  req.body

    const guardarProveedor = new User( { nombre, apellido, direccion, estado, telefono, empresa, codigoEmpresa } )

    await guardarProveedor.save()

    return res.json({

        ok: 200,
        msg: "Proveedor guardado correctamente"

    })

}


const putProveedor = async (req, res) => {

    const id = req.params.id

    const proveedor =  req.body

    const editProveedor = Proveedor.findByIdAndUpdate(id, Proveedor)

    return res.json({

        ok: 200,
        msg: "proveedor editado correctamente"

    })

}


const deleteProveedor = async (req, res) => {

    const  id = req.params.id

    const deleteProveedor = Proveedor.findByIdAndDelete(id)

    res.json({

        ok: 200,
        msg: "Proveedor eliminado correctamente"

    })

}


module.exports = {

    getProveedor,
    postProveedor,
    putProveedor,
    deleteProveedor


}



