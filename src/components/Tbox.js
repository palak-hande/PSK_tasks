import React, { useState } from 'react';

export default function Tbox(props) {
  const [text,setText]=useState("Palak Hande");
    const uppercase=(event)=>{
        event.preventDefault();
        var z = text.toUpperCase();
        setText(z);
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

    const countlength=(event)=>{
        event.preventDefault();
        var z = text.length;
        setText(z);
    }

    const handleCopy=()=>{
        if(navigator.clipboard){
            navigator.clipboard.writeText(text);
            alert("Text copied!");
        }
    }

    const toggle=()=>{
        if(text === text.toUpperCase()){
            setText(text.toLowerCase());
        }
        else{
            setText(text.toUpperCase());
        }
    }

  return (
    <div className='container'>
        <div className='mb-3 mt-3 container'>
            <textarea className='form-control' rows="5" id='comment' name='text' value={text} style={clr}></textarea>
        </div>
        <div className='container' style={{textAlign:'center'}}>
        <button type='submit' className='btn btn-primary' onClick={uppercase}>upperCase</button>
        <button type='submit' className='btn btn-primary' onClick={lowercase}>lowerCase</button>
        <button type='submit' className='btn btn-primary' onClick={bgchange}>bgColor</button>
        <button type='submit' className='btn btn-primary' onClick={clickhere}>textColor</button>
        <button type='submit' className='btn btn-primary' onClick={countlength}>Count</button>
        <button type='submit' className='btn btn-primary' onClick={toggle}>toggleData</button>
        <button type='submit' className='btn btn-primary' onClick={handleCopy}>Copy</button>
        </div>
    <div></div>
    </div>
  );
}
