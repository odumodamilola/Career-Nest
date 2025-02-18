import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tutorial = () => {
  const cardDetails = [
    {
      tag: "FREE",
      videoId: "durSItx4OLg?si=DoSbk8US0ojm986K",
      title: "A Guide To Becoming A Lawyer",
      author: "INTO study",
    },
    {
      tag: "DEVELOPMENT",
      videoId: "MuSIys2AOzw?si=acEd7SNCQZSvJBAF",
      title: "Cyber Security Explained",
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
      title: "Introduction to Product Management",
      author: "Chloe Shih",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display 2 items per slide
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768, // For medium screens (tablets)
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens and up
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024, // For large screens (desktops)
        settings: {
          slidesToShow: 2, // Show 2 slides on large screens and up
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-12 px-4 md:px-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-sm text-gray-600 mb-2 font-medium">
          <span className="text-green-500">•</span> BEST FREE VIDEOS
        </p>
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
          Watch Free Tutorials from Our Mentors
        </h2>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-10">
        <Slider {...settings}>
          {cardDetails.map((card, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden mx-2"> {/* Added mx-2 for spacing between items */}
              <div className="relative">
                <iframe
                  className="w-full h-56 sm:h-64 md:h-72 lg:h-80"
                  src={`https://www.youtube.com/embed/${card.videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div
                  className={`absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full ${
                    card.tag === "FREE" ? "bg-blue-500" : "bg-green-500"
                  }`}
                >
                  {card.tag}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                <p className="text-gray-600 text-sm">by {card.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Tutorial;
