import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState("")
  useEffect(() => {
    fetch("http://localhost:3000/message")
        .then((res) => res.json())
        .then((data) => setMessage(data.message))
  })

  const [formObject, setFormObject] = useState({serviceRequest: "", firstName: "", lastName: "", numberList: [] })
  useEffect( () => {
    fetch("http://localhost:3000/form")
        .then((res) => res.json())
        .then((data) => setFormObject(data.formObj))
  })

  return (
      <>
        <nav>
          <a href="https://vite.dev" target="_blank">
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo"/>
          </a>
        </nav>
        <main>
          <h2>Vite + React Client <br />Express Server</h2>
          <p>Incoming Message: <b>{message}</b></p>
          <p>Form Data:
            <br/>Service Request: {formObject.serviceRequest}
            <br/>Name: {formObject.firstName} {formObject.lastName}
            <br/>Number List: {formObject.numberList.map((item) => item)}
          </p>
          <p className="read-the-docs">
            Click on the React logo to learn more
          </p>
        </main>
      </>
  )
}

export default App
