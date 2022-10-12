/*Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. 
Haz una función que devuelva una lista con todas las ovejas que sean de color rojo 
y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios. */

export default function contarOvejas(ovejas) {
    ovejas = ovejas.filter(function (oveja) {
        return (oveja.color === "rojo"
            && oveja.name.toLowerCase().includes("a")
            && oveja.name.toLowerCase().includes("n"))
    })
    return ovejas;
}