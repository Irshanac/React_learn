function sum(a, b) {
    let s = a + b;
    return s;
}
const a=[1,2,3,4,5,6,7]
const obj={
    name:"irshana",
    place:"tirur"
}
function maxValue(a){
    return Math.max(...a)
}
function minValue(a){
    return Math.min(...a)
}
export default function sumArray(a){
    return a.reduce((ac,cur)=>ac+cur,0)
}
export {
    sum as total,
    maxValue
}