const students = [
    {id : 21, name: "Messi"},
    {id : 23, name: "Suarez"},
    {id : 24, name: "Coutinho"},
    {id : 27, name: "Neto"}
]

// const studentNames = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const name = element.name;
//     studentNames.push(name);
// }
// console.log(studentNames);

const names = students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 23);
const biggerOne = students.find(s => s.id > 23);
console.log(biggerOne);