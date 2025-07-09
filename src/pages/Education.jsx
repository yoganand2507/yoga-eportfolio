import React from "react";
import GraduationImage from "../assets/Graduation.png"; // Make sure the path is correct



const educationData = [
  {
    school: "DePaul University, Chicago",
    degree: "Master of Science in Data Science",
    gpa: "3.63 / 4.0",
    imgSrc: GraduationImage,
    bgColor: "bg-purple-100",
  },
  {
    school: "Manipal Institute of Technology, Karnataka",
    degree: "Bachelor of Technology in Mechatronics Engineering",
    gpa: "7.56",
    imgSrc: "", // You can add another image here later
    bgColor: "bg-pink-100",
  },
];

export default function Education() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex justify-center items-start">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold text-left text-purple-800 mb-10 hover:text-purple-600 transition duration-300">
          Education
        </h1>

        <div className="flex flex-col gap-10">
          {educationData.map(({ school, degree, gpa, imgSrc, bgColor }, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-6 p-6 ${bgColor} rounded-full shadow-xl hover:scale-105 transform transition-transform duration-300`}
            >
              {imgSrc ? (
                <img
                  src={imgSrc}
                  alt={`${school} logo`}
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm">
                  No Image
                </div>
              )}

              <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-purple-900">{school}</h2>
                <p className="text-purple-800">{degree}</p>
                <p className="text-purple-700 font-medium mt-1">GPA: {gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
