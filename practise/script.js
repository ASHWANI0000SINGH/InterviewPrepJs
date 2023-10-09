// closure

function foo(){
    let count=0;
     function child(){
        count++;
        console.log("count: ",count)
    }
    return child
}
const ans=foo();
ans()
ans()
ans()
