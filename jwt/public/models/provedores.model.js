const { Schema, model } = require('mongoose')


const modelProvedores = new Schema({


    identificacion:{

        type:String,
        uniqued:true


    },


    nombre:{

        type:String,
        required:['El nombre es obligatorio']


    },

    apellidos:{

        type:String,
        require:['Los apellidos son obligatorios']


    },


    direccion:{

        type:String,
        required:['La direccion es obligatoria']


    },

    estado:{

        type:Boolean,
        default:false


    },


    telefono:{

        type:Number 


    },

    empresa:{

        type:String 


    },

    codigoEmpresa:{

        type:String 


    }


})


module.exports = model('proveedor', modelProvedores)
