import { useEffect } from "react"
import axios from "axios"
import { Header } from "./components/Header"

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
      <Header />
    </>
  )
}

export default App
