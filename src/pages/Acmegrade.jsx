// Acmegrade.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Acmegrade() {
  const responsibilities = [
    "Conducted comprehensive data analysis on user engagement trends using SQL and Python to identify behavioral bottlenecks impacting course completion and module abandonment.",
    "Analyzed user interaction logs and clickstream data to uncover drop-off points in the learning journey, supporting curriculum redesign efforts.",
    "Built and deployed churn prediction models using machine learning algorithms (Logistic Regression, Random Forest), enabling data-driven retention strategies that improved course completion rates by 15%.",
    "Developed automated Python scripts to streamline the content review and publishing process, reducing manual workload by 40% and accelerating release cycles.",
    "Designed and maintained interactive dashboards in Power BI and Tableau for real-time monitoring of key performance indicators including enrollments, quiz results, attendance, and engagement scores.",
    "Implemented SQL-based cohort analysis to evaluate user behavior across different demographics, time zones, and course formats.",
    "Created and optimized ETL pipelines using AWS Glue, orchestrating automated ingestion, transformation, and loading of user activity data into Amazon Redshift for analytics.",
    "Leveraged AWS S3 for cost-effective storage of raw event data, enabling historical trend analysis and longitudinal reporting.",
    "Set up AWS Lambda functions to automate real-time data processing, trigger alerts for low engagement, and improve system responsiveness.",
    "Conducted segmentation analysis and built behavioral profiles using clustering techniques in Python to support personalized course recommendations.",
    "Performed A/B testing on onboarding content and learning module formats, driving a 9% increase in early-course engagement.",
    "Developed anomaly detection scripts to flag inconsistencies in quiz completions, video watch rates, and sudden user drop-offs.",
    "Supported data governance by maintaining clean schemas, defining data dictionaries, and ensuring accurate field mapping for reporting tools.",
    "Collaborated with curriculum designers and product managers to translate analytical insights into product enhancements and course optimizations.",
    "Conducted data validation and reconciliation across MySQL, Redshift, and BI layers to ensure consistency and eliminate reporting discrepancies.",
    "Contributed monthly executive reports by delivering actionable insights, highlighting trends in learner performance, and recommending platform improvements.",
    "Mentored junior analysts on dashboard creation, SQL query optimization, and Python automation scripts, promoting skill development across the analytics team.",
    "Participated in Agile development sprints and sprint retrospectives, ensuring analytics aligned with evolving product roadmap priorities."
  ];

  const environment = [
    "Python (Pandas, NumPy, Scikit-learn)",
    "SQL (MySQL, Redshift)",
    "Tableau, Power BI",
    "AWS (S3, Glue, Lambda, Redshift)",
    "ETL Pipelines, Data Visualization",
    "Jupyter Notebooks, Git",
    "Agile (Scrum), A/B Testing",
    "Predictive Modeling, Data Governance"
  ];

  return (
    <div className="min-h-screen bg-purple-100 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-purple-800 mb-2 hover:text-purple-600 transition duration-300 text-left">
          Acmegrade Private Limited | Bangalore, IN
        </h1>
        <h2 className="text-xl font-semibold text-purple-700 mb-6 text-left">
          Data Analyst | Nov 2021 – Aug 2022
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
            to="/career/capitalone"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition"
          >
            Back
          </Link>
          <Link
            to="/career/tcs"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
