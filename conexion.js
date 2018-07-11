//Conexión a Mongoose.
var mongoose = require('mongoose');
var schema= require('./shemaLibros');
mongoose.connect('mongodb://localhost/libros', function(error){
   if(error){
      throw error; 
   }else{
      console.log('Conectado a MongoDB');
   }
});