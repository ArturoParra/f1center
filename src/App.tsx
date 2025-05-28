import { useEffect } from "react"
import axios from "axios"
import { Header } from "./components/Header"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

function App() {

  useEffect(() => {
    axios.get('http://localhost:3001/api/hello')
      .then(response => {
        console.log(response.data.message)
      }
      )
  }, [])


  return (
    <>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </>
  )
}

export default App
