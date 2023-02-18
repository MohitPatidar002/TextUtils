

import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState();

    const handleUpclick =()=>{
        let LowerToUpper = text.toUpperCase();
        setText(LowerToUpper);
        props.showAlert(" Converted to Uppercase","Success ")
        
    }
   
    const handleLoclick =()=>{
        let UpperToLower = text.toLowerCase();
        setText(UpperToLower);
        props.showAlert(" Converted to Lowercase","Success ")
    }

    const handleClearclick =()=> {
      let cleartext = ("");
      setText(cleartext);
      props.showAlert(" Clear Text","Success ");
    }

    const handleCopyclick =()=>{
      let text = document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert(" Copy Text","Success ");
    }

    const handleOnchange=(event)=>{
        setText(event.target.value);
    }

  return (
    <div className='my-5'>
        <h2 className='my-2'>Write Something Here</h2>
        <div className="mb-3">
        <textarea className="form-control" id="mybox" value={text} onChange={handleOnchange} rows="8" placeholder='Enter Text Here' ></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
      <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>Convert to Lowercase</button>
      <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopyclick}>Copy Text</button>
      <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleClearclick} >Clear Text</button>
     
    </div>
  )
}
