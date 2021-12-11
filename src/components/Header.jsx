import React from 'react'
import Button from './Button'
import { AiFillGithub } from 'react-icons/ai'

const Header = () => {
  return (
    <div className="bg-amber-50 shadow-sm p-28 flex items-center flex-col pt-32 h-[38rem]">
      <div className="text-3xl text-gray-600 font-bold">1 Dogecoin = 1 Dogecoin</div>
      <div>
        <img
          className="object-contain w-60 -mt-8"
          src="https://dogecoin.com/assets/img/doge.png"
          alt=""
        />
      </div>
      <div>
        <p className="text-lg text-gray-500 my-4">
          Dogecoin is an open source peer-to-peer digital currency, favored by Shiba
          Inus worldwide.
        </p>
      </div>
      <div className="flex gap-2">
        <Button title="Get Started Now" destination="#start" />
        <Button
          title="Source"
          destination="https://github.com/dogecoin/dogecoin"
          logo={<AiFillGithub />}
          isUrl
          outlined
        />
      </div>
    </div>
  )
}

export default Header
