function doSomething(){
    console.log(3333);
}

console.log(2222);
setTimeout(() => {
    console.log("See you later")
}, 3000);
console.log(4444);

setInterval(function(){
    console.log("Doing it")
}, 3000)