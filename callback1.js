function myfunction(arg){
    console.log((arg));
}
myfunction(10)
console.log("a");
console.log("b");
//setInterval(()=>console.log("c"),0)
setTimeout(()=>console.log("c"),0)
console.log("star");
function showData(cb)
{
    setTimeout(()=>{cb(5)},1000)
}
function showData(cb)
{
    setTimeout(()=>{cb(5)},1000)
}
function showData(cb)
{
    setTimeout(()=>{cb(5)},1000)
}
showData((value)=>{
    showData((value1)=>{
        showData((value2)=>{
            console.log(value+value1+value2);
        })
    })
})
console.log("end");