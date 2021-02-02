const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const square = element * element;
//     output.push(square);
// }


// const square = element => element * element;
// const square = x => x * x;

// const result = numbers.map(function (element, index, array){
//     return element * element;
// });

const result2 = numbers.map(x => x * x);
console.log(result2);



//filter
const result3 = numbers.filter(x => x < 5);
console.log(result3);

//for each
//reduce
//find
const result4 = numbers.find(x => x > 5);
console.log(result4);