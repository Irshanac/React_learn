
// const a1=new Promise((resolve,reject)=>{
//     resolve("promise resolve values!!!")
//     //reject("tyuiokjhgfvbn")
// })

// async function getname() {
//     return  a1
// }
// const a=getname()
// console.log(a);

// a.then((res)=>console.log(res))

const p=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    resolve("it is promiseee"),5000)
})

const p1=new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        resolve("it is in 2 promiseee"),10000)
    })
// function getdata()
// {
//     p.then((v)=>console.log(v))
//     console.log("irshana");
    
// }
// getdata()


async function chechpro(){
    try{
 console.log("chappangathil");
    
   const v= await p
   console.log("irshana");
   console.log(v);

   const v1= await p1
   console.log("irshana1");
   console.log(v1);
    }
    catch(err){
        console.log(err);
        
    }
   
}
chechpro()
console.log("out side the fumction");
