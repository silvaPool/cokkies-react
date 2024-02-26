import { useState } from 'react'
import './App.css'

function App() {

  const [message, setMessage] = useState('');

  const setCookieFunction = (value) => {

    localStorage.setItem('username', value);

    setMessage('Username set as cookie!!');

  }
  
  return (
    <div style={{marginLeft: '200px'}}>
      <pre>
        <h2>Setting Cokie in ReactJS</h2>
        <span>Enter User Name:</span><input type="text"
        onChange={(e) => setCookieFunction(e.target.value)}></input>
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{message}</span>
      </pre>
    </div>
  )
}

export default App
