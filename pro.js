// // const st = new Promise((resolve,reject)=>{
// //     resolve("success")
// // })
// // st.then((response)=>{
// //     console.log(response)

// const { InputGroup } = require("react-bootstrap")

// // })
// const valiedCard=false
// const cart=["sh","pan","ch",]
// const ps=createOrder(cart)
// // p.then()

// function createOrder(cart){
//     const p= new Promise(function(resolve,reject){
//         if(!valiedCard)
//         {
//             const err=new Error("it is an error messege")
//             reject(err)
//         }
//         const orderId=1234
//         if(orderId)
//         {
//             resolve(orderId)
//             // setTimeout(()=>{
//             //     resolve(orderId)
//             // },1000)
//         }
//     })
//     return p
// }
// ps.then((orderId)=> console.log(orderId))
//     .catch((er)=>console.log(er.message))
//     .finally(()=> console.log("promis working"))

const menu=true
function order(carts)
{
    return new Promise((resolve,reject)=>{
        if(!menu)
        {
            const err=new Error("menu not showing")
            reject(err)
        }
        const ordno=12345
        if(ordno)
            resolve(ordno)
    })
}
function payment(ordno)
{
    //let ordno=false
    return new Promise((resolve,reject)=>{
        if(ordno)
        {
            const err=new Error("order is not placasing")
            reject(err)
        }
        payno=98765434567
        if(!payno)
        {
            console.log("payment");
            
            resolve(payno)
        }
    })
}
const meuss=['a','b','c','d','e']
const p2=order(meuss)
p2.then((ordno)=>{console.log(ordno)
    return ordno
})
.then((pay)=>{
    console.log(payment(pay));
      
})
    .catch((err)=>console.log(err.message))