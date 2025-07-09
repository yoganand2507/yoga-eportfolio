import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "SQL", "JavaScript"],
    bgColor: "bg-yellow-200",
    textColor: "text-yellow-900",
  },
  {
    category: "Data Engineering",
    skills: ["AWS Glue", "Redshift", "Lambda", "S3", "Docker"],
    bgColor: "bg-green-200",
    textColor: "text-green-900",
  },
  {
    category: "Analytics & BI",
    skills: ["Tableau", "Power BI", "Jupyter", "A/B Testing"],
    bgColor: "bg-blue-200",
    textColor: "text-blue-900",
  },
  {
    category: "Data Science & ML",
    skills: ["Pandas", "NumPy", "Scikit-learn", "PySpark"],
    bgColor: "bg-purple-200",
    textColor: "text-purple-900",
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "GitHub Actions", "CloudWatch", "VS Code"],
    bgColor: "bg-pink-200",
    textColor: "text-pink-900",
  },
];

function SampleNextArrow(props) {
  const { onClick, currentSlide, slideCount } = props;
  return (
    <button
      onClick={onClick}
      disabled={currentSlide === slideCount - 1}
      className={`absolute top-1/2 -right-6 transform -translate-y-1/2 text-3xl ${
        currentSlide === slideCount - 1 ? "text-gray-300 cursor-not-allowed" : "text-indigo-600 cursor-pointer"
      } bg-transparent border-none`}
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
      className={`absolute top-1/2 -left-6 transform -translate-y-1/2 text-3xl ${
        currentSlide === 0 ? "text-gray-300 cursor-not-allowed" : "text-indigo-600 cursor-pointer"
      } bg-transparent border-none`}
      aria-label="Previous Slide"
    >
      ◄
    </button>
  );
}

export default function Skills() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start p-10">
      <div className="max-w-3xl w-full">
        {/* Heading */}
        <h1
          className="text-4xl font-extrabold text-indigo-800 mb-10 text-left cursor-pointer transition-colors duration-300 hover:text-indigo-500 select-none"
        >
          Skills
        </h1>

        {/* Carousel */}
        <Slider {...settings}>
          {skillsData.map(({ category, skills, bgColor, textColor }, idx) => (
            <div key={idx} className="p-4">
              <div
                className={`${bgColor} ${textColor} rounded-lg p-8 shadow-lg hover:scale-105 transition-transform duration-300`}
              >
                <h2 className="text-2xl font-bold mb-6">{category}</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  {skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
