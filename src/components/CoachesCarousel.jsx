import React, { useState } from 'react';

// SVG icon components
const ShareIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="18" cy="5" r="3"></circle>
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
  </svg>
);

const TwitterIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const ArrowUpIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

const CoachesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const coaches = [
    {
      name: "Katrin Perish",
      experience: "8 Years of Experience",
      image: "https://images.pexels.com/photos/27465780/pexels-photo-27465780/free-photo-of-a-young-woman-in-a-suit-and-tie.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Marica Ingrosso",
      experience: "5 Years of Experience",
      image: "https://images.pexels.com/photos/8867244/pexels-photo-8867244.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Arnold Ozix",
      experience: "3 Years of Experience",
      image: "https://images.pexels.com/photos/7792842/pexels-photo-7792842.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Sarah Williams",
      experience: "7 Years of Experience",
      image: "https://images.pexels.com/photos/19218034/pexels-photo-19218034/free-photo-of-smiling-doctor-in-a-lab-coat-and-with-a-stethoscope.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "David Chen",
      experience: "6 Years of Experience",
      image: "https://images.pexels.com/photos/30276807/pexels-photo-30276807/free-photo-of-profile-portrait-of-a-barrister-in-court-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  // Handle dot click with custom sliding behavior
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Handle next click
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % coaches.length);
  };

  // Social Media Icon Set component - Updated with white background and blue color that turns green on hover
  const SocialIcons = () => (
 <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
    <div className="flex space-x-2 items-center justify-center">
      <button className="p-3 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-green-500 transition-all duration-200">
        <ShareIcon size={18} className="text-blue-500 group-hover:text-white hover:text-white transition-colors duration-200" />
      </button>
      <button className="p-3 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-green-500 transition-all duration-200">
        <TwitterIcon size={18} className="text-blue-500 group-hover:text-white hover:text-white transition-colors duration-200" />
      </button>
      <button className="p-3 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-green-500 transition-all duration-200">
        <InstagramIcon size={18} className="text-blue-500 group-hover:text-white hover:text-white transition-colors duration-200" />
      </button>
      <button className="p-3 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-green-500 transition-all duration-200">
        <FacebookIcon size={18} className="text-blue-500 group-hover:text-white hover:text-white transition-colors duration-200" />
      </button>
    </div>
  </div>
  );

  return (
    <div className="my-10 bg-sky-50 min-h-screen py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-2/5 mb-12 md:mb-0 pr-0 md:pr-8">
            {/* Badge at top */}
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-white text-gray-700 rounded-full shadow-sm">
                <span className="h-2 w-2 bg-green-400 rounded-full mr-2"></span>
                <span className="text-sm font-medium tracking-wide">SKILLED LIFE COACHES</span>
              </span>
            </div>
            
            {/* Heading */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Meet Our<br />Career Mentors Who<br />Change Your Life
              </h2>
            </div>
            
            {/* Button */}
            <button className="bg-green-400 mt-7 hover:bg-blue-600 text-white px-10 py-3 rounded-md transition duration-300 uppercase font-medium text-center w-full md:w-auto" style={{ padding: '10px 20px'}}>
              ALL MENTORS
            </button>
          </div>
          
          {/* Right Side - Carousel */}
          <div className="w-full md:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-transform duration-300">
              {/* First Coach Card */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-500">
                <div className="relative group cursor-pointer">
                  <img 
                    src={coaches[currentIndex].image} 
                    alt={coaches[currentIndex].name}
                    className="w-full h-64 md:h-72 object-cover object-top transition-all duration-500"
                  />
                  <SocialIcons />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">{coaches[currentIndex].name}</h3>
                  <p className="text-gray-600 text-sm">{coaches[currentIndex].experience}</p>
                </div>
              </div>
              
              {/* Second Coach Card */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-500">
                <div className="relative group cursor-pointer">
                  <img 
                    src={coaches[(currentIndex + 1) % coaches.length].image} 
                    alt={coaches[(currentIndex + 1) % coaches.length].name}
                    className="w-full h-64 md:h-72 object-cover object-top transition-all duration-500"
                  />
                  <SocialIcons />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">{coaches[(currentIndex + 1) % coaches.length].name}</h3>
                  <p className="text-gray-600 text-sm">{coaches[(currentIndex + 1) % coaches.length].experience}</p>
                </div>
              </div>
            </div>
            
            {/* Dot indicators and Next button */}
            <div className="flex justify-between items-center mt-8">
              <div className="flex">
                {coaches.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 mx-1 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-blue-600 w-6" : 
                      index === (currentIndex + 1) % coaches.length ? "bg-blue-600 w-2" :
                      "bg-gray-300 w-2"
                    }`}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              {/* <button 
                onClick={handleNextClick}
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md text-sm transition duration-300"
              >
                Next Coach
              </button> */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to top button - Updated position to be lower and centered */}
      <button className="fixed bottom-4 left-1/2 transform -translate-x-1/2 p-3 bg-white text-blue-500 hover:bg-green-500 hover:text-white rounded-full shadow-lg transition-all duration-300">
        <ArrowUpIcon size={24} className="" />
      </button>
    </div>
  );
};

export default CoachesCarousel;