import React from 'react';
import heroImg from '../assets/image.png'; // Replace with your actual image path

const HeroSection = () => {
  return (
    <>
    <section className="bg-gray-50  pb-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Column - Text */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          {/* Badge */}
          <div className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            Only Best LifeCoaches
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            We Help You 
            <span className="text-#1b253e-500"> Achive Your Dream Career</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-gray-600 mb-6">
          Since 2024, Career Nest has been a pioneering and trusted mentorship platform, empowering students and professionals with world-class career guidance and skill development. 🚀
          </p>

          {/* CTA Buttons */}
          <div className="flex space-x-4">
            <a
              href="#learn-more"
              className=" hover:bg-blue-600 text-white px-5 py-3 rounded-md font-medium" style={{ backgroundColor: '#1b253e' }}
            >
              Learn More
            </a>
            <a
              href="#presentation"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-3 rounded-md font-medium"
            >
              Presentation
            </a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
   

    <section className="relative w-full bg-gray-50 py-16 px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-8">
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="https://img.freepik.com/free-photo/people-working-with-ai-operated-devices_23-2151922478.jpg?uid=R155211190&ga=GA1.1.356045453.1735949942&semt=ais_hybrid" 
          alt="Tutoring Program"
          className="rounded-lg shadow-lg w-full max-w-md lg:max-w-lg"
        />
      </div>

      <div className="w-full lg:w-1/2">
        <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-4 rounded mb-5">WHY LIFE COACHING</span>
        <h2 className="text-3xl font-bold text-gray-900 mt-4">Smart AI Mentorship Platform for Young Professionals</h2>
        <p className="text-gray-600 mt-3">
          Since 2024 we have been a visionary and a reliable Mentorship Platform for world-class brands.
        </p>

        <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md">
          <span className="text-green-500 text-xl bg-green-100 px-3 py-2" style={{borderRadius: '40px'}}>✔</span>
          <p className="text-gray-700 font-medium">Empowering the next generation through mentorship and skill development.</p>
        </div>
        <div className="flex items-center gap-3 ps-5 p-4 bg-white rounded-lg shadow-md">
          <span className="text-green-500 text-xl  bg-green-100 px-3 py-2" style={{borderRadius: '40px'}}>✔</span>
          <p className="text-gray-700 font-medium">Access expert-led mentorship and career guidance in various fields.</p>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md">
          <span className="text-green-500 text-xl  bg-green-100 px-3 py-2" style={{borderRadius: '40px'}}>✔</span>
          <p className="text-gray-700 font-medium">Learn, grow, and connect with professionals anytime, anywhere.</p>
        </div>
      </div>

      </div>
    </section>
    <section className='mb-10'>
    <div className="py-10 bg-gradient-to-r pt-10 from-blue-50 to-blue-100 min-h-screen flex items-center">
          <div className="container mx-auto px-6 py-16 max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Text Content */}
              <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
                Empowering Future Leaders
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 animate-slide-up">
                Unlock mentorship, skill development, and career growth with expert guidance. 
                Access structured learning paths, interactive resources, and real-world insights 
                to shape your future.
              </p>

                <div className="flex flex-col sm:flex-row gap-4 pb-10">
                  <button className="px-8 py-3  text-white rounded-md hover:bg-blue-700 transition duration-300 shadow-md" style={{ backgroundColor: '#1b253e' }}>
                    Get Started
                  </button>
                  <button className="px-8 py-3 bg-white  border border-blue-600 rounded-md hover:bg-blue-50 transition duration-300" style={{ Color: '#1b253e', border: '1px solid #1b253e' }}>
                    Learn More
                  </button>
                </div>
              </div>
              
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-200 rounded-full opacity-50 z-0"></div>
                  <img 
                    src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Professional instructor" 
                    className="relative z-10 rounded-xl shadow-2xl w-full max-w-md mx-auto"
                  />
                  {/* <div >
                    
                    <button className="  bg-yellow-400 text-gray-800 font-semibold py-2 absolute  px-6 my-10 rounded-lg shadow-lg z-20">Start Today</button>
                  </div> */}
                </div>
              </div>
            </div>
            
          
            {/* <div className="mt-20">
              <p className="text-center text-gray-500 my-10">Trusted by leading companies worldwide</p>
          
            </div> */}
          </div>
        </div>
    </section>
  </>
  );
};

export default HeroSection;
