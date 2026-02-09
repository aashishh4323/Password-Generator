import React, { useState } from "react";
export default function App() {
 const [password, setPassword] = useState("");
 const [length, setLength] = useState(12);
 const [upper, setUpper] = useState(true);
 const [lower, setLower] = useState(true);
 const [numbers, setNumbers] = useState(true);
 const [symbols, setSymbols] = useState(true);
 const generatePassword = () => {
   let chars = "";
   if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
   if (numbers) chars += "0123456789";
   if (symbols) chars += "!@#$%^&*()_+[]{}<>?";
   let pass = "";
   for (let i = 0; i < length; i++) {
     pass += chars.charAt(Math.floor(Math.random() * chars.length));
   }
   setPassword(pass);
 };
 const copyToClipboard = () => {
   navigator.clipboard.writeText(password);
   alert("Password copied!");
 };
 return (
   <div className="box">
  <h2>Password Generator</h2>

  <label>
    Length
    <input
      type="number"
      value={length}
      min="6"
      max="32"
      onChange={(e) => setLength(e.target.value)}
    />
  </label>

  <label>
    <input type="checkbox" checked={upper} onChange={() => setUpper(!upper)} />
    Uppercase
  </label>

  <label>
    <input type="checkbox" checked={lower} onChange={() => setLower(!lower)} />
    Lowercase
  </label>

  <label>
    <input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} />
    Numbers
  </label>

  <label>
    <input type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)} />
    Symbols
  </label>

  <button onClick={generatePassword}>Generate</button>

  {password && (
    <>
      <input type="text" value={password} readOnly />
      <button onClick={copyToClipboard}>Copy</button>
    </>
  )}
</div>

 );
}