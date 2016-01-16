var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var id = faker.random.uuid();
  var nombre = faker.name.findName();
  var contenido = faker.lorem.sentence();
  var fecha = faker.date.future();
  var imagen = faker.image.people();
  return {
	id: id,
    nombre: nombre,
	contenido: contenido,
	fecha: fecha,
    imagen: imagen
  }
}

app.get('/Mostrar', function (req, res) {
  var cantidad = _.random(11,33)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
 
})

app.get('/', function (req, res) {
  res.send('Página inicial');
})

app.get('/YoSoy', function (req, res) {
  res.send('SimpleCalitos');
})

app.listen(3000);