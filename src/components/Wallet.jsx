import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import WalletList from './WalletList'

const Wallet = () => {
  const walletLists = [
    {
      title: 'Multidoge',
      img: 'https://dogecoin.com/assets/img/multidoge.png',
      links: [
        {
          platform: 'Windows',
          platformUrl: 'https://multidoge.org/?dl=win',
          color: 'bg-teal-500',
        },
        {
          platform: 'Linux',
          platformUrl: 'https://multidoge.org/?dl=lin',
          color: 'bg-green-500',
        },
        {
          platform: 'macOS',
          platformUrl: 'https://multidoge.org/?dl=osx',
          color: 'bg-gray-500',
        },
      ],
    },
    {
      title: 'Dogecoin Core',
      img: 'https://dogecoin.com/assets/img/dogecoin-300.png',
      links: [
        {
          platform: 'Windows 32 bit',
          platformUrl:
            'https://github.com/dogecoin/dogecoin/releases/download/v1.14.5/dogecoin-1.14.5-win32-setup-unsigned.exe',
          color: 'bg-teal-500',
        },
        {
          platform: 'Windows 64 bit',
          platformUrl:
            'https://github.com/dogecoin/dogecoin/releases/download/v1.14.5/dogecoin-1.14.5-win64-setup-unsigned.exe',
          color: 'bg-teal-500',
        },

        {
          platform: 'Linux 32 bit',
          platformUrl:
            'https://github.com/dogecoin/dogecoin/releases/download/v1.14.5/dogecoin-1.14.5-i686-pc-linux-gnu.tar.gz',
          color: 'bg-green-500',
        },
        {
          platform: 'Linux 64 bit',
          platformUrl:
            'https://github.com/dogecoin/dogecoin/releases/download/v1.14.5/dogecoin-1.14.5-x86_64-linux-gnu.tar.gz',
          color: 'bg-green-500',
        },
        {
          platform: 'macOS',
          platformUrl:
            'https://github.com/dogecoin/dogecoin/releases/download/v1.14.5/dogecoin-1.14.5-osx.dmg',
          color: 'bg-[#6c757d]',
        },
      ],
    },
  ]
  return (
    <div className="mb-32">
      <div className="mt-20 mb-10 flex flex-col items-center">
        <h1 className="uppercase text-3xl font-semibold">Choose Your Wallet</h1>
        <div className="flex items-center mt-5 gap-4">
          <hr className="w-28 border-b-4 rounded border-gray-600" />
          <FaAngleDown className="text-3xl" color="border-gray-600" />
          <hr className="w-28 border-b-4 rounded border-gray-600" />
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <p>
          You have to sync with the blockchain to use Dogecoin. MultiDoge is a
          "light" wallet. It syncs with the blockchain by "skimming" through the
          blockchain, providing fast sync times. Dogecoin Core, on the other hand, is
          a "full" wallet. It syncs by downloading it, providing a solid-working
          Dogecoin wallet.
        </p>
        <div className="flex gap-44 justify-center my-4">
          {walletLists.map((walletList, index) => (
            <WalletList
              key={walletList.title + index}
              title={walletList.title}
              img={walletList.img}
              links={walletList.links}
            />
          ))}
        </div>
        <div className="flex flex-col items-center gap-4 mt-14">
          <h1>Androind Wallet</h1>
          <img
            className="w-40"
            src="https://dogecoin.com/assets/img/google_play.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Wallet
