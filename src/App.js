
import React, { useState } from 'react'
import Header from './component/Header.js'
import Login from './component/Login.js'



function App() {

  let [input, setInput] = useState('')

  function manageInp(e) {
    let { id, value } = e.target
    setInput(value)
  }

  return (
    <>
      <Header x={input}/>
      <Login fn={manageInp}/>
    </>

  );
}

export default App;
