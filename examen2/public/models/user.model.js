const { Schema, model } = require('mongoose')


const modelUser = new Schema({

    id:{

        type:Number

    },

    documento:{

        type:String,
        uniqued:true


    },


    nombre:{

        type:String


    },

    apellidos:{

        type:String


    },


    sexo:{

        type:String


    },

    genero:{

        type:String


    },


    telefono:{

        type:String,
        required:['El teléfono es requerido']


    },

    email:{

        type:String,
        uniqued:true


    },

    password:{

        type:String 


    },

    rol:{

        type:String 


    },

    direccion:{

        type:String,
        required:['La dirección es requerida']


    },

    estado:{

        type:Boolean 


    }


})


module.exports = model('user', modelUser)
