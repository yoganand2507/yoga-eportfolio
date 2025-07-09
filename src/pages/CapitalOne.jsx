// CapitalOne.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function CapitalOne() {
  const responsibilities = [
    "Designed and maintained end-to-end ETL pipelines using AWS Glue, Lambda, and S3, automating data ingestion from internal systems and third-party APIs into Amazon Redshift.",
    "Developed PySpark transformation jobs to clean, join, and aggregate large datasets for fraud risk, customer segmentation, and credit risk use cases.",
    "Collaborated with data scientists to deliver production-ready feature datasets, streamlining data workflows.",
    "Created and enforced data validation rules using SQL and Python to ensure data integrity.",
    "Tuned Redshift performance with optimized distribution styles, sort keys, and partitioning.",
    "Managed schema evolution and data cataloging using AWS Glue.",
    "Implemented monitoring via CloudWatch for pipeline failures and schema mismatches.",
    "Handled data compliance (GDPR, CCPA) with encryption and masking.",
    "Worked with stakeholders in Agile sprints to align data solutions with goals.",
    "Authored internal documentation and maintained data lineage.",
    "Contributed reusable Python utilities for logging and validation in ETL jobs.",
    "Migrated batch pipelines to event-driven using Lambda and SQS.",
    "Used Docker for local ETL script packaging and testing."
  ];

  const environment = [
    "AWS (Glue, Lambda, S3, Redshift, CloudWatch)",
    "Python (PySpark, Pandas)",
    "SQL (Amazon Redshift, Snowflake)",
    "Git, GitHub Actions, Jupyter Notebooks",
    "Agile (Scrum), SQS, Data Catalog (Glue)",
    "Data Validation (PyDeequ), Docker"
  ];

  return (
    <div className="min-h-screen bg-purple-100 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-purple-800 mb-2 hover:text-purple-600 transition duration-300 text-left">
          Capital One | Chicago, IL
        </h1>
        <h2 className="text-xl font-semibold text-purple-700 mb-6 text-left">
          Data Engineer | Oct 2023 – Present
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

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          <Link
            to="/career"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition"
          >
            Back
          </Link>
          <Link
            to="/career/acmegrade"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
