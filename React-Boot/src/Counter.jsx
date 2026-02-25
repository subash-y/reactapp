import { useEffect, useState, useContext, useRef } from "react"
import { dataContext } from "./Home";


function Counter() {
    const [count, setCount] = useState(0);
    const data = useContext(dataContext);
    let refCount = useRef(0);
    function inc() {
        //For this count will got increased only one time,even though we have given twic due to batch updation.
        // setCount( count + 1);
        // setCount(count+1);

        //To overcome above problem usse update funtion(pass anonymous func as arg)
        //setCount(preCount => preCount + 1);
        //setCount(preCount => preCount + 1);
        //Here we update the value(current) which is present in useRef

        refCount.current++;


    }

    useEffect(() => {
        console.log(count);
    })
    return (
        <>
            <h2 className="mt-3 text-danger">{data}</h2>
            <h2 className="m-5">{count}</h2>
            <button className="mx-5 btn btn-primary" onClick={inc}>Up</button>
            <button className="btn btn-secondary" onClick={(() =>{setCount(refCount.current)})}>update</button>

        </>
    )
}

export default Counter