import React from 'react'
const Navication=(props)=>{
    const s={
        color:props.color
    }
    return(
        <div>
            <h1 style={s}>it is good for {props.name} </h1>
            <h3>state:{props.state}</h3>
            <h3>population:{props.population}</h3>
        </div>
    )
}
export default Navication;