import React,{useState} from "react";
import Navication from "./Navication";
const StudyState=()=>{
    const [value,setValue]=useState(0)
    const [backcolor,setBackcolor]=useState("yellow")
    const [textColor,setTextColr]=useState("green")
    const [divColor,setDivColor]=useState("pink")
    const bgColor=()=>{
        // if(color==="yellow")
        //      setColor("green")
        // else
        //     setColor("yellow")
        setBackcolor(prev=>(prev==="yellow"?"green":"yellow"))
        setTextColr(p=>(p==="green"?"yellow":"green"))
    }
    const bg={
        backgroundColor:backcolor
    }
    const state=[
        {state:"kerala",population:1234},
        {state:"tamilnad",population:23456},
        {state:"kanataka",population:98234},
    ]
    const changeColor=()=>{
        setDivColor(p=>p==="pink"?"blue":"pink")
    }
    const divs={
        backgroundColor:divColor,
        margin:"10px"
    }

    return(
        <div style={bg}>
            <Navication name="irshana" color={textColor} state={state.map(s=>s.state)} population={state.map(s=>s.population)}/>
            
            <h1>it is goot one </h1>
            <h3>shows value={value}</h3>
            <button onClick={()=>{setValue(value+1)}}>+</button>
            <button onClick={()=>{setValue(value-1)}}>-</button>
            <button onClick={bgColor} >change color</button>

            <div style={divs}onClick={changeColor}>click1</div>
            <div style={divs}onClick={changeColor}>click2</div>
            <div style={divs}onClick={changeColor}>click3</div>
            <div style={divs}onClick={changeColor}>click4</div>

        </div>
    )
}
export default StudyState