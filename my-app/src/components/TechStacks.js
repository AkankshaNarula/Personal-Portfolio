import React from "react";
import { useSpring, animated } from "react-spring"; // Import react-spring library
import BallCanvas from "./Ball";
import SectionWrapper from "./Sectionwrapper";


const technologies = [
  {
    name: "HTML 5",
    icon: "/images/html.png",
  },
  {
    name: "CSS 3",
    icon: "/images/html.png",
  },
  {
    name: "JavaScript",
    icon: "/images/html.png",
  },
  {
    name: "Flutter",
    icon: "/images/html.png",
  },
  {
    name: "Flask",
    icon: "/images/html.png",
  },
  {
    name: "Python",
    icon: "/images/html.png",
  },
  {
    name: "C++",
    icon: "/images/html.png",
  },
  {
    name: "SQL",
    icon: "/images/html.png",
  },
  {
    name: "React",
    icon: "/images/html.png",
  },
  {
    name: "Git",
    icon: "/images/html.png",
  },
];

const TechStacks = () => {
  // Use react-spring to animate the "Techstacks" text
  const textSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  return (
    <section
      id="techstacks"
      className="relative h-screen flex items-center justify-center text-white"
    >
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            background-image: url('/images/aboutbg4.png');
            background-size: cover;
            background-position: center;
          }
        `}
      </style>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      {/* Animated "Techstacks" text */}
      <animated.div style={textSpring}>
        <h1 className="text-purple-500 text-4xl font-bold">Techstacks</h1>
      </animated.div>
    </section>
  );
};

export default SectionWrapper(TechStacks, "");


