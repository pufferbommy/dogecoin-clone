import React from 'react'

const Button = ({
  title,
  destination,
  logo,
  isUrl = false,
  outlined,
  mediumSize,
  smallSize,
}) => {
  return (
    <>
      <a href={destination} target={`${isUrl ? '_blank' : '_self'}`}>
        {outlined ? (
          <button
            className={`border-[#1e4151] ${
              mediumSize
                ? 'text-base gap-2 py-1.5 px-4 rounded-lg'
                : smallSize
                ? 'text-sm p-1 rounded'
                : 'text-2xl py-3 px-4 gap-1 rounded-lg'
            } text-lg font-medium border text-[#1e4151] flex items-center hover:text-white hover:bg-[#6c757d]`}
          >
            {logo && <span>{logo}</span>} <span>{title}</span>
          </button>
        ) : (
          <button
            className={`bg-[#1e4151] ${
              mediumSize
                ? 'text-base gap-2 py-1.5'
                : smallSize
                ? 'text-sm p-1 rounded'
                : 'text-2xl'
            } py-3 text-lg flex gap-1 font-medium items-center px-4 rounded-lg text-white hover:bg-[#6c757d]`}
          >
            <span className="flex items-center">{logo}</span> <span>{title}</span>
          </button>
        )}
      </a>
    </>
  )
}

export default Button
