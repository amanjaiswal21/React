import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
useEffect(()=>{
    const [data,setData]=useState({})
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res)=>{
      res.json() //return
    })
    .then((res)=>{
     setData(res.currency)  // square brackets
     console.log(data);
    })
},[currency])
 console.log(data);
 return data
}

export default useCurrencyInfo;