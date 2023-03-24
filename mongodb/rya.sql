create database rya;
 
use rya;


create table clientes(
    idCliente int (50) NOT NULL,
    idRol int (50) not null,
    nombreCompleto varchar(50) NOT NULL,
    documento int(50) NOT NULL, 
    direccion varchar(50) NOT NULL,
    fechaIngreso date NOT NULL,
    CONSTRAINT CHK_documento CHECK (documento > 0 and isnumeric(documento)),
    CONSTRAINT PK_cliente  PRIMARY KEY (idCLiente),
    CONSTRAINT FK_clienteRol FOREIGN KEY (idRol)
    REFERENCES roles(idRol),
    CONSTRAINT UC_cliente unique (documento)

  
);

 
 
create table empleados(
    
    idEmpleado int (50) NOT NULL,
    idObra int (50) NOT NULL, 
    estado boolean NOT NULL,
    CONSTRAINT PK_permisos PRIMARY KEY (idEmpleado),
    CONSTRAINT FK_empleadoObra FOREIGN KEY (idObra)
    REFERENCES obras(idObra)
    
 
);
 
 
 
create table usuarios(
 
    idUsuario int (50) NOT NULL,
    idRol int (50) NOT NULL,
    nombreAdmin varchar(50) NOT NULL,
    usuario varchar(50) not null,
    contrasena varchar(50) not null,
    CONSTRAINT PK_permisos  PRIMARY KEY (idUsuario),
    CONSTRAINT FK_usuarioRol FOREIGN KEY (idRol)
    REFERENCES roles(idRol),
    CONSTRAINT UC_usuario unique (usuario, contrasena)

    

);
 
create table roles(
 
    idRol int (50) NOT NULL,
    nombre varchar (50) not null,
    estado boolean not null,
    CONSTRAINT PK_permisos  PRIMARY KEY (idRol),
    CONSTRAINT UC_rol unique (nombre)


);
 
 
 
create table permisos(
 
    idPermiso int (50) NOT NULL,
    idRol int (50) NOT NULL,
    nombre varchar (50) not null,
    CONSTRAINT PK_permisos PRIMARY KEY(idPermiso),
    CONSTRAINT FK_permisoRol FOREIGN KEY (idRol)
    REFERENCES roles(idRol),
    CONSTRAINT UC_permiso unique (nombre)

    
   
 
);
 
 
 
 
create table servicios(
 
    idServicio int (50) NOT NULL,
    nombreServicio varchar (50) not null,
    categoria varchar (50) not null,
    info varchar (50) not null,
    CONSTRAINT PK_permisos PRIMARY KEY (idServicio),
    CONSTRAINT UC_servicio unique (nombre)
 
);
 
 
create table materiales(
 
    idMaterial int (50) NOT NULL,
    nombre varchar (50) not null,
    precioMedida float (50) not null,
    estado boolean not null,
    fecha date not null,
    CONSTRAINT PK_permisos PRIMARY KEY (idMaterial),
    CONSTRAINT UC_material unique (nombre)

 
);
 
 
create table obras(
 
    idObra int (50) NOT NULL,
    idCliente int (50) NOT NULL,
    estado boolean NOT NULL,
    fechaInicio date NOT NULL,
    fechaFinal date NOT NULL,
    CONSTRAINT PK_obra PRIMARY KEY (idObra),
    CONSTRAINT FK_obraCliente FOREIGN KEY (idCLiente)
    REFERENCES clientes(idCLiente)

        
    
);
 
 
create table cotizaciones(
 
    idCotizacion int (50) NOT NULL,
    idCliente int (50) NOT NULL,
    estado boolean NOT NULL,
    fecha date NOT NULL,
    subtotal float NOT NULL,
    CONSTRAINT PK_cotizacion PRIMARY KEY (idCotizacion),
    CONSTRAINT FK_clienteCotizacion FOREIGN KEY (idCLiente)
    REFERENCES clientes(idCLiente),
    
);
 
 
 
create table solicitudes(
 
    idSolicitud int (50) NOT NULL,
    idCliente int (50) NOT NULL,
    descripcion varchar(150) NULL,
    fecha date NOT NULL,
    estado boolean NOT NULL,
    CONSTRAINT PK_solicitud PRIMARY KEY (idSolicitud),
    CONSTRAINT FK_solicitudCliente FOREIGN KEY (idCLiente)
    REFERENCES clientes(idCLiente)

);
