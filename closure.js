function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const clockOne = stopWatch();
console.log( clockOne());
console.log( clockOne());
console.log( clockOne());
console.log( clockOne());

const clock2 = stopWatch();
console.log( clock2());
console.log( clock2());

console.log(clockOne());