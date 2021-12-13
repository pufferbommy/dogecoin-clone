import React from 'react'
import Button from './Button'
import { AiFillGithub, AiFillWindows, AiFillApple } from 'react-icons/ai'
import { DiLinux } from 'react-icons/di'
import { FaAndroid } from 'react-icons/fa'

const Header = ({ guidePage }) => {
  return (
    <div
      className={`bg-amber-50 shadow-sm p-28 flex items-center flex-col pt-32 ${
        guidePage ? 'h-[40.8rem]' : 'h-[38rem]'
      }`}
    >
      {guidePage && <></>}
      {!guidePage && (
        <div className="text-3xl text-gray-600 font-bold">
          1 Dogecoin = 1 Dogecoin
        </div>
      )}
      <div>
        <img
          className="object-contain w-60 -mt-8"
          src="https://dogecoin.com/assets/img/doge.png"
          alt=""
        />
      </div>
      <div>
        {guidePage && (
          <p className="text-xl text-center text-gray-500 my-4">
            Getting Started with Dogecoin is as{' '}
            <span className="font-bold">Easy</span> as 1, 2, 3! <br /> Choose a type
            of wallet to begin.
          </p>
        )}
        {!guidePage && (
          <p className="text-lg text-gray-500 my-4">
            Dogecoin is an open source peer-to-peer digital currency, favored by
            Shiba Inus worldwide.
          </p>
        )}
      </div>
      {guidePage && (
        <>
          <div className="flex gap-2">
            <button className="p-2 text-center  text-white bg-cyan-700 rounded">
              <AiFillWindows className="inline-block mr-1 text-lg" />
              <span>Windows</span>
            </button>
            <button className="p-2 text-center  text-white bg-green-800 rounded">
              <DiLinux className="inline-block mr-1 text-lg" />
              <span>Linux</span>
            </button>
            <button className="p-2 text-center  text-white bg-gray-700 rounded">
              <AiFillApple className="inline-block mr-1 text-lg" />
              <span>macOS</span>
            </button>
            <button className="p-2 text-center  text-white bg-red-600 rounded">
              <FaAndroid className="inline-block mr-1 text-lg" />
              <span>Android</span>
            </button>
          </div>
        </>
      )}
      {!guidePage && (
        <div className="flex gap-2">
          <Button title="Get Started Now" destination="/#started" />
          <Button
            title="Source"
            destination="https://github.com/dogecoin/dogecoin"
            logo={<AiFillGithub />}
            isUrl
            outlined
          />
        </div>
      )}
    </div>
  )
}

export default Header
