// src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero bg-cover bg-center text-white py-32 relative flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <h2 className="text-4xl mb-5 animate-fadeInDown">Welcome to VIT's Premier News Portal</h2>
            <p className="text-2xl mb-10 animate-fadeInDown">Stay informed about what's happening on and around the VIT campus</p>
            <a href="https://vitbhopal.ac.in/" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#ffc107] text-[#0c4b85] py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#0c4b85] hover:text-white transition-transform transform hover:-translate-y-1 animate-fadeInDown">
                    Explore More
                </button>
            </a>
        </section>
    );
};

export default Hero;