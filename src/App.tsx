import { useEffect } from "react"
import axios from "axios"

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
      <h1 className='text-3xl font-black text-red-600'>F1Center</h1>
    </>
  )
}

export default App
