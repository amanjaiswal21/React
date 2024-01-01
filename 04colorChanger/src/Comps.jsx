import React from "react";

function Comp({color,bgColor}){
const changeBg =(color)=>{

}
return(
    <>
    <button className={`bg-${bgColor}-500 ml-5 rounded-xl}`} 
    onClick={changeBg({color})}> {color}</button>
    </> 
     
)
}
export default Comp ;