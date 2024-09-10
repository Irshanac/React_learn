let check=false
function f1(){
    return new Promise((resolve,reject)=>
    {
        if(check)
            resolve("hello dfghjkl")
        else
            reject("err")
    })
}
let p1=f1()
p1.then((v)=>console.log(v))
   .catch((b)=>console.log(b))


async function checking() {
    return "hello world!!!"
}
const p2=checking()
p2.then((a)=>console.dir(a))



console.log(p2);

console.log("qwertyuio12345678");
