import React from 'react'

import { FaAngleDown } from 'react-icons/fa'
import FaqList from '../components/FaqList'

const Faq = () => {
  return (
    <>
      <div className="mt-20 mb-12 flex flex-col items-center">
        <h1 className="uppercase text-4xl font-bold mt-4">FAQ</h1>
        <div className="flex items-center mt-5 gap-4">
          <hr className="w-28 border-b-4 rounded border-gray-600" />
          <FaAngleDown className="text-3xl" color="border-gray-600" />
          <hr className="w-28 border-b-4 rounded border-gray-600" />
        </div>
      </div>
      <div className="flex flex-col gap-16 max-w-6xl mx-auto pb-36">
        <FaqList
          question="What is Dogecoin?"
          answer="Dogecoin is a decentralised cryptocurrency based on the doge meme."
        />
        <FaqList
          question={`What do you mean by "decentralised"?`}
          answer="Dogecoin is not run by any individual company or person. Technically speaking, it operates according to rules agreed by consensus, rather than decided upon by some founding or owning entity."
        />
        <FaqList
          question={`What do you mean by "cryptocurrency"?`}
          answer="A cryptocurrency is a digital currency that is secured by cryptography, in contrast to conventional (fiat) currencies where they are secured by a government or governments."
        />
        <FaqList
          question="What is Dogecoin?"
          answer="Dogecoin is a decentralised cryptocurrency based on the doge meme."
        />
        <FaqList
          question="Okay, but what does that mean?"
          answer="It means you don't have to trust any central organisation or person the way you would a bank, but also that you have to be your own bank. The developers can't seize your funds, but they also can't return them if you send them to the wrong address."
        />
        <FaqList
          question="So who does run Dogecoin?"
          answer="No-one, or everyone does equally, depending how you look at it. The developers can release new software, but the community have to choose to use that software. That community includes not just the end-users, but miners, exchanges, payment processors, etc. Typically the community does adopt new software we release because we have an established track record, but there's no special access we have."
        />
        <FaqList
          question="I sent my Dogecoin to the wrong address, or I sent Dogecoin to a correct address, expecting goods or a payment in return, and have not received anything back - can you help in either case?"
          answer="Sadly, no in both cases. As noted above, Dogecoin is a decentralized project and the developers working on the project have no special access or ability to reverse transactions or recover funds. If you feel you have been mislead or wronged in a transaction involving Dogecoin, you should consult the relevant authorities in respect of the parties, exchanges, wallets or other services you dealt with."
        />
        <FaqList
          question="Can you reset my two factor authentication?"
          answer="We do not run any of the services which you log into, you would need to contact the service in question."
        />
        <FaqList
          question="I lost my wallet/private key, what do I do now?"
          answer="In many cases we discover people have backups they've forgotten about, checking old systems or thumb drives for copies is a good idea. If the keys are entirely lost, however, there is no way to recover them. Please back up your keys regularly."
        />
        <FaqList
          question="How do I use/accept Dogecoin?"
          answer="We do not have the resources to verify service providers, so avoid making recommendations ourselves, but there is a list of both shops and payment processors at https://spendyourdogecoins.cf/."
        />
        <FaqList
          question="Would you like to hear my business idea?"
          answer="We are an open source project, not a business - so no, thank you."
        />
        <FaqList
          question="Would you like paid advertising?"
          answer="We are an open source project, not a business - so no, thank you."
        />
        <FaqList
          question="Who do I talk to about listing Dogecoin?"
          answer="You do not need our permission to list Dogecoin. If you require business details for licensing, please note we are not a business and have no registered legal entity or address. If this is a challenge, consider who you would talk to about listing Bitcoin."
        />
        <FaqList
          question="I sent coins to the giveaway, why hasn't anything come back?"
          answer="Sadly these are people impersonating the Dogecoin founders, developers, or similar. No-one needs you to send them coins in order for them to send you coins back. There's a good article on this on the BBC news website at https://www.bbc.co.uk/news/technology-56402378."
        />
        <FaqList
          question="Why has my trade not gone through?"
          answer="The developers are not running an exchange, nor do we license exchanges, you would need to talk to the exchange in question."
        />
        <FaqList
          question="How do I back up my wallet?"
          answer={`You need to back up the file "wallet.dat", you can find this in the data directory. On Windows by default this is "%APPDATA%\Dogecoin", on OS X "~/Library/Application Support/Dogecoin/", and on Linux it is "~/.dogecoin/".`}
        />
      </div>
    </>
  )
}

export default Faq
