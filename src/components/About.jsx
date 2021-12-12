import React from 'react'
import { FaAngleDown, FaWikipediaW } from 'react-icons/fa'
import { AiFillRedditCircle } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import Button from './Button'

const About = () => {
  return (
    <>
      <div className="bg-amber-50 flex flex-col pb-20 items-center">
        <div className="mt-20 mb-10 flex flex-col items-center">
          <h1 className="uppercase text-3xl font-semibold">WHAT IS DOGECOIN?</h1>
          <div className="flex items-center mt-5 gap-4">
            <hr className="w-28 border-b-4 rounded border-gray-600" />
            <FaAngleDown className="text-3xl" color="border-gray-600" />
            <hr className="w-28 border-b-4 rounded border-gray-600" />
          </div>
        </div>
        <div className="max-w-5xl mx-auto pb-14">
          <p>
            Dogecoin is an open source peer-to-peer digital currency, favored by
            Shiba Inus worldwide.
          </p>
        </div>
        <div>
          <iframe
            width="1110"
            height="624"
            src="https://www.youtube.com/embed/_KVZmS_UO5I"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex">
          <div className="max-w-[500px]">
            <h1 className="text-3xl pt-6 font-semibold text-center">
              THE FUN AND FRIENDLY INTERNET CURRENCY.
            </h1>
            <p className="py-4 p-8 text-lg mb-8  text-gray-500">
              Dogecoin sets itself apart from other digital currencies with an
              amazing, vibrant community made up of friendly folks just like you.
            </p>
            <div className="flex flex-col items-center gap-2">
              <Button
                mediumSize
                logo={<AiFillRedditCircle />}
                isUrl
                title="Reddit Community"
                destination={'https://www.reddit.com/r/dogecoin'}
              />
              <Button
                mediumSize
                logo={<BsDiscord />}
                isUrl
                title="Discord Community"
                destination={'https://discord.gg/dogecoin'}
              />
              <Button
                mediumSize
                logo={<AiFillRedditCircle />}
                outlined
                isUrl
                title="Dogeeducation Reddit Community"
                destination={'https://www.reddit.com/r/dogeducation'}
              />
            </div>
          </div>
          <div className="max-w-[600px]">
            <h1 className="text-3xl pt-6 font-semibold text-center">
              WHAT'S WITH DOGECOIN AND THE DOG?
            </h1>
            <p className="py-4 p-8 text-lg mb-8 text-gray-500">
              "Doge" is our fun, friendly mascot! The Shiba Inu is a Japanese breed
              of dog that was popularized as an online meme and represents Dogecoin.
            </p>
            <div className="flex flex-col items-center gap-2">
              <Button
                mediumSize
                isUrl
                title="Learn more about Doge"
                destination={'https://knowyourmeme.com/memes/doge'}
              />
              <Button
                mediumSize
                outlined
                logo={<FaWikipediaW />}
                isUrl
                title="Shiba Inu"
                destination={'https://en.wikipedia.org/wiki/Shiba_Inu'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
