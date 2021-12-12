import React, { useState, useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrollY, setScrollY] = useState(0)
  const [isShrink, setIsShrink] = useState(false)

  const logit = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    if (scrollY > 100) {
      setIsShrink(true)
    } else {
      setIsShrink(false)
    }
    const watchScroll = () => {
      window.addEventListener('scroll', logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener('scroll', logit)
    }
  })

  return (
    <>
      <span id="top" />
      <nav
        className={`bg-[#1e4151] fixed w-full top-0 flex md:duration-300 justify-between items-center px-4 md:px-8 ${
          isShrink ? 'md:py-0' : 'md:py-2'
        }`}
      >
        <a href="#top" className="inline-block">
          <div className="flex items-center gap-2 py-2 cursor-pointer">
            <img
              className="object-contain w-10"
              src="https://dogecoin.com/assets/img/dogecoin-300.png"
              alt="dogncoinLogo"
            />
            <span
              className={`uppercase ${
                isShrink
                  ? 'text-xl font-semibold md:text-xl md:font-semibold'
                  : 'text-xl font-semibold md:text-3xl md:font-bold'
              } text-white md:duration-300`}
            >
              Dogecoin
            </span>
          </div>
        </a>
        <div>
          <div className="hidden md:flex gap-6 uppercase font-bold text-white">
            <a href="#wallets" className="cursor-pointer">
              Wallets
            </a>
            <span className="cursor-pointer">What is Dogecoin?</span>
            <span className="cursor-pointer">Get Started Now</span>
            <span className="cursor-pointer">Guide</span>
            <span className="cursor-pointer">Faq</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex md:hidden items-center text-sm font-medium px-4 py-2.5 rounded text-gray-700 bg-neutral-200 gap-1 uppercase"
          >
            Menu <AiOutlineMenu />
          </button>
        </div>
      </nav>
      <>
        {isMenuOpen && (
          <>
            <div className="bg-[#1e4151] md:hidden flex w-full fixed mt-14 flex-col p-5 gap-2 font-bold text-lg uppercase text-white">
              <span className="cursor-pointer">Wallets</span>
              <span className="cursor-pointer">What is Dogecoin?</span>
              <span className="cursor-pointer">Get Started Now</span>
              <span className="cursor-pointer">Guide</span>
              <span className="cursor-pointer">Faq</span>
            </div>
          </>
        )}
      </>
    </>
  )
}

export default Navbar
