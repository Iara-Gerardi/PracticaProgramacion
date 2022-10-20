const express = require('express')
const app = express()
const port = 7000

let notes = [
  "uno", "dos", "tres"
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

// La función del controlador de eventos acepta dos parámetros. 
// El primer parámetro request contiene toda la información de la solicitud HTTP 
// y el segundo parámetro response se utiliza para definir cómo se responde a la solicitud.

// En nuestro código, la solicitud se responde utilizando el método send del objeto response. 
// Llamar al método hace que el servidor responda a la solicitud HTTP enviando una respuesta que contiene 
// el string <h1>Hello World!</h1>, que se pasó al método send. Dado que el parámetro es un string, 
// express establece automáticamente el valor del header Content-Type en text/html. 
// El código de estado de la respuesta predeterminado es 200.


app.get('/api/notes', (request, response) => {
  response.json(notes)
})

// La solicitud se responde con el método json del objeto response. 
// Llamar al método enviará el array notes que se le pasó como un string con formato JSON. 
// Express establece automáticamente el header Content-Type con el valor apropiado de application/json.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})