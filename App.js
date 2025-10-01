import './App.css';
import { useState } from 'react';



function App() {


const [data ,setdata ] = useState("") ; 
    const getvalue= (event)=>{
        setdata(data.concat(event.target.value));
    }
    const calculation=()=>{
        setdata(eval((data).toString()));
    }
    const c = () =>{
        setdata(data.slice(0,-1))
    }
    const ac = () =>{
        setdata("AI can't replace me :)") ; 
    }

    return (
        <div className='call'>
            <div className='copyright'>
                Khushal  
                From Indore,    
                Industial & Production Department
            </div>
            <div className='container'>
                <input value={data}></input>

            </div>
            <div className='btn'>
                <button onClick={getvalue} value="7">7</button>
                <button onClick={getvalue} value="8">8</button>
                <button onClick={getvalue} value="9">9</button>
                <button onClick={getvalue} value="+">+</button>
                <button onClick={getvalue} value="("> ( </button>
            </div>
            <div className='btn'>
                <button onClick={getvalue} value="4">4</button>
                <button onClick={getvalue} value="5">5</button>
                <button onClick={getvalue} value="6">6</button>
                <button onClick={getvalue} value="-">-</button>
                <button onClick={getvalue} value=")"> )</button>
            </div>
            <div className='btn'>
                <button onClick={getvalue} value="3">3</button>
                <button onClick={getvalue} value="2">2</button>
                <button onClick={getvalue} value="1">1</button>
                <button onClick={getvalue} value="*">X</button>
                <button onClick={c} value="C">C</button>
            </div>
           
            <div className='btn'>
                <button onClick={ac} value="AC" className='ac' >AC</button>
                <button onClick={getvalue} value="0">0</button>
                <button onClick={calculation} value="=">=</button>
                <button onClick={getvalue} value="/">/</button>
                <button onClick={getvalue} value=".">.</button>
            </div>
            </div>
    )
  
  
}

export default App;
