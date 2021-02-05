//falsy:
//null
//undefined
//""
//0
//false


//truthy:
//" "
//"0"

let userName = 0;
if(userName|| userName == 0){
    console.log("True")
}else{
    console.log("False")
}

if("false"){
    console.log("I am not false");
}else{
    console.log("I am false")
}