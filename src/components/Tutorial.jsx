import React from 'react';

const Tutorial = () => {
  const cardDetails = [
    {
      tag: "FREE",
      videoId: "durSItx4OLg?si=DoSbk8US0ojm986K",
      title: "A Guide To Becoming A Lawyer", //Placeholder
      author: "INTO study", //Placeholder
    },
    {
      tag: "DEVELOPMENT",
      videoId: "MuSIys2AOzw?si=acEd7SNCQZSvJBAF",
      title: "Cyber Security Explained", //Placeholder
      author: "TECH With JONO",
    },
    {
      tag: "MEDICAL",
      videoId: "J1vEkv1gAII?si=AV9nRYNvqtY9qdcH",
      title: "How to Become a Registered Nurse in USA",
      author: "Registered Nurse",
    },
      {
          tag: "FREE",
          videoId: "Dnh0jP-GA0o",
          title: "Introduction to Product ManagementS", //Placeholder
          author: "Chloe Shih", //Placeholder
      }
  ];

  return (
    <div className="bg-white py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-sm text-gray-500 mb-2">
          <span className="text-green-500">•</span> BEST FREE VIDEOS
        </p>
        <h2 className="text-3xl font-semibold text-gray-800">
          Watch Free Tutorials from Our Mentors Right Now
        </h2>
      </div>

      {/* Carousel Section */}
      <div className="relative max-w-7xl mx-auto">
        <div className="flex overflow-x-auto space-x-6 p-4">

          {/* Tutorial Card */}
          {cardDetails.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-[550px] rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <iframe
                  className="w-full h-[300px]"
                  src={`https://www.youtube.com/embed/${card.videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {card.tag === "FREE" ? (
                  <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs rounded-full px-3 py-1">
                    {card.tag}
                  </div>
                ) : (
                  <div className="absolute top-3 left-3 bg-green-500 text-white text-xs rounded-full px-3 py-1">
                    • {card.tag}
                  </div>
                )}

                {/* Play Icon - conditionally render if DEVELOPMENT */}
                {card.tag === "DEVELOPMENT" && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 opacity-80 hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132a1 1 0 00-1.506.543l-2.5 4.533a1 1 0 001.506 1.544l3.197 2.132a1 1 0 001.506-.543l2.5-4.533a1 1 0 00-1.506-1.544z" />
                        </svg>
                    </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                <p className="text-gray-600 text-sm">by {card.author}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mt-4">
          <button className="w-3 h-3 bg-blue-500 rounded-full"></button>
          <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
          <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
            <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
        </div>

        {/* Scroll to Top Button */}
        <div className="absolute bottom-3 right-3 bg-blue-500 text-white rounded-md p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
