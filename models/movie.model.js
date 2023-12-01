const mongose = require('mongoose');

let movieSchema = new mongose.Schema({
    titulo: {type:String},
    director: {type:String},
    isbn: {type:String},
    genero: {type:String},
    duracion:{type:Number},
    anho: {type:Number},
});

module.exports = mongose.model('Movie',movieSchema,'movie');
