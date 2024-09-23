// Ejercicio 10. Encontrar el número más grande en un array
// Crea una función que encuentre el número más grande en un array.

listaNumeros = Array.from({length: 100}, (_, index) => (Math.random() * Math.random())*10)

aux = 0
for(item in listaNumeros){
    if(item > aux){
        aux = item
    }
}

console.log("El número más grande es ",aux)