function saludar(nombre) {
  return `Hola ${nombre}`
}

function holaMundo(){
  return 'hola mundo';
}

module.exports.saludar = saludar;
module.exports.holaMundo = holaMundo;

/*Para importar ambas funciones podria usar const {saludar, holaMundo} = require("./saludos.js") */