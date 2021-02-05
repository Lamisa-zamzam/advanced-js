const name = "Haity"
function add(num1, num2){
    window.result = num1 + num2; //global variable result, is not recommended
    console.log(result, name);
    return result ;
}

const sum = add(1,2);
console.log(sum);
console.log(name);