/* ¿Cuantas veces se repite un elemento en un array?

Imprimir en pantalla si un elemento se repite en el array dado, y cuantas veces se repite*/



const array = [1,4,1,4,3,3,3,2];

var result = {};

for (i=0;i<array.length;i++){
    if (result[array[i]]){
        result[array[i]] += 1
    }else(
        result[array[i]] = 1
    )
}

console.log(result);

for (let prop in result){

    if (result[prop]>=2){
        console.log(prop + ':' + result[prop] )
    }
    
}

