import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import FooterMenu from './components/FooterMenu'
import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import Guide from './pages/Guide'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                <Home />
                <FooterMenu />
              </>
            }
          />
          <Route
            path="/guide"
            element={
              <>
                <Navbar
                  isGuidePage
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
                <Guide />
                <FooterMenu isGuidePage />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
