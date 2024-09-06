const pa1=Promise.reject(100)
const pa2=Promise.resolve("it is good")
const p3="it is stringss"
const pAll=Promise.all([pa1,pa2,p3])
pAll.then(()=>console.log(pAll))
    .catch(()=> console.log(pAll))