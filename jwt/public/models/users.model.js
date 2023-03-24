const { Schema, model } = require('mongoose')


const modelUser = new Schema({


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
        required:['Los apellidos son obligatorios']


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

    correo:{

        type:String,
        uniqued:true


    },

    contrasena:{

        type:String 


    }


})


module.exports = model('user', modelUser)
