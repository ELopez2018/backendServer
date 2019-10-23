// requires
var express = require('express');
var mongoose = require('mongoose');

// Cofiguraciones para Actualizar
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Conexion Base de Datos

mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (error, res) => {
    if (error) {
        throw error;
    } else {
        console.log('Base de Datos :\x1b[32m%s\x1b[0m', ' ONLINE');
    }
});

//Inicializar Variables
var app = express();

// Rutas
app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });
});


// Escuchar peticiones
app.listen(3100, () => {
    console.log('Express Server corriendo en puerto 3100:\x1b[32m%s\x1b[0m', ' ONLINE');
});