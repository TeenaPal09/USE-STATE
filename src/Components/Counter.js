import React, { useState } from 'react';
import { FaPlus ,FaMinus } from 'react-icons/fa';
const Counter = () => {

    let [a, setA] = useState(10);
    function Inc(){
        setA(a+1);
        
    }
    function Desc(){
        setA(a-1);
    }


    return (
        <div>
            <h1>Counter</h1>
            <h2>{a}</h2>
            <button onClick={Inc}>Increase</button>
            <button onClick={Inc}><FaPlus/></button>
            <button onClick={Desc}>Decrease</button>
            <button onClick={Desc}><FaMinus/></button>
            <button onClick={()=>setA(0)}>Reset</button>
        </div>
    )

}
export default Counter;