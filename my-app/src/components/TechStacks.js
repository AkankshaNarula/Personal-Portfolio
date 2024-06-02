import React from "react";
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
        background-color: rgba(138, 43, 226, 0.8); /* Purple800 with opacity 0.8 */
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
      
    </section>
  );
};

export default SectionWrapper(TechStacks, "");


