const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.sdtlwig.mongodb.net/dbpeliculas?retryWrites=true&w=majority').then(
    ()=>console.log('Conexion exitosa')).catch(err=>console.error('Error al conectar', err))

module.exports = mongoose;