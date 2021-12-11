import React, { useState } from 'react'

// components
import Navbar from './components/Navbar'

// pages
import Home from './pages/Home'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Home />
    </>
  )
}

export default App
