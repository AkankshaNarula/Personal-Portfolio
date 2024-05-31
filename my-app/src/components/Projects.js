import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon

const ProfileCard = ({ name, title, social, githubLink }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-purple-800 opacity-80 m-4 transition-transform transform hover:scale-105">
      <img
        className="w-full"
        src='/images/Aboutbg.png' // Replace with actual image path
        alt={`${name}`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-gray-200 mb-2">{name}</div>
        <p className="text-gray-200 text-base">{title}</p>
      </div>
      {social && (
        <div className="px-6 pt-4 pb-2">
          <a
            href={githubLink} // Replace with actual GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-200 transition duration-300"
          >
            <FaGithub className="inline-block mr-2" /> GitHub
          </a>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen p-8">
      <div className="container mx-auto px-4 py-8 relative z-10">
      <h2 className="text-center text-3xl font-bold text-gray-200 mb-6">
                Projects
            </h2>
        <div className="flex flex-wrap justify-center items-center">
          <ProfileCard
            name="FinTrack"
            title="Flutter, Firebase"
            social={true}
            githubLink="https://gitlab.com/we55922421/fintrack"
          />
          <ProfileCard
            name="Chandigarh Garden's App"
            title="Flutter, Flask, SQL"
            social={true}
            githubLink="https://gitlab.com/akanksha.narula8/chandigarg_gardens_app-frontend"
          />
          <ProfileCard
            name="Pattern Owl Chrome Extension"
            title="HTML, CSS, JavaScript, Python, Flask"
            social={true}
            githubLink="https://github.com/AkankshaNarula/pattern-hunters-final"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
