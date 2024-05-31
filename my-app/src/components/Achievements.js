import React from 'react';


const Achievements = () => {
    const timelineData = [         
        {
            version: "DPBH Hackathon, IIT Varanasi",
            date: "2024",
            description: "Advanced to the grand finale of this national level hackathon, received a certificate of excellence.",
        },
        {
            version: "American Express Discovery Mentee",
            date: "2024",
            description: "Selected as one of the top 150 candidates in the country for this mentorship programme",
        },
        
        {
            version: "Google WE’23 Scholar",
            date: "2023",
            description: "Selected as one of the top 200 candidates out of 22,000 applicants and was given a 100% scholarship.",
        },
        {
          version: "Google Girl Hackathon'23",
          date: "2023",
          description: "Recognised as one of the top 2.5% participants.",
      },
    ];

    return (
        <section 
            id='achievements' 
            className='achievements-section' 
            style={{ backgroundColor: 'rgba(74, 20, 140, 0.8)', padding: '20px' }}
        >
            <h2 className="text-center text-3xl font-bold text-gray-200 mb-6">
                Achievements
            </h2>
            <ol className="items-center sm:flex">
                {timelineData.map((item, index) => (
                    <li key={index} className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg
                                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </div>
                            {index < timelineData.length - 1 && (
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            )}
                        </div>
                        <div className="mt-3 sm:pe-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.version}</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.date}</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default Achievements;
