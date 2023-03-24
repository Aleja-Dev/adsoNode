const express = require('express')

const cors = require('cors')

const { DBmongo } = require('../public/db/config')


class Server {


    constructor(){

        this.app = express()
        this.port = process.env.PORT


        this.DBconnection()

        this.middlewares()

        this.routes()


    }


    DBconnection(){

        DBmongo()

    }


    middlewares(){

        this.app.use( cors() )


        this.app.use( express.json() )


        this.app.use( express.static('public') )



    }


    routes(){

        this.app.use('/api/auth',  require('../public/routes/auth.routes'))

        this.app.use('/api/users',  require('../public/routes/user.routes'))

    }


    listen(){

        this.app.listen(this.port, ()=>{

            console.log("servidor corriendo en el puerto " + this.port)

        })



    }





}


module.exports = Server
