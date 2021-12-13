import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import FooterMenu from './components/FooterMenu'
import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import Guide from './pages/Guide'
import Faq from './pages/Faq'

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
                <Navbar
                  isHomePage
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
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
                <FooterMenu isOtherPage />
              </>
            }
          />
          <Route
            path="/faq"
            element={
              <>
                <Navbar
                  isFaqPage
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
                <Faq />
                <FooterMenu isOtherPage />
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
