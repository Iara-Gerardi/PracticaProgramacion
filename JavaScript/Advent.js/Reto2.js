/*
Te ha llegado una carta ✉️ con todos los regalos que debes preparar. 
El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! 
(aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, 
por ejemplo _playstation, que significa que está tachado y no se tiene que contar.
*/

export default function listGifts(letter) {

  let object = {}
  letter = letter.split(" ");

  for (let i = 0; i < letter.length; i++) {

    if ( letter[i] === "" || letter[i].includes("_") || object.hasOwnProperty(letter[i])) {
      continue;
    }

    let currentWord = letter[i]
    let array = letter.filter((el) => { return el === letter[i] })
    
    object = {
      ...object,
      [currentWord]: array.length
    }
  }

  return object;
}