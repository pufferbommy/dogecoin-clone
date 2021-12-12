import React from 'react'
import About from '../components/About'
import FooterMenu from '../components/FooterMenu'
import GetStarted from '../components/GetStarted'
import Header from '../components/Header'
import Wallet from '../components/Wallet'

const Home = () => {
  return (
    <>
      <Header />
      <Wallet />
      <About />
      <GetStarted />
      <FooterMenu />
    </>
  )
}

export default Home
