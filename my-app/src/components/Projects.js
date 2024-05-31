import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon

const ProfileCard = ({ name, title, social, githubLink }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <img
        className="w-full"
        src='/images/techbg3.png' // Replace with actual image path
        alt={`${name}`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{title}</p>
      </div>
      {social && (
        <div className="px-6 pt-4 pb-2">
          <a
            href={githubLink} // Replace with actual GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
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
    <section id="projects" className="min-h-screen p-8">
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-xl font-bold mb-8">Projects</h2>
      <div className="flex flex-wrap justify-center items-center">
      <ProfileCard
  name="FinTrack"
  title="Flutter, Firebase"
  social={true}
  githubLink="https://github.com/yourusername/fintrack"
/>

        <ProfileCard name="Chandigarh Garden's App" title="Flutter, Flask, SQL"  />
        <ProfileCard name="Pattern Owl Chrome Extensiom" title="HTML, CSS, JavaScript, Python, Flask" />
        
      </div>
    </div>
    </section>
  );
};

export default Projects;
