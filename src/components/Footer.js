import React from 'react'
import twitter from '../assets/twitter.png';
import discord from '../assets/discord.png';
import telegram from '../assets/telegram.png';
import logo from '../assets/logo.png';



export default function Footer() {
  return (
    <div className="bg-blue-200 font-clash py-8">
      <footer data-aos="zoom-in" className='container text-white-100 mx-auto lg:px-12 font-poppins px-5'>
        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 items-baseline place-items-start gap-12 font-poppins py-8">
          <div className="md:col-span-2 col-span-1 flex flex-col gap-y-6">

            <a href="/" className="">
              <img src={logo} alt="Logo" />
            </a>
            <p className='text-white-50'>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit. In urna ultrices amet tellus<br></br> ornare. Faucibus id posuere massa </p>
            <div className="flex gap-6 pb-5">

              <a href="/">
                <img src={discord} alt="Discord" />
              </a>

              <a href="/">
                <img src={telegram} alt="Telegram" />
              </a>

              <a href="/">
                <img src={twitter} alt="Twitter" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-white-100 text-xl pb-5 font-semibold tracking-wide">
              Site Map
            </h4>
            <ul>
              <a href="/"><li className='pb-3'>Home</li></a>
              <a href="#about"><li className='pb-3'>About</li></a>
              <a href="#partners"><li className='pb-3'>Partners</li></a>
              <a href="#tokenomics"><li className='pb-3'>Tokenomics</li></a>
              <a href="#roadmap"><li className='pb-3'>Roadmap</li></a>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white-100 text-xl pb-5 font-semibold tracking-wide">
              Company
            </h4>
            <ul>
            <a href="#chain"><li className='pb-3'>Help & Support</li></a>
              <a href="#nft"><li className='pb-3'>NFT Marketplace</li></a>
              <a href="#roadmap"><li className='pb-3'>Roadmap</li></a>
            </ul>
          </div>

          <div className="col-span-1">
             <h4 className="text-white-100 text-xl pb-5 font-semibold tracking-wide">
             Resource
            </h4>
            <ul>
              <a href="#nft"><li className='pb-3'>NFT Marketplace</li></a>
              <a href="#roadmap"><li className='pb-3'>Roadmap</li></a>
              <a href="#chain"><li className='pb-3'>Meta Genesis Chain</li></a>
            </ul>
          </div>
        </div>

        <p>{new Date().getFullYear()} © Shibai All rights reserved.</p>

      </footer>
    </div>

  )
}
