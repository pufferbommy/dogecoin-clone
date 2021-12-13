import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import Button from './Button'

const GetStarted = () => {
  return (
    <>
      <span id="started"></span>
      <div className="mb-20">
        <div className="mt-20 mb-12 flex flex-col items-center">
          <h1 className="uppercase text-3xl font-bold">
            HOW TO GET STARTED WITH DOGECOIN.
          </h1>
          <div className="flex items-center mt-5 gap-4">
            <hr className="w-28 border-b-4 rounded border-gray-600" />
            <FaAngleDown className="text-3xl" color="border-gray-600" />
            <hr className="w-28 border-b-4 rounded border-gray-600" />
          </div>
        </div>
        <div className="flex gap-10 justify-center">
          <div>
            <img
              className="w-[350px] object-contain"
              src="https://dogecoin.com/assets/img/dogecoin_mobilewallet.png"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <div>
              <h1 className="text-lg font-medium">1. Choose your Wallet</h1>
              <p className="my-4">
                Pick a Wallet from our{' '}
                <span className="inline-block ml-2">
                  <Button
                    smallSize
                    title="Wallet Section"
                    destination="#wallets"
                    outlined
                  />
                </span>
                <br />A Wallet is used for holding your Dogecoins directly on your
                Computer/Smartphone.
              </p>
            </div>
            <div>
              <h1 className="text-lg font-medium">2. Configure your Wallet</h1>
              <p className="my-4">
                After downloading, you can configure your Wallet according to our
                <span className="inline-block ml-2">
                  <Button smallSize title="Guide" destination="#wallets" outlined />
                </span>
              </p>
            </div>
            <div>
              <h1 className="text-lg font-medium">3. Get Some Dogecoin</h1>
              <p className="my-4 max-w-3xl">
                There are numerous amounts of ways to get Dogecoin. You can buy them,
                trade for them, get tipped, "mine" them, and more. They are
                surprisingly endless!
                <br />
                <br />
                ou can get tipped Dogecoin by participating in{' '}
                <span className="inline-block ml-2">
                  <Button
                    outlined
                    smallSize
                    title="our community"
                    destination="https://www.reddit.com/r/dogecoin"
                  />
                </span>
                . If that's not your style, another way to have your first Dogecoin
                is to participate at{' '}
                <a
                  className="text-blue-400 font-medium hover:underline"
                  href="https://www.dogecoinfah.com/"
                >
                  Dogecoin Folding@Home.
                </a>
                <br />
                <br />
                <span className="inline-block">
                  <Button
                    outlined
                    smallSize
                    title="Folding@Home (FaH)"
                    destination="https://www.dogecoinfah.com/"
                  />
                </span>{' '}
                is a distributed computing project. You can join team dogefolders,
                bring in your computing power, help to find cures for diseases and
                receive some Doges for your efforts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetStarted
