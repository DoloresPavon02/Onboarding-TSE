import fetch from "node-fetch";



 function arrayPosition(array){
 // Return the fifth item of the array received as parameter

 return array[4];

}

 function arraySize(array){
  // Return the size of the array received as parameter
  return (array) ? array.length : 0;
}

 function arrayMerge(array1,array2){
  // Return one array with all elements from array1 and all elements from array2 
  // received as parameters in the function
  // Example: array1 = ["cat", "dog", "horse"] array2 = ["turtle", "elephant"]
  // Output = ["cat", "dog", "horse", "turtle", "elephant"]
  let newArray = array1.concat(array2);
  return newArray;

}

 function arrayChange(array){
  // Receive an array of numbers and return an array with the same numbers, but as strings.
  let array2 = [] ;
  array.forEach(element => {
    array2.push(element.toString());
  });
  return array2;
}

 function loopConditional(string, element){
  // This function must return the number of times the element appears in the string received
  // Example: String: "today I woke up" element: "o" result: 2

  let counter = 0;
  for(const letter of string)
    counter += (letter === element)?1:0;
  return counter;
}

function arrayUpdate(array1, startArray1, array2, startArray2, endArray2){
  while(startArray2 <= endArray2){
    array1[startArray1] = array2[startArray2];
    startArray1+=1;
    startArray2+=1;
  }
}

function merge(array, startArray1, endArray1, startArray2, endArray2){
  let sortedArray = [];
  let arrayPosition = 0;

  while(startArray1 <= endArray1 & startArray2 <= endArray2){
    let buffer;

    if(array[startArray1] < array[startArray2]){
      buffer = array[startArray1];
      startArray1 +=1;
    } else{
      buffer = array[startArray2];
      startArray2+=1;
    }

    sortedArray[arrayPosition] = buffer;
    arrayPosition +=1;

  }

  let end , start;
  [start, end] = (startArray2 < endArray2) ? [startArray2, endArray1] : [startArray1,endArray1];  
  arrayUpdate(sortedArray, arrayPosition, array, start,end);
 
  return sortedArray;


}

function mergeSort(array, start, end){
  // Divide and Conqer algorithm, 'start' and 'end' are inclusive

  if (start === end || end < 0 )
    return;
  
  let middle = parseInt((start+end)/2);
  mergeSort(array, start, middle);
  mergeSort(array, middle+1, end);

  let sortedArray = merge(array,start, middle, middle+1, end);
  arrayUpdate(array,start,sortedArray,0,sortedArray.length -1);


}


 function sortItOut(array){
 // This function should receive an array of numbers that is out of order,  
 // and sort it from smallest to largest without using the sort() function.
 //  Sample array to use as test: [1,6,15,23,5,2,32,10]
 //  Output: [1,2,5,6,10,15,23,32]

 mergeSort(array,0,arraySize(array)-1);
 return array;
  

}


 async function objectData(url) {
  // This function should be able to do the following:
  // 1) Capture the information from the url received as parameter (JSON file)
  //  1.1) url to be used as test: https://storage.googleapis.com/mm-tse-latam/orders.json
  // 2) Write a code that can verify the value of all products, and:
  // 3) Return the NAME of the product with the highest price. 
  // p.s.: (The NAME of the product is the 'product' parameter of the JSON file)

  // let response = await 

  let response = await fetch(url);

  if((!response.ok) || (response.status !== 200))
    return;

  let body = await response.json();
  let mostExpensiveProduct = body[0];

  body.forEach(product => {
    mostExpensiveProduct = (product.price > mostExpensiveProduct.price) ? product: mostExpensiveProduct;
  })

  return mostExpensiveProduct.product;
}

 function arrayToObject(array1, array2) {
  // This function should receive 2 arrays, and transform it into a single object, similar to columns and rows of a spreadsheet
  // Sample array1: ["Name", "Address","Zip Code","Phone"]
  // Sample array2: [["Manuel", "Street 01", "00414010","999918888"],["Maria", "Street 02", "00414015","998818877"],["Eduardo", "Street 03", "02614010","974640566"]]
  // Sample expected output: [{Name: "Manuel", Address: "Street 01", Zip Code: "00414010", Phone: "999918888"},{Name: "Maria", Address: "Street 02"...}]

  if ((array1.length == 0  || array2.length == 0 ))
    return [];

  let objectArray= [];

  let toObject = (arr1,arr2) => {
    let obj = {};
    arr2.forEach((element,index) => (obj[arr1[index]] = element));
    return obj;
  }

  array2.forEach(arr =>(objectArray.push(toObject(array1,arr))));

  return objectArray;

}

module.exports =  {arrayPosition,arraySize,arrayMerge,arrayChange,loopConditional,sortItOut,arrayToObject,objectData};

//export {arrayPosition,arraySize,arrayMerge,arrayChange,loopConditional,sortItOut,arrayToObject,objectData};