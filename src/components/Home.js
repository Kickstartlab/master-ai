import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
import b_1 from '../assets/b-1.png';
import b_2 from '../assets/b-2.png';
import b_3 from '../assets/b-3.png';
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis..
                        </p>
                    </div>

                </div>

                <a href='#updates' className="py-8 flex flex-col items-center justify-center gap-y-5 font-montserrat hover:text-seagreen-200">
                    <p className="text-lg">
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

            <div className="lg:py-20 py-8 flex flex-wrap items-center justify-center gap-6">
                <img src={b_5} alt="" />
                <img src={b_1} alt="" />
                <img src={b_2} alt="" />
                <img src={b_3} alt="" />
                <img src={b_4} alt="" />
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
                            Lorem Impsum dollar here
                        </h2>
                        <p className="py-6 font-montserrat text-white-50 lg:w-8/12 w-full text-center">

                            Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed. Tincidunt porttitor eget et adipiscing sagittis diam. Vitae sed nam vulputate bibendum ornare vitae. Scelerisque sit sed.
                        </p>

                        <div className="lg:flex block items-baseline py-5 justify-center gap-16 lg:w-8/12">

                            <div className="flex flex-col gap-y-12">

                                <div className="flex gap-5 items-center">
                                    <img src={choose_1} alt="" />
                                    <div>
                                        <h4 className="text-white-100 text-xl pb-5 font-semibold">
                                            Lorem Ipsum
                                        </h4>
                                        <p className='font-poppins text-white-50'>
                                            Lorem Ipsum is simply dummy
                                            text of the printing and
                                            typesetting industry.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <img src={choose_2} alt="" />
                                    <div>
                                        <h4 className="text-white-100 text-xl pb-5 font-semibold">
                                            Lorem Ipsum
                                        </h4>
                                        <p className='font-poppins text-white-50'>
                                            Lorem Ipsum is simply dummy
                                            text of the printing and
                                            typesetting industry.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-12 lg:mt-0 mt-6">
                                <div className="flex gap-5 items-center">
                                    <img src={choose_3} alt="" />
                                    <div>
                                        <h4 className="text-white-100 text-xl pb-5 font-semibold">
                                            Lorem Ipsum
                                        </h4>
                                        <p className='font-poppins text-white-50'>
                                            Lorem Ipsum is simply dummy
                                            text of the printing and
                                            typesetting industry.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <img src={choose_4} alt="" />
                                    <div>
                                        <h4 className="text-white-100 text-xl pb-5 font-semibold">
                                            Lorem Ipsum
                                        </h4>
                                        <p className='font-poppins text-white-50'>
                                            Lorem Ipsum is simply dummy
                                            text of the printing and
                                            typesetting industry.
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

                            Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed. Tincidunt porttitor eget et adipiscing sagittis diam. Vitae sed nam vulputate bibendum ornare vitae. Scelerisque sit sed.
                        </p>
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

                    <div className="lg:flex justify-between items-center">
                        <div className="bg-white-100 p-6 rounded-2xl transform duration-300 hover:-translate-y-8">

                            <div className="">

                                <img src={project} alt="" className='flex mx-auto' />

                                <div className='text-black-50 pt-5 flex flex-col items-center justify-center gap-y-5'>
                                    <h2 className='text-2xl font-montserrat font-semibold'>
                                        Project 1
                                    </h2>
                                    <p className="font-montserrat text-center lg:w-8/12 w-full">

                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <a href="/">
                                        <button className="text-white-100 bg-seagreen-200 hover:bg-white-100 hover:text-seagreen-200 btn-shadow flex gap-2 items-center py-3 lg:px-8 px-4 rounded-full font-semibold">
                                            learn more
                                            <span><svg width="12" height="13" viewBox="0 0 12 13" className="mt-1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 1.5C2 0.947715 2.44772 0.5 3 0.5L11 0.500001C11.5523 0.500001 12 0.947716 12 1.5V9.5C12 10.0523 11.5523 10.5 11 10.5C10.4477 10.5 10 10.0523 10 9.5V3.91421L1.70711 12.2071C1.31658 12.5976 0.683417 12.5976 0.292893 12.2071C-0.0976311 11.8166 -0.0976311 11.1834 0.292893 10.7929L8.58579 2.5L3 2.5C2.44772 2.5 2 2.05228 2 1.5Z" fill="white"></path></svg></span>
                                        </button>
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className="bg-white-100 p-6 rounded-2xl lg:mt-80 mt-6 transform duration-500 hover:-translate-y-8">

                            <div className="">

                                <img src={project} alt="" className='flex mx-auto' />

                                <div className='text-black-50 pt-5 flex flex-col items-center justify-center gap-y-5'>
                                    <h2 className='text-2xl font-montserrat font-semibold'>
                                        Project 2
                                    </h2>
                                    <p className="font-montserrat text-center lg:w-8/12 w-full">

                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <a href="/">
                                        <button className="text-white-100 bg-seagreen-200 hover:bg-white-100 hover:text-seagreen-200 btn-shadow flex gap-2 items-center py-3 lg:px-8 px-4 rounded-full font-semibold">
                                            learn more
                                            <span><svg width="12" height="13" viewBox="0 0 12 13" className="mt-1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 1.5C2 0.947715 2.44772 0.5 3 0.5L11 0.500001C11.5523 0.500001 12 0.947716 12 1.5V9.5C12 10.0523 11.5523 10.5 11 10.5C10.4477 10.5 10 10.0523 10 9.5V3.91421L1.70711 12.2071C1.31658 12.5976 0.683417 12.5976 0.292893 12.2071C-0.0976311 11.8166 -0.0976311 11.1834 0.292893 10.7929L8.58579 2.5L3 2.5C2.44772 2.5 2 2.05228 2 1.5Z" fill="white"></path></svg></span>
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

                    <div className="lg:flex items-center justify-center gap-12 mt-12">
                        <div>
                            <img src={token} alt="" className='' />
                        </div>
                        <div className=' lg:mt-0 mt-6'>
                            <h2 className='md:text-4xl mb-5 text-2xl font-montserrat font-bold text-white-100'>
                                Tokenomics
                            </h2>
                            <ul className='flex flex-col text-2xl font-semibold'>
                                <li>
                                    70% Public
                                </li>
                                <li>
                                    10% Community Fund
                                </li>
                                <li>
                                    10% Team
                                </li>
                                <li>
                                    10% Investors
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

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center lg:gap-16 gap-8 lg:pt-20 py-6">

                        <div className="bg-white-100 p-6 rounded-2xl text-black-100 text-left">
                            <h6 className='text-lg mb-5 font-medium font-montserrat'>
                                AI DOGE PHASE I
                            </h6>
                            <ul className='flex flex-col font-semibold'>
                                <li>
                                    ORAKOM
                                </li>

                                <li>
                                    ORAKOM
                                </li>

                                <li>
                                    ORAKOM
                                </li>
                                <li>
                                    ORAKOM
                                </li>

                            </ul>
                        </div>

                        <div className="bg-white-100 p-6 rounded-2xl text-black-100 text-left">
                            <h6 className='text-lg mb-5 font-medium font-montserrat'>
                                AI DOGE PHASE II
                            </h6>
                            <ul className='flex flex-col font-semibold'>
                                <li>
                                    ORAKOM
                                </li>

                                <li>
                                    ORAKOM
                                </li>

                                <li>
                                    ORAKOM
                                </li>
                                <li>
                                    ORAKOM
                                </li>

                            </ul>
                        </div>

                        <div className="bg-white-100 p-6 rounded-2xl text-black-100 text-left">
                            <h6 className='text-lg mb-5 font-medium font-montserrat'>
                                AI DOGE PHASE III
                            </h6>
                            <ul className='flex flex-col font-semibold'>
                                <li>
                                    ORAKOM
                                </li>

                                <li>
                                    ORAKOM
                                </li>

                                <li>
                                    ORAKOM
                                </li>
                                <li>
                                    ORAKOM
                                </li>

                            </ul>
                        </div>

                        <div className="bg-white-100 p-6 rounded-2xl text-black-100 text-left">
                            <h6 className='text-lg mb-5 font-medium font-montserrat'>
                                AI DOGE PHASE IV
                            </h6>
                            <ul className='flex flex-col font-semibold'>
                                <li>
                                    ORAKOM
                                </li>

                                <li>
                                    ORAKOM
                                </li>

                                <li>
                                    ORAKOM
                                </li>
                                <li>
                                    ORAKOM
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

                        <p className="font-montserrat">
                            Rhoncus, accumsan dictum
                        </p>

                        <h2 className='md:text-5xl text-2xl font-montserrat font-bold lg:w-8/12 w-full'>
                            Etiam nulla lectus amet nunc molestie at vulputate.
                        </h2>

                        <p className="font-montserrat">
                            Rhoncus, accumsan dictum
                        </p>

                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}
