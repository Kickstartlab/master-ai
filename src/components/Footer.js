import React from 'react'
import twitter from '../assets/twitter.png';
import discord from '../assets/discord.png';
import telegram from '../assets/telegram.png';
import logo from '../assets/logo.png';



export default function Footer() {
  return (
    <div className="bg-gray-100 font-inter py-5">
      <footer data-aos="zoom-in" className='container text-white-100 mx-auto lg:px-12 font-poppins px-5'>
        <div className="lg:flex items-center justify-between font-poppins py-8">

          <div className="flex flex-col gap-y-6">

            <a href="/" className="">
              <img src={logo} alt="Logo" />

              <h2 className='md:text-4xl text-2xl font-poppins font-bold text-white-100'>
                Master Ai
              </h2>
            </a>
            <p className='text-gray-50 lg:w-1/3'>
              We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below. Someone from our team will get back to you shortly
            </p>
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
            <div className="sm:flex block items-center gap-x-6">

              <div className="">
                <div className="mb-3">
                  <label for="f-name" className="text-white-100 font-poppins text-xl font-semibold">
                    Your Name
                  </label>
                </div>
                <input type="text" placeholder="Type your name here" id="name" required="" className="p-3 border-2 border-seagreen-200 rounded-md w-full bg-gray-100 ring-0" />
              </div>

              <div className="w-full sm:mt-0 mt-5">
                <div className="mb-3">
                  <label for="date" className="text-white-100 font-poppins text-xl font-semibold">
                    Your Email
                  </label>
                </div>
                <input type="email" placeholder="Type your email here" id="email" required="" className="p-3 border-2 border-seagreen-200 rounded-md w-full bg-gray-100 ring-0" />
              </div>

            </div>

            <div className="mt-5">
              <div className="mb-3">
                <label for="message" className="text-white-100 font-poppins text-xl font-semibold">
                  Your Message
                </label>
              </div>
              <textarea rows='5' placeholder="Leave your question or comment here" id="message" required="" className="p-3 border-2 border-seagreen-200 rounded-md bg-gray-100 w-full" />
            </div>

            <button type='submit' className="rounded-md lg:w-64 bg-gradient text-white-100 font-semibold px-3 py-3 mt-6">
              SUBMIT YOUR MESSAGE
            </button>
          </div>

        </div>

        <hr className='' />
        <p className='pt-5'>{new Date().getFullYear()} © Master-Ai. All rights reserved.</p>

      </footer>
    </div>

  )
}
