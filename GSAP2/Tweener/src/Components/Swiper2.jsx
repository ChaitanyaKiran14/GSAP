import prod1 from '../assets/images/product1.png';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Mousewheel, Thumbs, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { gsap } from 'gsap';

const TestSwiper = () => {
    return (
        <div className="h-screen font-['Poppins'] text-black overflow-hidden">

              {/* Navigation */}
            <nav className="navigation fixed top-8 right-20 w-4/5 flex items-center gap-12 text-sm z-10">
                <a href="#" className="text-black ">Men</a>
                <a href="#" className="text-black ">Women</a>
                <a href="#" className="text-black ">Customise</a>
                <div className="ml-auto flex items-center gap-8">
                <a href="#" className="flex items-center gap-2 text-black ">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                </a>
                <a href="#" className="text-black opacity-70 hover:opacity-100">My Account</a>
                <a href="#" className="text-black">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </a>
                </div>
            </nav>

            {/* Vertical Text */}
            <div className="absolute top-1/2 left-2 transform -rotate-90 text-black text-6xl font-bold">
                POSSESSED
            </div>

            {/* Credits Section */}
            <div className="absolute top-60 left-60 mt-10 flex flex-col  text-black">
                <h1 className="font-semibold">CREDITS</h1>
                <p>Agency: @chaitanya</p>
                <p>AI: chaitu@meta</p>
                <p>Retouching: @twistedloupe</p>
                <h1 className="font-semibold mt-4">We Say Hi Production Team</h1>
                <p>@adellatucker</p>
                <p>@minniatur</p>
            </div>

            {/* Centered Image */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
                <img src={prod1} alt="Product" className="h-96 w-auto" />
            </div>

            {/* Color Section */}
            <div className="absolute top-1/4 right-80 text-black">
                <h1 className="font-semibold">COLOR:</h1>
                <p>Blood Orange</p>
                <h2 className="font-semibold mt-4">$1250</h2>
                <button className="bg-brown-600 text-black px-4 py-2 mt-2">Place Bid</button>
            </div>
        </div>
    );
}

export default TestSwiper;
