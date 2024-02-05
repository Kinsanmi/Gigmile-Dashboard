import { useState } from 'react'
import './App.css'
import { Layout } from './Layout/Layout'

function App() {

  const [loading, setLoading] = useState(false);

  


  const loader = () =>{
    if(loading){
      return <div>Loading...</div>
    }

    return(
      <>
      <Layout />
      </>
    )
  }



  return (
    <>
     {loader()}
    </>
  )
}

export default App
