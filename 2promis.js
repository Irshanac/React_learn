const check=false
const p1=checking()
function checking(){
    return new Promise((resolve,reject)=>{
        if(check)
            resolve("first promise solved")
        else 
            reject("first promise error")
    })
}

const val=true
const p2=valied()
function valied()
{
    return new Promise((resolve,reject)=>{
        if(val)
            resolve("2nd promise solved")
        else 
            reject("2nd promise error")
    })
}

p1.then((r)=>console.log(r))
    .catch((e)=>console.log(e))


p2.then((r)=>console.log(r))
    .catch((e)=>console.log(e))

async function a()
{
    return "it is await promises"
}
const p3=a()
p3.then((r)=>console.log(a))
.catch((e)=>console.log(e))

async function asFun() {
    return "hello world!!!"
}
const p4=asFun()
p4.then((a)=>console.log(a))
