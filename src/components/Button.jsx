import React from 'react'

const Button = ({ title, destination, logo, isUrl, outlined, mediumSize }) => {
  return (
    <>
      <a href={destination} target={`${isUrl && '_blank'}`}>
        {outlined ? (
          <button
            className={`border-[#1e4151] ${
              mediumSize ? 'text-base gap-2 py-1.5' : 'text-2xl'
            } flex items-center text-lg font-medium gap-1 border py-3 px-4 rounded-lg text-[#1e4151] hover:text-white hover:bg-[#6c757d]`}
          >
            <span>{logo}</span> <span>{title}</span>
          </button>
        ) : (
          <button
            className={`bg-[#1e4151] ${
              mediumSize ? 'text-base gap-2 py-1.5' : 'text-2xl'
            } py-3 text-lg flex gap-1 font-medium items-center px-4 rounded-lg text-white hover:bg-[#6c757d]`}
          >
            <span>{logo}</span> <span>{title}</span>
          </button>
        )}
      </a>
    </>
  )
}

export default Button
