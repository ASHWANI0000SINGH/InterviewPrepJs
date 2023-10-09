// factory function
// they are normal function which return Object
// insted of using new key word to create obj we can use this function


function createRobo(name){
    return {
      name:name,
      talk:function(){
        return `my name is ${name}`
      }
  
    }
  }
  
  const robo1=createRobo("chitti");
  console.log(robo1.talk());

