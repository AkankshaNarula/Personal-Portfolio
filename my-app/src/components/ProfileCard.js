import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProfileCard = ({ name, title, social }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 transform hover:scale-105 transition-transform duration-300">
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
          {social.map(({ platform, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 mx-2"
            >
              {platform === 'github' && <FontAwesomeIcon icon={faGithub} size="2x" />}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
