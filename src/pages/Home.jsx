import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/profile.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <main className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10 gap-10 flex-grow">
        {/* Left: Text Content */}
        <section className="w-full lg:w-3/5 text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 mb-6 leading-tight">
            Hello, I’m Yoganand — a little about me
          </h2>
          <div className="text-gray-600 space-y-4 text-xs sm:text-sm leading-relaxed">
            <p>
              I am a highly motivated data engineer and data analyst with a passion for transforming raw, complex data into meaningful insights that drive strategic business outcomes. With hands-on experience in designing and deploying scalable data pipelines, I specialize in leveraging modern cloud technologies such as AWS Glue, Lambda, Redshift, and S3, combined with Python, PySpark, and SQL to build end-to-end data solutions. My ability to automate data workflows, ensure data quality, and support advanced analytics has consistently contributed to improved operational efficiency and data-driven decision-making across industries including finance, healthcare, and EdTech.
            </p>
            <p>
              I thrive in collaborative, cross-functional environments where I work closely with data scientists, product managers, and business stakeholders to solve high-impact problems. My strong focus on innovation, automation, and continuous learning allows me to stay current with emerging tools and best practices in the data ecosystem. I take pride in building robust, reliable data systems that support real-time reporting, predictive modeling, and compliance requirements. Through this portfolio, I aim to showcase how my technical expertise and problem-solving mindset can help organizations unlock the full potential of their data as a data engineer and data analyst.
            </p>
          </div>
        </section>

        {/* Right: Profile Image */}
        <section className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg cursor-pointer shrink-0">
          <img
            src={profileImg}
            alt="Profile"
            className="object-cover w-full h-full transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </section>
      </main>
    </div>
  );
}
