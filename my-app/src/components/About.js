import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core'; // Import the typewriter library
import { useSpring, animated } from '@react-spring/web'; // Import React Spring

const About = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    // Initialize the typewriter effect
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: [
        "Hi, I'm Akanksha Narula, an aspiring technology enthusiast.",
        "Welcome to my creative portfolio!",
        "I love building web applications and exploring new technologies.",
        // Add more strings here as desired
      ],
      autoStart: true,
      delay: 50, // Adjust typing speed (optional)
      loop: true,
    });

    // Clean up when component unmounts
    return () => {
      typewriter.stop(); // Stop the typewriter effect
    };
  }, []);

  // React Spring animation for the purple circles
  const circleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 0.75, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  return (
    <section id = "about"
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/aboutbg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute top-4 left-4 text-lg font-medium text-gray-400">
        2024
      </div>
      <div className="relative text-center px-4 sm:px-6 lg:px-8">
        <div className="relative inline-block mb-8">
          <img
            src="/images/akanksha.jpeg"
            alt="Silhouette"
            className="rounded-lg shadow-lg w-60 sm:w-80 h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Akanksha Narula</h1>
        <p
          ref={typewriterRef}
          className="text-lg sm:text-xl mb-4"
          style={{ whiteSpace: 'pre-line' }} // Preserve line breaks
        ></p>
        <p className="text-sm sm:text-md text-gray-400">
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
      {/* Animated purple circles */}
      <animated.div
        className="absolute bottom-72 left-0.5 transform -translate-x-1/2 bg-purple-800 rounded-full opacity-80"
        style={{
          ...circleAnimation,
          width: '10vw',
          height: '10vw',
        }}
      ></animated.div>
      <animated.div
        className="absolute bottom-24 right-3/4 transform translate-x-1/2 bg-purple-600 rounded-full opacity-90"
        style={{
          ...circleAnimation,
          width: '16vw',
          height: '16vw',
        }}
      ></animated.div>
      <animated.div
        className="absolute bottom-72 right-0.5 transform -translate-x-1/2 bg-purple-800 rounded-full opacity-80"
        style={{
          ...circleAnimation,
          width: '10vw',
          height: '10vw',
        }}
      ></animated.div>
      <animated.div
        className="absolute bottom-32 left-3/4 transform translate-x-1/2 bg-purple-600 rounded-full opacity-90"
        style={{
          ...circleAnimation,
          width: '16vw',
          height: '16vw',
        }}
      ></animated.div>
    </section>
  );
};

export default About;



