import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import f_1 from '../assets/f_1.png';
import f_2 from '../assets/f_2.png';
import f_3 from '../assets/f_3.png';
import f_4 from '../assets/f_4.png';
import choose_1 from '../assets/choose_1.png';
import choose_2 from '../assets/choose_2.png';
import choose_3 from '../assets/choose_3.png';
import b_1 from '../assets/b_1.png';
import b_2 from '../assets/b_2.png';
import b_3 from '../assets/b_3.png';
import b_4 from '../assets/b_4.png';
import b_5 from '../assets/b_5.png';
import b_6 from '../assets/b_6.png';
import about from '../assets/about.png';
import shibai from '../assets/shibai.png';
import roadmap from '../assets/roadmap.png';
import Accordion from './Accordion';
import Typed from "react-typed";
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    const accordionData = [
        {
            title: 'What  can I use to purchase?',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
        },
        {
            title: 'What is Master Ai',
            content: `Master Ai is a project on the ERC chain. As the name suggests the team at Master Ai is working to make MSAI the master of every Ai project. Creating an ecosystem of Ai bots, 1 bot launching every week and all having different applications. Every bot will be monetized with ads with the revenue going into the MSAI Token`
        },
        {
            title: 'How can I gain access? ',
            content: `Master Ai is a project on the ERC chain. As the name suggests the team at Master Ai is working to make MSAI the master of every Ai project. Creating an ecosystem of Ai bots, 1 bot launching every week and all having different applications. Every bot will be monetized with ads with the revenue going into the MSAI Token`
        },
        {
            title: 'How do I benefit from it?',
            content: `Master Ai is a project on the ERC chain. As the name suggests the team at Master Ai is working to make MSAI the master of every Ai project. Creating an ecosystem of Ai bots, 1 bot launching every week and all having different applications. Every bot will be monetized with ads with the revenue going into the MSAI Token`
        }
    ];

    useEffect(() => {
        Aos.init({
            duration: 3000,
            once: true,
            delay: 50,
        });
        Aos.refresh();
    }, [])

    return (
        <div className="bg-blue-100 text-white-100 font-poppins overflow-hidden">

            {/* top section */}

            <div className="bg-top">

                <div className="lg:px-8 px-5 container mx-auto relative z-20">
                    <Menu />

                    <div className="flex flex-col items-center justify-center lg:py-20">
                        <img data-aos="fade-down" src={shibai} alt="" className='' />

                        <h2 data-aos="fade-up" data-aos-delay="100" className='md:text-5xl text-center text-2xl lg:w-9/12 py-6 font-poppins font-bold text-white-100'>
                            L
                            <Typed
                                strings={[
                                    'orem ipsum dolor sit amet, consectetur adipiscing elit.'
                                ]}
                                typeSpeed={50}
                                cursorChar={''}
                            />
                        </h2>

                        <p data-aos="fade-up" className="text-lg mt-8 lg:w-1/2 text-white-50 text-center font-inter">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>

                        <a data-aos="fade-up" href='/' className="py-8 font-poppins">
                            <button className="rounded-md bg-gradient text-white-100 font-semibold px-5 py-3">
                                GET ACCESS
                            </button>
                        </a>
                    </div>

                </div>
            </div>

            {/* what is master ai */}

            <div id='about' className="">

                <div className="lg:pb-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div className="flex flex-col items-center justify-center pt-12">
                        <h2 className='md:text-5xl text-center text-2xl font-poppins font-bold text-white-100'>
                            W
                            <Typed
                                strings={[
                                    'hat is Master AI?'
                                ]}
                                typeSpeed={100}
                                cursorChar={''}
                                loop
                            />
                        </h2>
                        <p className="py-6 font-inter text-gray-50 lg:w-8/12 w-full text-center">
                            Master Ai is a project on the ERC chain. As the name suggests the team at Master Ai is working to make MSAI the master of every Ai project. Creating an ecosystem of Ai bots, 1 bot launching every week and all having different applications. Every bot will be monetized with ads with the revenue going into the MSAI Token
                        </p>

                        <div className="lg:flex block space-y-5 items-baseline py-8 justify-center gap-16">

                            <div className="flex flex-col gap-y-5 items-center justify-center">
                                <img data-aos="zoom-in" data-aos-delay="100" src={choose_1} alt="" />
                                <div className='text-center font-inter '>
                                    <h4 className="text-white-100 text-xl pb-5 font-semibold">
                                        Loram Ipsum
                                    </h4>
                                    <p className='text-gray-50'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-5 items-center justify-center">
                                <img data-aos="zoom-in" data-aos-delay="100" src={choose_2} alt="" />
                                <div className='text-center font-inter '>
                                    <h4 className="text-white-100 text-xl pb-5 font-semibold">
                                        Loram Ipsum
                                    </h4>
                                    <p className='text-gray-50'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-5 items-center justify-center">
                                <img data-aos="zoom-in" data-aos-delay="100" src={choose_3} alt="" />
                                <div className='text-center font-inter '>
                                    <h4 className="text-white-100 text-xl pb-5 font-semibold">
                                        Loram Ipsum
                                    </h4>
                                    <p className='text-gray-50'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Why choose our token */}

            <div className="bg-blue-50">

                <div id='features' className="lg:py-12 py-5 lg:px-20 px-5 container mx-auto">

                    <div className="flex flex-col items-center justify-center pt-12 transform">
                        <h2 data-aos="fade-up" className='md:text-5xl text-center text-2xl font-poppins font-bold text-white-100'>
                            W
                            <Typed
                                strings={[
                                    'hy choose our Token?'
                                ]}
                                typeSpeed={50}
                                cursorChar={''}
                                loop
                            />
                        </h2>
                        <p className="py-6 font-inter text-gray-50 text-center">
                            The world first platform to reward investors and traders build on ICO.
                        </p>

                        <div className="lg:flex block space-y-5 items-baseline mt-8 justify-between gap-5">

                            <div data-aos="flip-up" data-aos-duration="3500" data-aos-delay="150" data-aos-once="false" className="flex flex-col gap-y-5 items-center justify-center rounded-xl px-5 pb-6 bg-gray-100">
                                <img src={f_1} alt="" className='lg:-mt-12' />
                                <div className='text-center flex flex-col items-center justify-center font-inter gap-y-6'>
                                    <h4 className="text-white-100 text-xl font-semibold">
                                        Loram Ipsum
                                    </h4>
                                    <p className='text-gray-50'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elitLorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                    </p>
                                    <button className="flex gap-2 items-center font-semibold">
                                        See details

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                        </svg>

                                    </button>
                                </div>
                            </div>

                            <div data-aos="flip-down" data-aos-duration="3500" data-aos-delay="150" data-aos-once="false" className="flex flex-col gap-y-5 items-center justify-center rounded-xl px-5 pb-6 bg-gray-100">
                                <img src={f_2} alt="" className='lg:-mt-12' />
                                <div className='text-center flex flex-col items-center justify-center font-inter gap-y-6'>
                                    <h4 className="text-white-100 text-xl font-semibold">
                                        Loram Ipsum
                                    </h4>
                                    <p className='text-gray-50'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elitLorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                    </p>
                                    <button className="flex gap-2 items-center font-semibold">
                                        See details

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                        </svg>

                                    </button>
                                </div>
                            </div>

                            <div data-aos="flip-up" data-aos-duration="3500" data-aos-delay="150" data-aos-once="false" className="flex flex-col gap-y-5 items-center justify-center rounded-xl px-5 pb-6 bg-gray-100">
                                <img src={f_3} alt="" className='lg:-mt-12' />
                                <div className='text-center flex flex-col items-center justify-center font-inter gap-y-6'>
                                    <h4 className="text-white-100 text-xl font-semibold">
                                        Loram Ipsum
                                    </h4>
                                    <p className='text-gray-50'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elitLorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                    </p>
                                    <button className="flex gap-2 items-center font-semibold">
                                        See details

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                        </svg>

                                    </button>
                                </div>
                            </div>

                            <div data-aos="flip-down" data-aos-duration="3500" data-aos-delay="150" data-aos-once="false" className="flex flex-col gap-y-5 items-center justify-center rounded-xl px-5 pb-6 bg-gray-100">
                                <img src={f_4} alt="" className='lg:-mt-12' />
                                <div className='text-center flex flex-col items-center justify-center font-inter gap-y-6'>
                                    <h4 className="text-white-100 text-xl font-semibold">
                                        Loram Ipsum
                                    </h4>
                                    <p className='text-gray-50'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elitLorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                    </p>
                                    <button className="flex gap-2 items-center font-semibold">
                                        See details

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                        </svg>

                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* tokenomics */}

            <div id='tokenomics' className="">

                <div className="lg:py-12 py-5 lg:px-20 px-5 container mx-auto bg-project">

                    <h2 data-aos="fade-up" className='md:text-5xl text-center text-2xl font-poppins font-bold text-white-100'>
                        T
                        <Typed
                            strings={[
                                'okenomics'
                            ]}
                            typeSpeed={50}
                            cursorChar={''}
                            loop
                        />
                    </h2>
                    <p className="py-6 font-inter text-gray-50 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elitL
                    </p>

                    <div className="lg:flex justify-center items-center mt-6">
                        <div className="bg-gray-100 p-6  rounded-2xl lg:w-1/2">

                            <div className="">

                                <h2 className='md:text-4xl mb-6 text-center text-2xl font-poppins font-bold text-white-100'>
                                    D
                                    <Typed
                                        strings={[
                                            'istribution'
                                        ]}
                                        typeSpeed={50}
                                        cursorChar={''}
                                        loop
                                    />
                                </h2>

                                <img src={about} alt="" className='flex mx-auto' />

                                <div className="my-6 font-inter space-y-5">
                                    <div className="p-2 bg-gray-200 rounded-md flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.000244141" width="32" height="32" rx="4" fill="#32B6EA" />
                                            </svg>

                                            <p className="font-semibold">
                                                Reserve Fund
                                            </p>
                                        </div>

                                        <div className="">
                                            <p className="font-semibold">
                                                40%
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-2 bg-gray-200 rounded-md flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.000244141" width="32" height="32" rx="4" fill="#1CA151" />
                                            </svg>

                                            <p className="font-semibold">
                                                Team & Advisor
                                            </p>
                                        </div>

                                        <div className="">
                                            <p className="font-semibold">
                                                30%
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-2 bg-gray-200 rounded-md flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.000244141" width="32" height="32" rx="4" fill="#DEAD2F" />
                                            </svg>

                                            <p className="font-semibold">
                                                Presale Token
                                            </p>
                                        </div>

                                        <div className="">
                                            <p className="font-semibold">
                                                10%
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-2 bg-gray-200 rounded-md flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.000244141" width="32" height="32" rx="4" fill="#A00763" />
                                            </svg>

                                            <p className="font-semibold">
                                                Bounty Program
                                            </p>
                                        </div>

                                        <div className="">
                                            <p className="font-semibold">
                                                10%
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-2 bg-gray-200 rounded-md flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.000244141" width="32" height="32" rx="4" fill="#343EBF" />
                                            </svg>

                                            <p className="font-semibold">
                                                Bounty Program
                                            </p>
                                        </div>

                                        <div className="">
                                            <p className="font-semibold">
                                                10%
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* roadmap */}

            <div id='roadmap' className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto text-white-100">

                <h2 data-aos="fade-up" className='md:text-5xl text-center text-2xl font-poppins font-bold text-white-100'>
                    R
                    <Typed
                        strings={[
                            'oad map'
                        ]}
                        typeSpeed={50}
                        cursorChar={''}
                        loop
                    />
                </h2>
                <p className="py-6 font-inter text-gray-50 text-center">
                    Lorem ipsum lorem upsul
                </p>

                <div className="py-8">
                    <img src={roadmap} alt="" className='flex mx-auto' />
                </div>

            </div>

            {/* partners */}

            <div id='partners' className="">
                <div className="container mx-auto bg-gray-100 rounded-2xl">
                    <div className="flex flex-col items-center lg:px-12 px-6 justify-cente gap-y-8 text-center lg:py-16 py-6">

                        <h2 data-aos="fade-up" className='md:text-5xl text-center text-2xl font-poppins font-bold text-white-100'>
                            S
                            <Typed
                                strings={[
                                    'trategic Partners'
                                ]}
                                typeSpeed={50}
                                cursorChar={''}
                                loop
                            />
                        </h2>
                        <p className="py-5 font-inter lg:w-1/2 text-gray-50 text-center">
                            Join the industry leaders to discuss where the markets are heading. We accept token payments.

                        </p>

                        <div className="py-5 flex flex-wrap justify-between gap-6">
                            <img src={b_1} alt="" />
                            <img src={b_2} alt="" />
                            <img src={b_3} alt="" />
                            <img src={b_4} alt="" />
                            <img src={b_5} alt="" />
                            <img src={b_6} alt="" />
                        </div>

                    </div>

                </div>
            </div>

            {/* faq section */}

            <div id='faqs' className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto text-white-100">

                <h2 data-aos="fade-up" className='md:text-5xl text-center text-2xl font-poppins font-bold text-white-100'>
                    H
                    <Typed
                        strings={[
                            'ave any Question?'
                        ]}
                        typeSpeed={50}
                        cursorChar={''}
                        loop
                    />
                </h2>
                <p className="py-6 font-inter text-gray-50 text-center">
                    Join the industry leaders to discuss where the markets are heading. We accept token payments.
                </p>

                <div className="py-8">
                    <div className="accordion space-y-5">
                        {accordionData.map(({ title, content }) => (
                            <Accordion title={title} content={content} />
                        ))}
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}
