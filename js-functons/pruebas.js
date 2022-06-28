//let {arrayPosition}= require('./mm-tse-latam-js-functions.js');
//let assert = require('assert');
import assert from 'assert';
import  {arrayPosition,arraySize,arrayMerge,arrayChange,loopConditional,sortItOut,arrayToObject,objectData} from './mm-tse-latam-js-functions.js';

let pruebasCorrectas  = 0 ;
let pruebasTotales = 34 ;

function testArrayPosition(){
    
    assert.deepEqual(5,arrayPosition([1,2,3,4,5,6,7]),
    "Falla en prueba 1 en ArrayPosition --- el 5to Elemento de [1,2,3,4,5,6,7] deberia ser 5");
    assert.deepEqual(5,arrayPosition([1,2,3,4,5]),
    "Falla en prueba 2 en ArrayPosition --- el 5to Elemento de [1,2,3,4,5] deberia ser 5"
    );
    assert.deepEqual(undefined,arrayPosition([]),
    "Falla en prueba 3 en ArrayPosition --- el 5to Elemento de [] no existe");
    assert.deepEqual('a',arrayPosition([1,2,3,4,'a']),
    "Falla en prueba 4 en ArrayPosition --- el 5to Elemento de [1,2,3,4,'a'] deberia ser 'a'");
    pruebasCorrectas+= 4;
    console.log("---Pruebas con ArrayPosition exitosas---");    

}

function testArraySize(){
    assert.deepEqual(7,arraySize([1,2,3,4,5,6,7]),
    "Falla en prueba 1 en testArraySize -- La longitud de [1,2,3,4,5,6,7] deberia ser 7");
    assert.deepEqual(3,arraySize([1,2,3]),
    "Falla en prueba 2 en testArraySize -- La longitud de [1,2,3] deberia ser 2");
    assert.deepEqual(9,arraySize([1,2,3,4,5,6,7,8,9]),
    "Falla en prueba 3 en testArraySize -- La longitud de [1,2,3,4,5,6,7,8,9] deberia ser 9");
    assert.deepEqual(0,arraySize([]),
    "Falla en prueba 4 en testArraySize -- La longitud de [] deberia ser 0");
    assert.deepEqual(0,arraySize(undefined),
    "Falla en prueba 5 en testArraySize -- La longitud de undefined deberia ser 0");
    pruebasCorrectas+=5;
    console.log("---Pruebas con ArraySize exitosas---");    
}

function testArrayMerge(){
    
    assert.deepEqual([1,2],arrayMerge([1],[2]),
    "Falla en prueba 1 en testArrayMerge -- [1] + [2] deberia resultar [1,2]");
    assert.deepEqual([1,2,3],arrayMerge([1,2],[3]),
    "Falla en prueba 2 en testArrayMerge -- [1,2] + [3] deberia resultar [1,2,3]");
    assert.deepEqual([1,2,3,4],arrayMerge([1],[2,3,4]),
    "Falla en prueba 3 en testArrayMerge -- [1] + [2,3,4] deberia resultar [1,2,3,4]");
    assert.deepEqual([1],arrayMerge([1],[]),
    "Falla en prueba 4 en testArrayMerge -- [1] + [] deberia resultar [1]");
    assert.deepEqual([],arrayMerge([],[]),
    "Falla en prueba 5 en testArrayMerge -- [] + [] deberia resultar []");
    assert.deepEqual([1],arrayMerge([],[1]),
    "Falla en prueba 6 en testArrayMerge -- [] + [1] deberia resultar [1]");
    pruebasCorrectas+=6;
    console.log("---Pruebas con ArrayMerge exitosas---")    ;
}

function testArrayChange(){
    assert.deepEqual(['1'],arrayChange([1]),
    "Falla en prueba 1 en testArrayChange -- [1] deberia resultar ['1']");
    assert.deepEqual(['1','2'],arrayChange([1,2]),
    "Falla en prueba 2 en testArrayChange -- [1,2] deberia resultar ['1','2']");
    assert.deepEqual([],arrayChange([]),
    "Falla en prueba 3 en testArrayChange -- [] deberia resultar []");
    assert.deepEqual(['1','hola'],arrayChange([1,'hola']),
    "Falla en prueba 4 en testArrayChange -- [1,'hola'] deberia resultar ['1','hola']");
    pruebasCorrectas+=4;
    console.log("---Pruebas con ArrayChange exitosas---");
}

function testLoopConditional(){
    assert.deepEqual(6,loopConditional('aaaaaa','a'),
    "Falla en prueba 1 en testLoopConditional -- 'aaaaaa' repite 6 veces 'a'");
    assert.deepEqual(0,loopConditional('aca no hay repeticiones','2'),
    "Falla en prueba 2 en testLoopConditional -- 'aca no hay repeticiones' repite 0veces '2'");
    assert.deepEqual(3,loopConditional('tenemos dos e','e'),
    "Falla en prueba 3 en testLoopConditional -- 'tenemos dos e' repite 2 veces 'e'"
    );
    pruebasCorrectas+=3;
    console.log("---Pruebas con LoopConditional exitosas---");
}

function testSortItOut(){
    assert.deepEqual([1,2],sortItOut([2,1]),
    "Falla en prueba 1 en testSortItOut -- Ordenar [2,1] deberia resultar [1,2]");
    assert.deepEqual([1,2,5,6,10,15,23,32],sortItOut([1,6,15,23,5,2,32,10]),
    "Falla en prueba 2 en testSortItOut -- Ordenar [1,6,15,23,5,2,32,10] deberia resultar [1,2,5,6,10,15,23,32]");
    assert.deepEqual([1,2,3,4],sortItOut([3,2,4,1]),
    "Falla en prueba 3 en testSortItOut -- Ordenar [3,2,4,1] deberia resultar [1,2,3,4]");
    assert.deepEqual([1],sortItOut([1]),
    "Falla en prueba 4 en testSortItOut -- Ordenar [1] deberia resultar [1]");
    assert.deepEqual([],sortItOut([]),
    "Falla en prueba 5 en testSortItOut -- Ordenar [] deberia resultar []");
    assert.deepEqual([1,2,3],sortItOut([3,1,2]),
    "Falla en prueba 6 en testSortItOut -- Ordenar [3,1,2] deberia resultar [1,2,3]");
    assert.deepEqual(undefined, sortItOut(undefined),
    "Falla en prueba 7 en testSortItOut -- Ordenar undefined deberia resultar undefined"
    );
    pruebasCorrectas+=7;
    console.log("---Pruebas con SortItOut exitosas---");
    
}



function testArrayToObject(){

    let objeto1 = {
        'Name' : 'Manuel' ,
        'Address' : "Street 01" ,
        'Zip Code' : "00414010",
        'Phone' : "999918888", 
    }    
    let objeto2 = {
        'Name' : 'Maria' ,
        'Address' : "Street 02",
        'Zip Code' : "00414015",
        'Phone' : "998818877", 
    }
    
    let objeto3 = {
        'Name' : 'Eduardo' ,
        'Address' : "Street 03",
        'Zip Code' : "02614010",
        'Phone' : "974640566", 
    }

    let array1 = ["Name", "Address","Zip Code","Phone"];
    let array2 =  [["Manuel", "Street 01", "00414010","999918888"],["Maria", "Street 02", "00414015","998818877"],["Eduardo", "Street 03", "02614010","974640566"]];

    assert.deepEqual([objeto1,objeto2,objeto3], arrayToObject(array1,array2),
    "Falla en prueba 1 en testArrayToObject -- Los objetos devueltos no coinciden con los esperados");
    assert.deepEqual([],arrayToObject([],array2),
    "Falla en prueba 2 en testArrayToObject -- Al no enviar un array con claves, los objetos no pueden ser creados, el array de objeto debe ser vacio []" 
    );
    assert.deepEqual([],arrayToObject([],[]),
    "Falla en prueba 3 en testArrayToObject -- Al no enviar un array con claves, ni valores, los objetos no pueden ser creados, el array de objeto debe ser vacio []" 
    );
    assert.deepEqual([],arrayToObject(array1,[]),
    "Falla en prueba 4 en testArrayToObject -- Al no enviar un array con valores, los objetos no pueden ser creados, el array de objeto debe ser vacio []" );
    pruebasCorrectas+=4;
    console.log("---Pruebas con ArrayToObject exitosas---")
}

async function testObjectData(){
    const url = 'https://storage.googleapis.com/mm-tse-latam/orders.json'
    assert.deepEqual( await objectData(url),'Smartphone #3',
    "Falla en prueba 1 en testObjectData -- El producto devuelto no es el esperado" );
    pruebasCorrectas+=1;
    console.log("---Pruebas con ObjectData exitosas---")
}

// function esPrimoTest(){
//     let primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 
//         61, 67, 71, 73, 79, 83, 89, 97]

//     for (const num of primos){
//         assert.deepEqual(true,challenge.esprimo(num))
//     }
//     console.log("---Pruebas con esPrimo exitosas---")
// }

testArrayPosition();
testArraySize();
testArrayMerge();
testArrayChange();
testLoopConditional();
testSortItOut();
testArrayToObject();
//esPrimoTest()
await testObjectData();
console.log("---Pruebas corridas" + pruebasCorrectas+ "/" + pruebasTotales + "---");

