const students = [
    {id : 21, name: "Messi"},
    {id : 23, name: "Suarez"},
    {id : 24, name: "Coutinho"},
    {id : 27, name: "Neto"}
]

const studentNames = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const name = element.name;
    studentNames.push(name);
}
console.log(studentNames);