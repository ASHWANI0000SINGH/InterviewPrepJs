  // currying is used in such a way that 
  //  the arguments are retured in via nested function
  //  and this step continues
  //  it helps to store the variable of the argument by lexical scoping
function curry(a) {
    return function (b) {
      return function (c) {
        return a * b * c;
      };
    };
  }
  
  console.log(curry(2)(3)(4));
  

  