// src/components/EventSection.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const EventSection = ({ title, description, link }) => {
    return (
        <section className="bg-white p-8 rounded-lg shadow-md transition-transform transform hover:translate-y-[-8px] hover:shadow-lg">
            {/* Title as a clickable link */}
            <Link to={link} className="text-3xl mb-4 text-[#0c4b85] underline hover:text-blue-700 block">
                {title}
            </Link>
            <p className="text-base leading-7">{description}</p>
            {/* Learn More as a clickable link */}
            <Link to={link} className="text-[#0c4b85] underline hover:text-blue-700 mt-4 inline-block">
                Learn More
            </Link>
        </section>
    );
};

export default EventSection;
