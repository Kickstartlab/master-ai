import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
import b_1 from '../assets/b-1.png';
import b_2 from '../assets/b-2.png';
import b_4 from '../assets/b-4.png';
import b_5 from '../assets/b-5.png';
import choose_1 from '../assets/choose_1.png';
import choose_2 from '../assets/choose_2.png';
import choose_3 from '../assets/choose_3.png';
import choose_4 from '../assets/choose_4.png';
import about from '../assets/about.png';
import project from '../assets/project.png';
import circle_2 from '../assets/circle_2.png';
import circle_1 from '../assets/circle_1.png';
import shibai from '../assets/shibai.png';
import vector from '../assets/vector.svg';
import token from '../assets/token.png';
import Particle from './Particle';



export default function Home() {

    return (
        <div className="bg-blue-100 text-white-100 font-montserrat">

            {/* top section */}

            <div className="">

                <div className="lg:px-8 md:px-5 container mx-auto relative z-20">
                    <Menu />

                    <Particle />
                    <div className="flex flex-col items-center justify-center py-20">
                        <img src={shibai} alt="" className='w-8/12' />

                        <p className="text-lg mt-8 lg:w-1/2 text-center">
                            SHIBAI is an ERC 20 🔹 meme token  with a major artificial intelligence utility behind it , and with a based and hardworking team , SHIBAI has the potential to be the 2023 moonshot
                        </p>
                    </div>

                </div>

                <a href='#updates' className="py-8 flex flex-col items-center justify-center font-montserrat hover:text-seagreen-200">
                    <p className="text-lg pb-5">
                        Scroll Down
                    </p>
                    <span className="animate-bounce">
                        <svg width="24" height="50" viewBox="0 0 24 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9393 49.0607C11.5251 49.6464 12.4749 49.6464 13.0607 49.0607L22.6066 39.5147C23.1924 38.9289 23.1924 37.9792 22.6066 37.3934C22.0208 36.8076 21.0711 36.8076 20.4853 37.3934L12 45.8787L3.51472 37.3934C2.92893 36.8076 1.97919 36.8076 1.3934 37.3934C0.807613 37.9792 0.807613 38.9289 1.3934 39.5147L10.9393 49.0607ZM10.5 6.55671e-08L10.5 48L13.5 48L13.5 -6.55671e-08L10.5 6.55671e-08Z" fill="white" />
                        </svg>
                    </span>
                </a>
            </div>

            <div className="circle absolute left-0 top-20 lg:block hidden">
                <img src={circle_2} alt="" className='' />
            </div>

            {/* brand section */}

            <div className="lg:my-20 my-8 flex flex-wrap items-center justify-center gap-6">
                <img src={b_5} alt="" />
                <img src={b_1} alt="" />
                <img src={b_4} alt="" />
                <img src={b_2} alt="" />
            </div>

            {/* Why choose us */}

            <div className="circle absolute right-0 mt-8 lg:block hidden">
                <img src={circle_1} alt="" className='' />
            </div>

            <div id='updates' className="">

                <div className="lg:pb-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div className="flex flex-col items-center justify-center">
                        <p className="py-8 font-montserrat text-white-50 lg:w-8/12 w-full text-center">
                            Why choose Us?
                            <span>
                                <img src={vector} alt="" className='flex mx-auto pt-2' />
                            </span>
                        </p>
                        <h2 className='md:text-5xl text-center text-2xl font-montserrat font-bold text-white-100'>
                            WE ALL KNOW HOW MUCH HYPED AI TOKENS ARE
                        </h2>
                        <p className="py-6 font-montserrat text-white-50 lg:w-8/12 w-full text-center">
                            WE ALL KNOW HOW MUCH HYPED AI TOKENS ARE , AND WHEN IT COMES TO CRYPTO NOTHING IS LIKE MEME COINS AND ESPECIALLY EVERYONE'S FAVOURITE TOKEN SHIBA , MIX THEM BOTH TOGETHER AND U GET THE MOST HYPED & BULLISH NAME EVER
                        </p>

                        <div className="lg:flex block items-baseline py-5 justify-center gap-16 lg:w-8/12">

                            <div className="flex flex-col gap-y-12">

                                <div className="flex gap-5 items-center">
                                    <img src={choose_1} alt="" />
                                    <div>
                                        <h4 className="text-white-100 text-xl pb-5 font-semibold">
                                            Shibarium bridge
                                        </h4>
                                        <p className='font-poppins text-white-50'>
                                            Shiba Ai will be going to be
                                            first project with shibarium
                                            to Erc-20 bridge
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <img src={choose_2} alt="" />
                                    <div>
                                        <h4 className="text-white-100 text-xl pb-5 font-semibold">
                                            Rennouced CA
                                        </h4>
                                        <p className='font-poppins text-white-50'>
                                            Shiba Ai is going to be true example of DEFI.
                                            We are going to renounce ownership right
                                            after deployment
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-12 lg:mt-0 mt-6">
                                <div className="flex gap-5 items-center">
                                    <img src={choose_3} alt="" />
                                    <div>
                                        <h4 className="text-white-100 text-xl pb-5 font-semibold">
                                            Burned Lp
                                        </h4>
                                        <p className='font-poppins text-white-50'>
                                            Shiba Ai is going to burn
                                            liquidity to gain more
                                            community trust.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <img src={choose_4} alt="" />
                                    <div>
                                        <h4 className="text-white-100 text-xl pb-5 font-semibold">
                                            AI Utilty
                                        </h4>
                                        <p className='font-poppins text-white-50'>
                                            Shiba Ai team is going to surprise the community with AI Utility. Will be revealed in Phase II
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* about us */}

            <div id='about' className="lg:py-12 py-5 lg:px-20 px-5 container mx-auto">

                <div className="lg:flex lg:p-12 p-6 items-center gap-32 bg-about">

                    <div className='lg:pl-12 pl-0'>
                        <h2 className='md:text-5xl text-5xl font-montserrat font-bold text-white-100'>
                            About us
                        </h2>
                        <p className="py-6 font-montserrat text-white-50 lg:w-8/12 w-full">

                            Shiba AI (SHIBAAI) is the fusion of everyone's favourite meme coin, Shiba Inu, and cutting-edge Artificial Intelligence technology. With a dedicated and experienced team behind it, SHIBAAI has the potential to be the next big thing in the crypto space.
                        </p>

                        <p>   Follow us on Telegram, Twitter, and visit our website for the latest updates and developments.</p>

                        <a href="/">
                            <button className="text-white-100 bg-seagreen-50 flex gap-2 items-center py-3 lg:px-8 px-4 rounded-full font-semibold mt-5">
                                learn more
                                <span><svg width="12" height="13" viewBox="0 0 12 13" className="mt-1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 1.5C2 0.947715 2.44772 0.5 3 0.5L11 0.500001C11.5523 0.500001 12 0.947716 12 1.5V9.5C12 10.0523 11.5523 10.5 11 10.5C10.4477 10.5 10 10.0523 10 9.5V3.91421L1.70711 12.2071C1.31658 12.5976 0.683417 12.5976 0.292893 12.2071C-0.0976311 11.8166 -0.0976311 11.1834 0.292893 10.7929L8.58579 2.5L3 2.5C2.44772 2.5 2 2.05228 2 1.5Z" fill="white"></path></svg></span>
                            </button>
                        </a>
                    </div>

                    <img src={about} alt="" className='lg:mt-0 mt-6' />

                </div>

            </div>

            {/* project section */}

            <div className="bg-line relative z-20">
                <Particle />

                <div className="lg:py-12 py-5 lg:px-20 px-5 container mx-auto bg-project">

                    <div className="lg:flex justify-center items-center">
                        <div className="bg-white-100 p-6 rounded-2xl transform duration-300 hover:-translate-y-8 border-b-8 border-seagreen-50 lg:w-1/2">

                            <div className="">

                                <img src={project} alt="" className='flex mx-auto' />

                                <div className='text-black-50 pt-5 flex flex-col items-center justify-center gap-y-5'>
                                    <p className="font-montserrat text-center">
                                        To maximise the potential of SHIBA Al, the team
                                        has implemented a LP burn mechanism, as well
                                        as 5% allocation for green and 5% for red. Join us
                                        on our journey to the moon and be a part of the
                                        next big thing in crypto. $SHIBAI can be
                                        purchased on Uniswap, and can be tracked on
                                        DEXscreener, DEXTools and other major
                                        tracking platforms.
                                    </p>
                                    <a href="/">
                                        <button className="text-white-100 bg-seagreen-200 hover:bg-white-100 hover:text-seagreen-200 btn-shadow flex gap-2 items-center py-3 lg:px-8 px-4 rounded-full font-semibold">
                                            learn more
                                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 font-semibold">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                            </svg>
                                            </span>
                                        </button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="circle absolute right-0 -mt-44 lg:block hidden">
                <img src={circle_1} alt="" className='' />
            </div>

            {/* tokenomics */}

            <div className="circle absolute left-0 mt-44 lg:block hidden">
                <img src={circle_2} alt="" className='' />
            </div>

            <div id='tokenomics' className="">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">
                    <div className="text-center">
                        <h2 className='md:text-5xl text-2xl font-montserrat font-bold text-white-100'>
                            Tokenomics
                            <span>
                                <img src={vector} alt="" className='flex mx-auto pt-2' />
                            </span>
                        </h2>
                    </div>

                    <div className="lg:flex items-center justify-center gap-20 mt-12">
                        <div className='lg:w-1/2'>

                            {/* <svg xmlns="http://www.w3.org/2000/svg"
                                width="300px" height="400px" viewBox="0 0 130 130" >

                                <circle className="crc1" transform="rotate(-90 70 70)" cx="70" cy="70" r="50"> </circle>
                                <circle className="crc2" transform="rotate(-45 70 70)" cx="70" cy="70" r="50"> </circle>
                                <circle className="crc3" transform="rotate(45 70 70)" cx="70" cy="70" r="50"> </circle>

                            </svg> */}

                            <img src={token} alt="" className='crc1'/>

                        </div>
                        <div className='lg:w-1/2 lg:mt-0 mt-6'>
                            <h2 className='md:text-4xl mb-5 text-2xl font-montserrat font-bold text-white-100'>
                                Tokenomics
                            </h2>
                            <ul className='flex flex-col text-2xl font-semibold'>
                                <li>
                                    5/5 Tax
                                </li>
                                <li>
                                    2% LP
                                </li>
                                <li>
                                    3% Marketing
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* roadmap */}

            <div id='roadmap' className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto text-white-100">

                <div className="text-center">
                    <h2 className='md:text-5xl text-2xl font-montserrat font-bold text-white-100'>
                        Roadmap
                        <img src={vector} alt="" className='flex mx-auto pt-2' />
                    </h2>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-baseline lg:gap-16 gap-8 lg:pt-20 py-6">

                        <div className="bg-white-100 p-6 rounded-2xl text-black-100 text-left">
                            <h6 className='text-lg font-medium font-montserrat'>
                                SHIBA AI PHASE I
                            </h6>

                            <div className="py-5 flex items-center gap-5">
                                <div className="w-8 h-8 border-4 border-seagreen-200 rounded-full">

                                </div>

                                <div className='absolute ml-12'>
                                    <svg className='path svg lg:block hidden'>
                                        <line x1="0" y1="30" x2="500" y2="30" stroke-color="" />
                                    </svg>
                                </div>
                            </div>
                            <ul className='flex flex-col font-semibold text-sm'>
                                <li>
                                    Deploy contract
                                </li>

                                <li>
                                    Shiba Ai  Listing
                                </li>

                                <li>
                                    Twitter+Website creation
                                </li>
                                <li>
                                    Initial Telegram marketing
                                </li>

                            </ul>
                        </div>

                        <div className="bg-white-100 p-6 rounded-2xl text-black-100 text-left z-20">
                            <h6 className='text-lg font-medium font-montserrat'>
                                SHIBA AI PHASE II
                            </h6>
                            <div className="py-5 flex items-center gap-5">
                                <div className="w-8 h-8 border-4 border-seagreen-200 rounded-full">

                                </div>

                                <div className='absolute ml-12'>
                                    <svg className='path svg lg:block hidden'>
                                        <line x1="0" y1="30" x2="500" y2="30" stroke-color="#f8a100" />
                                    </svg>
                                </div>
                            </div>
                            <ul className='flex flex-col font-semibold text-sm'>
                                <li>
                                    Lp burn
                                </li>

                                <li>
                                    Twitter influencer partnerships
                                </li>

                                <li>
                                    CA renounce
                                </li>
                                <li>
                                    Community buy competitions
                                </li>

                            </ul>
                        </div>

                        <div className="bg-white-100 p-6 rounded-2xl text-black-100 text-left z-20">
                            <h6 className='text-lg font-medium font-montserrat'>
                                SHIBA AI PHASE III
                            </h6>

                            <div className="py-5 flex items-center gap-5">
                                <div className="w-8 h-8 border-4 border-seagreen-200 rounded-full">

                                </div>

                                <div className='absolute ml-12'>
                                    <svg className='path svg lg:block hidden'>
                                        <line x1="0" y1="30" x2="500" y2="30" stroke-color="#f8a100" />
                                    </svg>
                                </div>
                            </div>
                            <ul className='flex flex-col font-semibold text-sm'>
                                <li>
                                    Shiba Ai  partnership
                                </li>

                                <li>
                                    Shiberium Bridge
                                </li>

                                <li>
                                    Youtube marketing
                                </li>
                                <li>
                                    AMAs
                                </li>

                            </ul>
                        </div>

                        <div className="bg-white-100 p-6 rounded-2xl text-black-100 text-left z-20">
                            <h6 className='text-lg font-medium font-montserrat'>
                                SHIBA AI PHASE IV
                            </h6>

                            <div className="py-5">
                                <div className="w-8 h-8 border-4 border-seagreen-200 rounded-full">

                                </div>
                            </div>
                            <ul className='flex flex-col font-semibold text-sm'>
                                <li>
                                    Buybacks
                                </li>

                                <li>
                                    Application for CoinMarketcap and CoinGecko
                                </li>

                                <li>
                                    Secret AI Utility
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>

            </div>

            {/* upper foot section */}

            <div className="bg-blue-50 lg:mb-20 mb-5 ">
                <div id='contract' className="container mx-auto">
                    <div className="flex flex-col items-center lg:px-20 px-5 justify-cente gap-y-8 text-center lg:py-20 py-6">

                        <h2 className='md:text-5xl text-2xl font-montserrat font-bold lg:w-9/12 w-full'>
                            Experience  moonshot of 2023 with Shiba Ai on ERC-20
                        </h2>

                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}
