import React from 'react';

const CodingProfiles = () => {
  return (
    <section id="codingprofiles" className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Coding Profiles</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <CodingProfileCard
          title="LeetCode"
          link="https://leetcode.com/goat8136/"
          problemsSolved={410}
        />
        <CodingProfileCard
          title="Codeforces"
          link="https://codeforces.com/profile/goat8136"
          hours={1057}
        />
        <CodingProfileCard
          title="LeetCode (Hours)"
          link="https://leetcode.com/goat8136/"
          hours={1588}
        />
      </div>
    </section>
  );
};

const CodingProfileCard = ({ title, link, problemsSolved, hours }) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {problemsSolved !== undefined && (
        <p className="text-xl mt-2">{problemsSolved}</p>
      )}
      {hours !== undefined && (
        <p className="text-xl mt-2">{hours} hours</p>
      )}
      <p className="text-sm text-gray-400">
        <a href={link} target="_blank" rel="noopener noreferrer">
          My Profile
        </a>
      </p>
    </div>
  );
};

export default CodingProfiles;


