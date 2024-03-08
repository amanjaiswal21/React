import React,{useEffect, useState} from "react";

const Github=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
         fetch('https://api.github.com/users/amanjaiswal21').then((res)=>res.json()).then((data)=>setData(data))
    },[])
    return(
        <>
        <div className='p-4 m-4 text-3xl text-center text-white bg-gray-600'>Github Followers:{data.followers}
         </div>
         <div className='p-4 m-4 text-3xl text-center text-white bg-gray-600'>Github LoginID:{data.login}
         </div>
         <div className='p-4 m-4 text-3xl text-center text-white bg-gray-600'>Github Following:{data.following}
         </div>
         </>
         
    )
}

export default Github;