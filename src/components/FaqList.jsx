import React from 'react'

const FaqList = ({ question, answer }) => {
  return (
    <>
      <div className="flex flex-col text-center gap-4 items-center">
        <h1 className="text-lg text-gray-600">{question}</h1>
        <p>{answer}</p>
      </div>
    </>
  )
}

export default FaqList
