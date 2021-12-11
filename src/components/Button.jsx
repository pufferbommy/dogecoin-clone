import React from 'react'

const Button = ({ title, destination, logo, isUrl, outlined }) => {
  return (
    <>
      <a href={destination} target={`${isUrl && '_blank'}`}>
        {outlined ? (
          <button className="border-[#1e4151] flex items-center text-lg font-medium gap-1 border py-3 px-4 rounded-lg text-[#1e4151] hover:text-white hover:bg-[#6c757d]">
            <span className="text-2xl">{logo}</span> <span>{title}</span>
          </button>
        ) : (
          <button className="bg-[#1e4151] py-3 text-lg font-medium px-4 rounded-lg text-white hover:bg-[#6c757d]">
            {title}
          </button>
        )}
      </a>
    </>
  )
}

export default Button
