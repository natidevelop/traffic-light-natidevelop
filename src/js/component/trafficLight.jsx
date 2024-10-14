import React,{useState} from "react";


const TrafficLihgt =()=> {
 const [color,SetColor]=useState("red");
 const [isVisible,setIsVisible]=useState(false);
 const newColorButton=(
 <div onClick={()=>{
    SetColor("purple")}} className={"rounded-circle "+ (color=="purple"? "onLightPurple":"")} style={{width:"100px", height:"100px", backgroundColor:" #6f42c1"}}></div>)
    return(
    <div className="d-flex flex-column jusitfy-content-center align-items-center ">
    <div className="bg-dark" style={{width:"25px", height:"80px"}}></div>
    <div className="bg-dark rounded-5 d-flex flex-column justify-content-evenly align-items-center p-2" style={{width:"200px", height:"410px"}}>
    <div onClick={()=>{
        SetColor("red")
    }} className={"bg-danger rounded-circle " + (color=="red"? "onLightRed":"")} style={{width:"100px", height:"100px"}}></div>
        <div onClick={()=>{
        SetColor("yellow")
    }} className={"bg-warning rounded-circle " + (color=="yellow"? "onLightYellow":"")} style={{width:"100px", height:"100px"}}></div>
        <div onClick={()=>{
        SetColor("green")
    }} className={"bg-success rounded-circle " + (color=="green"? "onLightGreen":"")}style={{width:"100px", height:"100px"}}></div>
        
        {isVisible && newColorButton}
     
    </div>
    <button className="btn btn-dark m-2" onClick={()=>{setIsVisible(!isVisible)

    }}>{isVisible?"Quitar Color":"Mostrar Color"}</button>
    </div>
 )   
  
}  

export default TrafficLihgt;