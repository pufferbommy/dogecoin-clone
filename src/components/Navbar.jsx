import React, { useState, useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = ({
  isMenuOpen,
  setIsMenuOpen,
  isGuidePage,
  isHomePage,
  isFaqPage,
}) => {
  const [scrollY, setScrollY] = useState(0)
  const [isShrink, setIsShrink] = useState(false)
  const [currentSection, setCurrentSection] = useState({
    section1: null,
    section2: null,
    section3: null,
  })

  const logit = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    if (scrollY > 100) {
      console.log(scrollY)
      setIsShrink(true)
    } else {
      setIsShrink(false)
    }

    if (scrollY >= 552 && scrollY <= 1446) {
      setCurrentSection({ section1: true, section2: false, section3: false })
    } else if (scrollY >= 1447 && scrollY <= 2800) {
      setCurrentSection({ section1: false, section2: true, section3: false })
    } else if (scrollY >= 2801) {
      setCurrentSection({ section1: false, section2: false, section3: true })
    } else {
      setCurrentSection({
        ...currentSection,
        section1: false,
        section2: false,
        section3: false,
      })
    }

    const watchScroll = () => {
      window.addEventListener('scroll', logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener('scroll', logit)
    }
  }, [window.scrollY])

  return (
    <>
      <span id="top" />
      <nav
        className={`bg-[#1e4151] fixed w-full top-0 flex md:duration-300 justify-between items-center px-4 md:px-8 ${
          isShrink ? 'md:py-0' : 'md:py-2'
        }`}
      >
        <a href="/#top" className="inline-block">
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
          {isFaqPage && (
            <>
              <Link to="/" className="uppercase text-white font-bold">
                Back To Main Page
              </Link>
            </>
          )}
          {!isFaqPage && (
            <div className="hidden md:flex gap-2 md:items-center uppercase font-bold text-white">
              <a
                href="/#wallets"
                className={`${
                  isHomePage &&
                  currentSection.section1 &&
                  'bg-orange-50 rounded text-[#1e4151]'
                } cursor-pointer p-2`}
              >
                Wallets
              </a>
              <a
                href="/#about"
                className={`${
                  isHomePage &&
                  currentSection.section2 &&
                  'bg-orange-50 rounded text-[#1e4151]'
                } cursor-pointer p-2`}
              >
                What is Dogecoin?
              </a>
              <a
                href="/#started"
                className={`${
                  isHomePage &&
                  currentSection.section3 &&
                  'bg-orange-50 rounded text-[#1e4151]'
                } cursor-pointer p-2`}
              >
                Get Started Now
              </a>
              <Link
                to="/guide"
                className={`${
                  isGuidePage && 'bg-orange-50 rounded text-[#1e4151]'
                } cursor-pointer p-2`}
              >
                Guide
              </Link>
              <Link to="/faq" className="cursor-pointer p-2">
                Faq
              </Link>
            </div>
          )}
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
