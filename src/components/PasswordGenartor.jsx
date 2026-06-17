import React, { useState } from 'react'

const PasswordGenartor = () => {
    const[length,setLength]=useState(8);
    const[includeUppercase,setIncludeUpperCase]=useState(true);
    const[includeLowercase,setIncludeLowerCase]=useState(true);
    const[includeNumbers,setIncludeNumbers]=useState(true);
    const[includeSymbols,setIncludeSymbols]=useState(true);
    const[password,setPassword]=useState("");
    const [copied, setCopied] = useState(false);

    const generatepassword =()=>{
        let charSet="";
        if(includeUppercase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(includeLowercase) charSet += "abcdefghijklmnopqrstuvwxyz";
        if(includeNumbers)  charSet += "0123456789";
        if(includeSymbols) charSet += "!@#$%^&*()_+-={}[]|:;<>,.?/~"
         if (!charSet) {
            alert("Please select at least one option!");
             return;
         }
        let generatepass="";
        for(let i=0;i<length;i++){
            const randomIndex=Math.floor(Math.random()*charSet.length);
            generatepass += charSet[randomIndex];
        }
        setPassword(generatepass);
    };
    const copyToClipboard = async () => {
  if (!password) return;

  await navigator.clipboard.writeText(password);

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};

  return (
    <>
    <div className="password-gen">
        <h2>PassWord Generator</h2>
        <div className="input-group">
            <label htmlFor="num">Password length</label>
            <input type="number" id='num' value={length} onChange={(e)=>setLength(Number.parseInt(e.target.value))}/>
        </div>
        <div className="checkbox-group">
            <input type="checkbox"  id="lower" checked={includeLowercase} onChange={(e)=>setIncludeLowerCase(e.target.checked)}/>
            <label htmlFor="lower">Include LowerCase</label>
        </div>
         <div className="checkbox-group">
            <input type="checkbox"  id="upper" checked={includeUppercase} onChange={(e)=>setIncludeUpperCase(e.target.checked)}/>
            <label htmlFor="upper">Include UpperCase</label>
        </div>
         <div className="checkbox-group">
            <input type="checkbox"  id="number" checked={includeNumbers} onChange={(e)=>setIncludeNumbers(e.target.checked)}/>
            <label htmlFor="number">Include Numbers</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox"  id="number" checked={includeSymbols} onChange={(e)=>setIncludeSymbols(e.target.checked)}/>
            <label htmlFor="number">Include Numbers</label>
        </div>
        <button className='genrate-btn' onClick={generatepassword}>Generate Password</button>
        <div className="generate-password">
            <input type='text' value={password}/>
            <button className="copy-btn" onClick={copyToClipboard}>
                {copied ? "✓ Copied" : "Copy"}
                </button>
        </div>
    </div>
    </>
  )
}

export default PasswordGenartor
