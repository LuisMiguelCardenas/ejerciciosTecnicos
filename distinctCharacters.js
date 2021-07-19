/* Crear una funcion que permita contar el total de los caracteres de una frase, 
sin tener encuenta espacios y no repetir letras en cada una de las palabras*/

let parrafo = 'gamer programming';
let array = parrafo.split(' ');

//console.log(array)
let result = [];

for (i=0;i<array.length; i++){
    result[i] = array[i].split('').reduce((acc, item) =>{
        if (!acc.includes(item)){
            acc.push(item);
        }
        return acc;
    }, []).length
}
//console.log(result)

let sum = 0;
 
for (let i = 0; i < result.length; i++) {
  sum += result[i];
}
console.log(sum)

