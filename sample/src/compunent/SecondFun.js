import React from 'react'
const Secondfun=()=>{
    const age=4
    function sum(num1,num2){
        return <h3>{num1+num2}</h3>
    }
    return(
       <React.Fragment>
        <h1>it is a second function </h1>
        <p>it is a second function for the solution of the compmonent </p>
        {1+2+4+5}
        <h2>you are {age>18?"eligible":"not eligible"}</h2>
        {sum(4,8)}
       </React.Fragment>
    )
}
export default Secondfun;