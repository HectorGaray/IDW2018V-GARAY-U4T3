var mongoose = require('mongoose');
var schema= require('./shemaLibros');

var Libro= mongoose.model('Libros',schema,'libro');


//agregar

var libro1= new Libro({

    name: 'Libro1',
    author:'autor1',
    body:'cuerpo 1',
    comments:{body:'cuerpo 1',Date:'2011/28/03'},
    hidden:true,
    meta:{votes:5,favs:10}


});


libro1.save(function(error){
if(error){
    console.log(error);
    process.exit(1);
}
console.log("registro guardado")
});

//Eliminar
Libro.remove({_id: ''}, function(error){
    if(error){
      console.log("Error")
    }else{
       console.log("OK")
    }
 });
 //Update
 Libro.update({ _id:''},{$set:{title:'otro titulo'}},
function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("actualizado");
    console.log(docs);
    process(0);
}
)
//consultar
Libro.find({},function(error,docs){
    if(error){
        console.log(error);
        process(1);

    }
    console.log("consulta");
    console.log(docs);
});