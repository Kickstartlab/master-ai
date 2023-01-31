import React, { useState } from 'react'
import logo from '../assets/logo_2.png';



export default function Menu() {

  const [show, setShow] = useState(false);


  return (

    <header>
      <div className="lg:flex hidden items-center justify-between font-poppins  text-white-100 h-28">
        <a href="/" className="logo lg:my-12">
          <img src={logo} alt="Logo" />
        </a>

        <nav>
          <ul className="text-md flex justify-center gap-8 items-center">
            <li><a href="#about" className="text-zinc-100">About</a></li>
            <li><a href="#features" className=" cursor-pointer">Features</a></li>
            <li><a href="#roadmap" className="cursor-pointer">Roadmap</a></li>
            <li><a href="#tokenomics" className="cursor-pointer">Tokenomics</a></li>
            <li><a href="#faqs" className="cursor-pointer">FAQs</a></li>
            <li><a href="#about" className="cursor-pointer">Contact</a></li>
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <a href="/">
            <button className="border-2 border-seagreen-50 py-2 px-3 rounded-lg text-white-100 font-inter font-semibold">
              EN
            </button>
          </a>

          <a href="/">
            <button className="bg-gradient py-2 px-4 rounded-lg text-white-100 font-inter font-semibold">
              Login
            </button>
          </a>
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-between pt-5 font-montserrat">
        <a href="/" className="text-white-100">
          <img src={logo} alt="Logo" />
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>

        </button>
      </div>

      {
        show ? <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-3/4 overflow-y-auto text-center font-montserrat font-semibold bg-seagreen-200 z-20" style={{ left: "0" }}>

          <div className="mt-3 px-3 mb-12">
            <a href="/" className="text-white-100">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md transition duration-500 cursor-pointer hover:bg-white-100 hover:text-purple-100  text-white-100">
            <a href="/" className="text-lg ml-4 hover:text-purple-100 font-semibold">Home</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-white-100 hover:text-purple-100  text-white-100">
            <a href="#updates" className="text-lg ml-4 hover:text-purple-100 font-semibold">Updates</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-white-100 hover:text-purple-100  text-white-100">
            <a href="#services" className="text-lg ml-4 hover:text-purple-100 font-semibold">Services</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-white-100 hover:text-purple-100  text-white-100">
            <a href="#features" className="text-lg ml-4 hover:text-purple-100 font-semibold">Features</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-white-100 hover:text-purple-100  text-white-100">
            <a href="#about" className="text-lg ml-4 hover:text-purple-100 font-semibold">About Us</a>
          </button>
        </div> : null
      }


    </header >
  )
}
