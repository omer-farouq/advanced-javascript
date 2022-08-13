// const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element
//     output.push(result);
// }


// function square (element){
//     return element * element
// }

// const square = element => element * element;
// const square =  x => x * x;
// const result = numbers.map(element ){
//     return element * element;
// })
    
// const result = numbers.map(x=> x * x);

// console.log(result);

//Before:
// const hello = function(){
//     return "Hello World!"
// }

// console.log(hello);

//With arrow Function:
// hello = () => {
//     return "Hello World!";
// }
// console.log(hello);

// const result = numbers.map(x => x * x);

// console.log(result);


// const result = numbers.filter(x => x > 7);

// console.log(result);

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(numbers => numbers*2);

console.log(newArr)

/*Definition and Usage
map() creates a new array from calling a function for every array element.

map() calls a function once for each element in an array.

map() does not execute the function for empty elements.

map() does not change the original array. 


Syntax
array.map(function(currentValue, index, arr), thisValue)



Parameters
Parameter	Description
function()	Required.
A function to be run for each array element.
currentValue	Required.
The value of the current element.
index	Optional.
The index of the current element.
arr	Optional.
The array of the current element.
thisValue	Optional.
Default value undefined.
A value passed to the function to be used as its this value.


Return Value
Type	Description
An array	The results of a function for each array element.

*/

const ages = [32, 33, 16, 40];
const result = ages.filter(ages => ages >= 18);

console.log(result);
/*

Definition and Usage
The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array. 

Syntax
array.filter(function(currentValue, index, arr), thisValue)


Parameters
Parameter	Description
function()	Required.
A function to run for each array element.
currentValue	Required.
The value of the current element.
index	Optional.
The index of the current element.
arr	Optional.
The array of the current element.
thisValue	Optional. Default undefined
A value passed to the function as its this value.

Return Value
Type	Description
An array	Containing the elements that pass the test.
If no elements pass the test it returns an empty array.

*/