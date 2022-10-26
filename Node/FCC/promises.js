const promesaCumplida = false;

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve("promesa cumplida");
    } else {
      reject("promesa sin cumplir")
    }
  }, 3000)
});

const handleSuccessfullyPromise = (valor) => {
  console.log(valor)
}

const handleUnsuccessfullyPromise = (razonRechazo) => {
  console.log(razonRechazo)
}

// Le paso las funciones que gestionan la respuesta, la primera es la de resolve y la segunda la de reject
// miPromesa.then(handleSuccessfullyPromise, handleUnsuccessfullyPromise)

miPromesa
  .then(handleSuccessfullyPromise)
  .catch(handleUnsuccessfullyPromise)

// para encadenar funciones asincronas podes usar el await, 
// para eso hay que escribir async antes del function de la funcion asincronica

// Las respuestas http incluyen: un codigo y texto de estado, la version de HTTP, headers y body de la peticion

/*Codigos de estado HTTP:
-Informativas (100-199)
-Satifactoria (200 -299)
-Redirecciones (300-399)
-Errores de los clientes (400-499)
-Errores de los servidores (500-599)*/

