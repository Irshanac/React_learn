const res="https://www.themealdb.com/api/json/v1/1/categories.php"
// async function getdata() {
//    const d= await fetch(res)
//    let v=d.json()
//    console.log(v);
   
// }
// getdata()
// fetch(res).then((res)=>{return res.json()})
//     .then((data)=>console.log(data)
//     )
async function getdata(){
    const fe=await fetch(res)
    const r=await fe.json()
    console.log(r)
}