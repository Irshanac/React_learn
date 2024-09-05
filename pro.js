// const st = new Promise((resolve,reject)=>{
//     resolve("success")
// })
// st.then((response)=>{
//     console.log(response)
// })
const valiedCard=false
const cart=["sh","pan","ch",]
const ps=createOrder(cart)
// p.then()

function createOrder(cart){
    const p= new Promise(function(resolve,reject){
        if(!valiedCard)
        {
            const err=new Error("it is an error messege")
            reject(err)
        }
        const orderId=1234
        if(orderId)
        {
            resolve(orderId)
            // setTimeout(()=>{
            //     resolve(orderId)
            // },1000)
        }
    })
    return p
}
ps.then((orderId)=> console.log(orderId))
    .catch((er)=>console.log(er.message))
    .finally(()=> console.log("promis working"))
