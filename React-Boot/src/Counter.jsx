import { useEffect, useState } from "react"

function Counter() {
const [count,setCount] = useState(0);
function inc(){
    //For this count will got increased only one time,even though we have given twic due to batch updation.
    // setCount( count + 1);
    // setCount(count+1);

    //To overcome above problem usse update funtion(pass anonymous func as arg)
    setCount(preCount => preCount + 1);
    setCount(preCount => preCount + 1);
}

useEffect(()=>{
    console.log(count);
},[count])
return(
    <>

    <h2 className="m-5">{count}</h2>
    <button className="mx-5 btn btn-primary" onClick={inc}>Up</button>
    </>
)
}

export default Counter