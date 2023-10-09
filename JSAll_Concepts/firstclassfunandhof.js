//first class fun
// in Js functions are treated as first class objects
//  they can also be treated as variale

// HoF

// function passwd as an argument to other function
// eg

function add(a,b){
    return a+b;
}
function multiplyandadd(add,c){
    return add*c;
}
console.log(add(2,3),5);