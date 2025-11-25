import React, { useState } from 'react';

export default function Tbox(props) {
  const [text,setText]=useState("Palak Hande");
    const uppercase=(event)=>{
        event.preventDefault();
        var z = text.toUpperCase();
        setText(z);
    }

    const change=(event)=>{
        event.preventDefault();
        setText(event.target.value);
    }

    const handleToggleCase=()=>{
        if(text.length === 0){
            return;
        }
        if(text === text.toUpperCase()){
            setText(text.toLowerCase());
        } else{
            setText(text.toUpperCase());
        }
    }


     const lowercase=(event)=>{
        event.preventDefault();
        var z = text.toLowerCase();
        setText(z);
    }

    const [clr,setColor]=useState({color:'blue',backgroundColor:"white"});

    const clickhere=(event)=>{
        event.preventDefault();
        if(clr.color==='blue'){
            setColor({color:"red"});
        } else{
            setColor({color:"blue"});
        }
    }

    const bgchange=(event)=>{
        event.preventDefault();
        if(clr.backgroundColor==='white'){
            setColor({backgroundColor:"red"});
        } else{
            setColor({backgroundColor:"white"});
        }
    }

    const [counts,setCounts] = useState({chars:0});

    const countlength = ()=>{
        const charCount = text.length;
        setCounts({chars: charCount});
    }

    const handleCopy=()=>{
        if(navigator.clipboard){
            navigator.clipboard.writeText(text);
            alert("Text copied!");
        }
    }

  return (
    <div className='container'>
        <div className='mb-3 mt-3 container'>
        <textarea className='form-control' rows="5" id='comment' name='text' value={text} style={clr} onChange={change}></textarea>
        </div>
        <div className='container' style={{textAlign:'center'}}>
        <button type='submit' className='btn btn-primary' onClick={uppercase}>upperCase</button>
        <button type='submit' className='btn btn-primary' onClick={lowercase}>lowerCase</button>
        <button type='submit' className='btn btn-primary' onClick={bgchange}>bgColor</button>
        <button type='submit' className='btn btn-primary' onClick={clickhere}>textColor</button>
        <button type='submit' className='btn btn-primary' onClick={countlength}>Count</button>
        <button type='submit' className='btn btn-primary' onClick={handleToggleCase}>toggleData</button>
        <button type='submit' className='btn btn-primary' onClick={handleCopy}>Copy</button>
        <div>
        <h2>Character count : {counts.chars}</h2>
        </div>
        </div>
    <div></div>
    </div>
  );
}
