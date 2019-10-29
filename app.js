// requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Inicializar Variables
var app = express();

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

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



// Importar Rutas
var approutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');

// Rutas
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);

app.use('/', approutes);


// Escuchar peticiones
app.listen(3100, () => {
    console.log('Express Server corriendo en puerto 3100:\x1b[32m%s\x1b[0m', ' ONLINE');
});