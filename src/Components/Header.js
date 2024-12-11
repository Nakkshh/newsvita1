// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="bg-[#0c4b85] text-white py-4 text-center shadow-md">
            <h1 className="text-6xl font-semibold mb-2 animate-fadeInDown">NewsVITa</h1>
            <p className="text-xl mb-5">Your Trusted Source for Campus News & Beyond</p>
        </header>
    );
};

export default Header;