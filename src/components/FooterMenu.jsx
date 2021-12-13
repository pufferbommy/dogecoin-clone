import React, { useState } from 'react'

import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter, AiFillRedditCircle } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import { RiArrowDownSFill } from 'react-icons/ri'
import LanguageMenu from './LanguageMenu'

const FooterMenu = ({ isOtherPage }) => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  return (
    <>
      <div
        onBlur={() => setIsLanguageMenuOpen(false)}
        className="flex justify-around bg-[#1e4151] p-20 -space-x-64"
      >
        <a href={`${isOtherPage ? '/' : '#wallets'}`}>
          <button className="text-white border text-lg rounded p-2 px-4 hover:text-[#1e4151] hover:bg-white">
            {`${isOtherPage ? 'Back to Main Page' : 'Get Wallet'}`}
          </button>
        </a>
        <div className="flex gap-4 items-center">
          <a
            target={'_blank'}
            href="https://facebook.com/OfficialDogecoin/"
            className="p-3 border rounded-full cursor-pointer text-xl text-white hover:text-black hover:bg-white"
          >
            <FaFacebookF />
          </a>
          <a
            target={'_blank'}
            href="https://twitter.com/dogecoin"
            className="p-3 border rounded-full cursor-pointer text-xl text-white hover:text-black hover:bg-white"
          >
            <AiOutlineTwitter />
          </a>
          <a
            target={'_blank'}
            href="https://www.reddit.com/r/dogecoin"
            className="p-3 border rounded-full cursor-pointer text-xl text-white hover:text-black hover:bg-white"
          >
            <AiFillRedditCircle />
          </a>
          <a
            target={'_blank'}
            href="https://discord.gg/dogecoin"
            className="p-3 border rounded-full cursor-pointer text-xl text-white hover:text-black hover:bg-white"
          >
            <BsDiscord />
          </a>
        </div>
        <div className="flex relative flex-col">
          <button
            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            className={`border text-lg rounded p-2 flex px-4 hover:text-[#1e4151] hover:bg-white ${
              isLanguageMenuOpen ? 'text-[#1e4151] bg-white' : 'text-white'
            }`}
          >
            Language <RiArrowDownSFill className="text-2xl" />
          </button>
          {isLanguageMenuOpen && <LanguageMenu />}
        </div>
      </div>
    </>
  )
}

export default FooterMenu
