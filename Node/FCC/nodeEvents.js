// En este archivo hay pruebas del video de node y express desde cero (fcc youtube)

// EventEmitter es una clase que saco del modulo events y se usa para gestionar eventos en node
const EventEmitter = require('events')

const emisorProductos = new EventEmitter();

// Creo un evento con el metodo .on, le doy un nombre y la funcion que va a realizar, luego con .emit puedo llamarlo
emisorProductos.on('compra', () => {
  console.log("se realizo una compra")
})

emisorProductos.emit('compra');

// Ejemplo de evento con argumentos en la funcion

emisorProductos.on('precioCompra', (precio) => {
  console.log(`se realizo una compra por $${precio}`)
})

emisorProductos.emit('precioCompra', 400);