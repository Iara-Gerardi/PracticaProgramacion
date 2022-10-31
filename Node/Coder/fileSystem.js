const fs = require('fs')

// tomar nota de lo que dice la diapositiva 33. diapo 41 ejercicio

try {
  // El primer argumento es en que archivo, en el segundo que quiero que escriba, como tercer parametro puede tener un callback
  fs.writeFileSync('./fyh.txt', new Date().toLocaleString())
  const readFile = fs.readFileSync('./fyh.txt', 'utf-8')
  console.log(readFile)
} catch (err) {
  console.log(err)
}

// try {
//   const readFile = fs.readFileSync('./fyh.txt', 'utf-8')
//   console.log(readFile)
// } catch (err) {
//   console.log(err)
// }