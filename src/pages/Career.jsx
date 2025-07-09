import React from "react";
import { Link } from "react-router-dom";



const companyList = [
  {
    name: "Capital One",
    path: "/career/capitalone",
    color: "bg-purple-600",
  },
  {
    name: "Acmegrade",
    path: "/career/acmegrade",
    color: "bg-indigo-500",
  },
  {
    name: "TCS",
    path: "/career/tcs",
    color: "bg-pink-500",
  },
];

export default function Career() {
  return (
    <div className="min-h-screen bg-purple-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading aligned left */}
        <h1
          className="text-4xl font-bold text-purple-800 mb-10 transition duration-300 ease-in-out transform hover:scale-105 hover:text-purple-600 text-left"
        >
          Career Experience
        </h1>

        <div className="flex flex-col gap-10">
          {companyList.map((company, index) => (
            <Link
              to={company.path}
              key={index}
              className={`
                flex items-center justify-center px-10 py-6 rounded-full shadow-md text-white transition
                transform hover:scale-105 hover:shadow-2xl ${company.color}
              `}
              style={{ maxWidth: "600px" }}
            >
              <div className="text-center">
                <h2 className="text-2xl font-semibold">{company.name}</h2>
                <p className="mt-1">View detailed experience at {company.name} →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
