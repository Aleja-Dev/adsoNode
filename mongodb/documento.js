// show databases; //mostrar bases de datos
// db; // ver la base de datos donde me encuentro posicionado
// use codigofacilito; // "crear base de datos"




// insertar documento en colección:


// los documentos son como los objetos de tipo json  
user1 = {

    'username': 'user1',
    'age': 27,
    'email': 'user1@example.com'

};

db.users.insert(user1); //insertar el documento en la colección, insert resive como argumento el objeto en el cual queremos persistir, user es el nombre de la colección, db es el objeto de la base de datos 






// db.users.find() comando que devuelve un cursor y sirve para conocer los documentos almacenados en una determinada colección a los cuales se les crea un atributo _id que guarda su identificador unico (ObjectId)

//ObjectId -> la cadena alfanumerica de ese objeto se crea a partir de 4 secciones 
//1. (timeStamp) fecha en la cual se inserto el registro 
//2. (identificador para el servidor)
//3. (PID)
//4. (AutoIncrement)   







// otra forma de insertar documentos en la colección db.user.insertOne(user1);

//otra forma de insertar documentos en la colección db.user.insertMany([

    // {

    //     'username': 'user2',
    //     'age': 37,
    //     'email': 'user2@example.com'
    
    // };


    
    // {

    //     'username': 'user3',
    //     'age': 29,
    //     'email': 'user3@example.com'
    
    // };


// ])

//otra forma db.users.save(user1);

//Al ejecutar estas dos opciones podemos ver los id unicos que se crean por defecto de los documentos persistidos





//obtener los documentos por medio de consultas 
db.users.insertMany([


    {
        
        'username': 'user7',
        'age': 20,
        'email': 'user7@example.com',
        'status': 'inactive'

    },
    {


        'username': 'user8',
        'age': 25,
        'email': 'user8@example.com',
        'status': 'active'


    },
    {


        'username': 'user9',
        'age': 28,
        'email': 'user9@example.com',
        'status': 'inactive'



    },


])



//Ejercicios de practica 
//Obtener el usuario con el username user7

db.users.find({ //El metodo find resive un parametro el cual es el documento y dentro de eso podemos hacer las consultas necesarias, en este caso es encontrar el username con user7

    username: 'user7'

})

db.users.findOne({ //diferencia: buscar unicamente sobre un documento, find retorna un cursor, findOne un documento

    username: 'user7'

})


//Obtener todos los usuarios con una edad mayor a 10

db.users.find({

    //Se hará la condición sobre el atributo age
    age: { $gt: 10} //gt es >

})

//Operadores relacionales
//$gt mayor que 
//$gte mayor o igual
//$lt menor que
//$lte menor o igual
//$ne diferente a 


//Obtener todos los usuarios con una edad menor a 50

bd.users.find({

    age: {$lt: 50}

}).count(); //cuenta la cantidad de registros con edad menor a 50




//Obtener la cantidad de usuarios con una edad mayor a 10 y cuyo status sea activo

bd.users.find({

    //todas las codiciones que se deben cumplir 
    $and:[

        //Las condiciones se ponen dentro de documentos 
        {age: {$gt: 10} },
        {status: 'active'}

    ]

})



//Obtener todos los datos cuya edad no sea 11


db.users.find({

    age: {$ne: 11}

})


//Obtener todos los usuarios que tengan por edad: 27 o 40 o 11
//1.

db.users.find({

    $or:[

        {age: 27},
        {age: 40},
        {age: 11}

    ]


})

//2. ($in) busca entre unos determinados datos 


db.status.find({

    age: { $in: [27,40,11] }

})


//Obtener todos los usuarios con atributo status 
db.status.find({

    status: {$exists: true}


})



//Obtener todos los usuarios con  status activo
//1.

bd.username.find({

    status: 'active' //==


})

//2.

db.users.find({

    $and:[

        {status: {$exists: true}}, //dentro del documento se detalla el tipo de condición
        {status: 'active'}


    ]


})




//Obtener todos los usuarios con status activo y correo electronico


db.users.find({

    $and:[

        {status: {$exists: true}},
        {status: 'active'},
        {email: {$exists: true}}

    ]


})




//Obtener el usuario con mayor edad

db.users.find().sort(

    {
        age: -1 //ordena la edad de manera descendente 
    }

).limit(1);




//Obtener los tres usuarios más jovenes  

db.users.find().sort(

    {
        age: 1 //ordena la edad de manera ascendente 
    }

).limit(3);


//Obtener los usuarios que tengan un correo terminado en .com


db.user.find(
    {
        email: /.com$/ //$ para indicar que terminan con eso 
    }
)


//Obtener correos que comiencen por user

db.users.find(

    {email: /^user/ } // ^ Para indicar que comienzan con eso  

)


//Obtener correos que tengan @


db.users.find(

    {email: /@/ } 

)
//-----------------------------------

db.users.find().skip(5); // se salta los primeros 5 documentos


db.users.find().pretty(); //pretty arregla los documentos como un json 


//Almacenar cursores en variables
var users = db.users.find();



//cursor: un objeto el cual nos permite conocer todos aquellos documentos obtenidos a partir de una consulta

//Despues de utilizar un cursor ya no se puede utilizar otra vez, lo recomendado es utilizarlo a traves de una nueva consulta 


bd.users.find().forEach(user => print(user.username)); //Lista todos los username





//Proyecciones: atributos que deseo conocer despues de realizar una determinada consulta

bd.user.find(

    {
        age: {$gte: 50}
    },

    {

        username: true


    }  //En este segundo parametro el cual es un documento pasado al find indicamos los atributos que queremos conocer, en este caso queremos conocer el username de los usuarios cuya edad sea 50 o mayor  


);



//Actualizar documentos:
//1.
var user = db.users.findOne();


user //para ver el documento 

//cambiamos dos de sus atributos 
user.age = 90
user.email = 'alejandrabuitrago@gmail.com'


db.users.save(user) //user posee un id el cual mongo buscará para actualizar los atributos que hemos cambiado arriba 



//2.

bd.users.update(

    {
        //id del documento que queremos modificar 
    },
    {

        $set: {
            username: 'ale'

        }//todos aquellos atributos que queramos modificar 

    }

);



bd.users.update(

    {
        //id del documento que queremos modificar 
    },
    {

        $unset: { //con el unset quito un atributo al cual le pongo true 
          
            saludo: true
            
        }//todos aquellos atributos que queramos modificar 

    }

);




bd.users.update(

    {
        //id del documento que queremos modificar o condicion especifica ejm: status: 'inactive'
    },
    {

        $set: { //atributos que queremos actualizar
          
            status: 'active'
            
        }

    },
    {
        multi: true //Por defecto update solo modifica un registro, para modificar más ponemos multi: true 
    }

);


//actualiza el primer documento que cumpla con la condición 
bd.users.updateOne(

    {
        'username': 'user9',
    },
    {

        $set: { //pondrá activo el estado de user9
          
            status: 'active'
            
        }

    }

);


//Se editarán todos los archivos que tengan email 
bd.users.updateMany(

    {
        email: { $exists: true}
    },
    {

        $set: { //pondrá activo el estado de user9
          
            bio: "añade tu biografía"
            
        }

    }

);


bd.users.updateMany(

    {
    },
    {

        $inc: { //incrementa la edad de todos los comentos en 1
          
            age: 1
            
        }

    }

);


//eliminar documentos
db.users.remove(

    { //condición para eliminar documentos 
        status: 'inactive'
    }

)





//Eliminar colección y base de datos:

db.users.drop();


db.dropDataBase();




user13 = {

    'username': 'user13',
    'email': 'user13@example.com',
    'age': 29,
    'status': 'active',
    'address': {
        'zip': 1001,
        'country': 'MX'

    },
    'courses': ['python', 'mongo', 'ruby', 'java'],
    'comments': [
        {
            body: 'Best course',
            like: true,
            tags: ['mongoDB']
        },
        {
            body: 'super exited',
            like: true
        },
        {

            body: 'the course is ok',

        },
        {
            body: 'bad courses, im disappointed',
            like: false,
            tags: ['bad', 'course', 'mongoDB']
        }

    ],
}

user14 = {

    'username': 'user14',
    'email': 'user14example.com',
    'age': 40,
    'status': 'active',
    'comments': [

        {
            body: 'Best course',
            like: true 
        },

    ]

}

user15 = {

    'username': 'user15',
    'email': 'user15@example.com',
    'age': 50,
    'status': 'active',
    'comments': [

        {

            body: 'Best course',
            like: false

        },

    ]



};

db.users.insertMany(
    
    [user13, user14, user15]
    
    
);



// ejercicios:


//Obtener todos los usuarios que radiquen en México

db.users.find(


    {

        'address.country': 'MX'

    }//con el . accedemos al atributo country de address


);



//Actualizar el código postal 


db.users.updateMany(


    {

        'address.zip': {$exists: true}


    },

    {

        $set: {

            'address.zip': 110

        }

    }



);


//Añadir dirección a todos los usuarios que no la posean 

db.users.updateMany(


    {

        'address.zip': {$exists: false}


    },

    {

        $set: {

            'address': {
                country: 'MX',
                zip: 2017
            }

        }

    }



);





//Obtener todos los usuarios que tengan en su listado de cursos python 

db.users.find(

    {
        courses: { $exists: true }
    }

);



//Obtener todos los usuarios con por lo menos un comentario positivo

db.users.find(


    {
        comments: {
            $elemMatch: { //$elemMatch nos permite filtrar sobre atributos de documentos dentro de listados
                like:false
            }
        }
    }

)




//Añadir un nuevo comentario posito al listado de comentarios para el usuario 13

db.users.updateOne(


    {
        username: 'user13'
    },
    {

        //push para añadir elementos al final de la lista
        $push: {

            comments: {
                like: true,
                body: 'El curso mongoDB me esta gustando'
            }

        }

    }



);


//Actualiza el segundo comentario del usuario 13


db.users.updateOne(


    {
        username: 'user13'
    },
    {

        //push para añadir elementos al final de la lista
        $push: {

            'comments.3.tags': 'Tutor' // accedemos a comments posición 3, atributo tags para agregar un nuevo tag al listado de tags

        }

    }



);


//Actualiza el comentario negativo del usuario 13

db.users.updateOne(


    {

        username: 'user13',
        'comments.like': false //Nos permite conocer el indice de los elementos dentro de la lista que queremos actualizar 


    },
    {

        $set: {

            'comments.$.body': 'El curso si me esta gustando',
            'comments.$.like': true //El $ es un comodin para indicar que no sabemos la poción donde se encuentra lo que debemos modificar 

        },

        $unset: {

            'comments.$.tags': true

        }



    }


);



//Crear respaldo de la base de datos 

//salimos del cliente y se crea una carpeta con mkdir, ejemplo:

// mkdir backup 

//Pare respaldar nuestra información utilizamos el programa mongodump --db nombre de la base de datos



//Restablecer los datos mongorestore


// 2:39:23 Como respaldar la informacion y volverla a cargar