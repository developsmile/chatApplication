import React, { useState } from 'react'
import Splash from './pages/Splash'
import Welcome from './pages/Welcome';
import Signin from './pages/Signin'
const App = () => {
  const [splash,setSplash] = useState(false);
  setTimeout(()=>{
    setSplash(true)
  },3000)
  return (
    <>
      {
        !splash ? <Splash />:
        // <Welcome />
        <Signin />
      }
      
      
    </>
  )
}

export default App