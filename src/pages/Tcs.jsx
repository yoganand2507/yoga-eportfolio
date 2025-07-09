// Tcs.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Tcs() {
  const responsibilities = [
    "Analyzed and transformed operational and financial data using Python (Pandas, NumPy) and SQL, supporting high-visibility reporting across multiple client accounts in the healthcare and manufacturing sectors.",
    "Designed and maintained automated Tableau dashboards for business stakeholders, enabling real-time monitoring of KPIs such as cost efficiency, SLA performance, and resource utilization.",
    "Developed end-to-end ETL workflows to process daily and weekly data extracts, ensuring accurate, timely delivery of performance metrics to clients and internal leadership.",
    "Collaborated with cross-functional teams—including project managers, business analysts, and data engineers—to deliver insights that informed strategic decisions and process optimizations.",
    "Conducted data quality checks, anomaly detection, and reconciliation to resolve discrepancies across multiple systems (Excel, SQL Server, Redshift), maintaining trust in data used for billing and reporting.",
    "Automated recurring Excel and PowerPoint reporting processes using Python, cutting manual reporting time by 50% and reducing human error.",
    "Supported client-facing analytics workstreams by building custom SQL queries and dashboards, enabling data-driven discussions during quarterly business reviews and executive reporting.",
    "Participated in Agile sprint cycles and contributed to backlog refinement, consistently meeting reporting deadlines and supporting analytics delivery across multiple ongoing projects."
  ];

  const environment = [
    "Python (Pandas, NumPy, Matplotlib)",
    "SQL (MySQL, PostgreSQL)",
    "Tableau, Microsoft Excel",
    "Jupyter Notebooks",
    "Data Cleaning, Statistical Modeling",
    "Data Visualization, Research Writing",
    "Cross-Functional Collaboration, Healthcare Data Standards"
  ];

  return (
    <div className="min-h-screen bg-purple-100 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-purple-800 mb-2 hover:text-purple-600 transition duration-300 text-left">
          Tata Consultancy Services (TCS) | Pune, India
        </h1>
        <h2 className="text-xl font-semibold text-purple-700 mb-6 text-left">
          Data Analyst | Mar 2020 – Oct 2021
        </h2>

        {/* Responsibilities Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 hover:scale-105 hover:bg-purple-50 transition-transform duration-300">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">Responsibilities</h3>
          <ul className="list-none space-y-3">
            {responsibilities.map((item, index) => (
              <li key={index} className="text-gray-700">
                <span className="inline-block text-purple-600 font-bold mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Environment Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 hover:bg-purple-50 transition-transform duration-300">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">Environment</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {environment.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Back Button Only */}
        <div className="flex justify-start mt-12">
          <Link
            to="/career/acmegrade"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
