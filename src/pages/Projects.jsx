import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const projects = [
  {
    title: "Crime Watch: Analyzing Chicago Crime Patterns",
    date: "Sep 2022",
    technologies: "Python, SQL, Tableau",
    domain: "Public Safety Analytics",
    description: [
      "Developed an end-to-end crime analysis dashboard using Tableau Storytelling features to identify crime hotspots and time-based crime trends across the city of Chicago.",
      "Extracted, cleaned, and transformed millions of records from the Chicago Crimes Portal using SQL, optimizing temporal and geospatial dimensions.",
      "Built an ETL pipeline in Python and SQL to automate data ingestion, processing, and loading into Tableau-ready datasets.",
      "Applied time-series analysis to detect recurring patterns in violent and property crimes by neighborhood, time of day, and season.",
    ],
  },
  {
    title: "Scalable Data Processing with Hadoop and Amazon EC2",
    date: "Dec 2023",
    technologies: "Python, Hadoop, MapReduce, AWS EC2",
    domain: "Big Data / Transportation Analytics",
    description: [
      "Designed and deployed a scalable distributed data processing pipeline on Amazon EC2 using Hadoop MapReduce to analyze NYC Taxi Trip records.",
      "Processed millions of transactions to extract key metrics such as trip duration, fare amount, pickup/drop-off time, and geospatial clusters.",
      "Developed and optimized custom MapReduce jobs in Python, implementing mapper and reducer functions to aggregate data by time window and location.",
      "Conducted comparative performance analysis between MapReduce and SQL-based processing to demonstrate scalability gains on large datasets.",
    ],
  },
];

export default function Projects() {
  const settings = {
    dots: false,
    infinite: false,        // No infinite looping
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { onClick, currentSlide, slideCount } = props;
    return (
      <button
        onClick={onClick}
        disabled={currentSlide === slideCount - 1}
        style={{
          right: 10,
          zIndex: 1,
          fontSize: 30,
          cursor: currentSlide === slideCount - 1 ? "not-allowed" : "pointer",
          color: currentSlide === slideCount - 1 ? "#ccc" : "#7c3aed",
          background: "transparent",
          border: "none",
          position: "absolute",
          top: "45%",
        }}
        aria-label="Next Slide"
      >
        ►
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick, currentSlide } = props;
    return (
      <button
        onClick={onClick}
        disabled={currentSlide === 0}
        style={{
          left: 10,
          zIndex: 1,
          fontSize: 30,
          cursor: currentSlide === 0 ? "not-allowed" : "pointer",
          color: currentSlide === 0 ? "#ccc" : "#7c3aed",
          background: "transparent",
          border: "none",
          position: "absolute",
          top: "45%",
        }}
        aria-label="Previous Slide"
      >
        ◄
      </button>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
      <div className="max-w-4xl w-full relative">
        <h1
          className="text-4xl font-bold mb-8 text-left
                     bg-gradient-to-r from-purple-600 via-pink-500 to-red-500
                     bg-clip-text text-transparent
                     cursor-pointer
                     hover:underline hover:underline-offset-4 hover:decoration-pink-400
                     transition-all duration-300 ease-in-out"
        >
          Notable Projects
        </h1>
        <Slider {...settings}>
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-8 mx-4 hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
                {project.title}
              </h2>
              <p className="text-sm text-gray-500 mb-1">{project.date}</p>
              <p className="text-sm font-medium text-indigo-600 mb-3">
                Technologies: {project.technologies}
              </p>
              <p className="text-sm font-medium text-indigo-600 mb-5">
                Domain: {project.domain}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
