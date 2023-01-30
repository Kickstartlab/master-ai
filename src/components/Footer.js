import React from 'react'
import twitter from '../assets/twitter.png';
import discord from '../assets/discord.png';
import telegram from '../assets/telegram.png';
import logo from '../assets/logo.png';



export default function Footer() {
  return (
    <div className="bg-blue-200 font-clash py-8">
      <footer data-aos="zoom-in" className='container text-white-100 mx-auto lg:px-12 font-poppins px-5'>
        <div className="lg:flex items-baseline justify-between font-poppins py-8">
          <div className="flex flex-col gap-y-6">

            <a href="/" className="">
              <img src={logo} alt="Logo" />
            </a>
            <p className='text-white-50 lg:w-1/3'>SHIBA AI is an ERC-20 meme token that combines the excitement of meme culture with the power of AI. The team behind $SHIBAI is highly skilled, consisting of renowned CA and a talented group of developers and advisors.</p>
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

          <div className="">
            <h4 className="text-white-100 hover:text-seagreen-50 text-xl pb-5 w-32 font-semibold tracking-wide">
              Site Map
            </h4>
            <ul>
              <a href="/"><li className='pb-3'>Home</li></a>
              <a href="#about"><li className='pb-3'>About</li></a>
              <a href="#tokenomics"><li className='pb-3'>Tokenomics</li></a>
              <a href="#partners"><li className='pb-3'>Partners</li></a>
              <a href="#roadmap"><li className='pb-3'>Roadmap</li></a>
              <a href=""><li className='pb-3'>Whitepaper</li></a>
              <a href="#contact"><li className='pb-3'>Contact</li></a>
            </ul>
          </div>

        </div>

        <p>{new Date().getFullYear()} © Shibai. All rights reserved.</p>

      </footer>
    </div>

  )
}
