// src/components/AboutSection.jsx
import React from 'react';

const About = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white">
      <div className="absolute top-4 left-4 text-lg font-medium text-gray-400">
        2024
      </div>
      <div className="text-center">
        <div className="relative inline-block mb-8">
          <img
            src="/images/akanksha.jpeg"
            alt="Silhouette"
            className="rounded-lg shadow-lg w-80 h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        </div>
        <h1 className="text-5xl font-bold mb-4">CREATIVE PORTFOLIO</h1>
        <p className="text-xl mb-4">Hi, I'm Akanksha Narula an aspiring technology enthusiast.</p>
        <p className="text-md text-gray-400">
          I am an experienced professional developer, and I typically accept development projects.
        </p>
        <div className="mt-8">
          <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute bottom-16 left-1/4 transform -translate-x-1/2 bg-purple-800 w-32 h-32 rounded-full opacity-80"></div>
      <div className="absolute bottom-24 right-1/4 transform translate-x-1/2 bg-purple-600 w-48 h-48 rounded-full opacity-90"></div>
    </section>
  );
};

export default About;
