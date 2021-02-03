const numbers = [1,-2,3,-4,5,6,7,-8,9];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element > 3){
        //console.log(element);
        break;
    }
}

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element < 0){
        continue;
    }
    console.log(numbers[i]);
}