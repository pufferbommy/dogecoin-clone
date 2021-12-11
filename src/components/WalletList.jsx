import React from 'react'

import { AiFillWindows, AiFillApple } from 'react-icons/ai'
import { DiLinux } from 'react-icons/di'

const WalletList = ({ title, img, links }) => {
  const platformLogo = (platform) => {
    switch (platform) {
      case 'Windows':
      case 'Windows 32 bit':
      case 'Windows 64 bit':
        return <AiFillWindows />
      case 'Linux':
      case 'Linux 32 bit':
      case 'Linux 64 bit':
        return <DiLinux />
      case 'macOS':
        return <AiFillApple />
    }
  }
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-lg">{title}</div>
        <img className="w-40 object-contain my-4" src={img} alt={title} />
        <div className="flex flex-wrap justify-center max-w-sm gap-2">
          {links.map((link, index) => (
            <a href={link.platformUrl} target={'_blank'} key={link.platform + index}>
              <button
                className={`text-white p-2 flex items-center gap-1 rounded ${link.color}`}
              >
                <span className="text-xl">{platformLogo(link.platform)}</span>{' '}
                {link.platform}
              </button>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default WalletList
