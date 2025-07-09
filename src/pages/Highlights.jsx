import React from "react";



const highlightsData = [
  {
    id: 1,
    title: "ETL Pipelines & Data Engineering",
    points: [
      "Designed and maintained production-grade ETL pipelines using AWS Glue, Lambda, and Redshift across domains including finance, EdTech, and enterprise services — improving data reliability and reducing manual intervention.",
      "Engineered and optimized data workflows and feature datasets using PySpark, SQL, and Python, enabling scalable machine learning, real-time reporting, and executive decision-making.",
      "Implemented cloud-native data architecture in AWS and Snowflake, leveraging S3, Redshift, Glue, and Lambda for scalable and cost-efficient analytics and storage solutions.",
      "Automated reporting pipelines and repetitive analytics tasks using Python and SQL, cutting manual work by up to 50% while improving data accuracy and refresh speed.",
    ],
    image: "https://img.icons8.com/ios-filled/50/6B46C1/cloud.png", // purple icon
    bgColor: "bg-purple-100",
    textColor: "text-purple-900",
  },
  {
    id: 2,
    title: "Analytics, Dashboards & Reporting",
    points: [
      "Built and deployed interactive dashboards in Tableau and Power BI to track KPIs across customer behavior, engagement metrics, operational efficiency, and SLA adherence for internal and client-facing use cases.",
      "Led and supported data validation, anomaly detection, and root cause analysis to ensure data integrity across ingestion, transformation, and consumption layers.",
      "Developed internal utilities and documented data lineage, schemas, and transformation logic to support reproducibility, compliance, and onboarding efforts.",
    ],
    image: "https://img.icons8.com/ios-filled/50/6B46C1/combo-chart--v1.png",
    bgColor: "bg-purple-50",
    textColor: "text-purple-900",
  },
  {
    id: 3,
    title: "Collaboration & Data Science Support",
    points: [
      "Collaborated cross-functionally with stakeholders, data scientists, product teams, and engineers in Agile environments to deliver high-impact data solutions aligned with business goals.",
      "Conducted cohort analysis, segmentation, and A/B testing to generate insights on user engagement, retention strategies, and operational improvements.",
    ],
    image: "https://img.icons8.com/ios-filled/50/6B46C1/conference-call.png",
    bgColor: "bg-purple-50",
    textColor: "text-purple-900",
  },
];

const Highlights = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start p-8">
      {/* Outer big card with light purple background */}
      <div className="bg-purple-100 rounded-xl p-10 max-w-4xl w-full shadow-md">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-8 border-b-4 border-purple-300 pb-3 max-w-max text-purple-900">
          Experience Highlights
        </h1>

        {/* Inner cards container stacked vertically */}
        <div className="flex flex-col gap-8">
          {highlightsData.map(({ id, title, points, image, bgColor, textColor }) => (
            <div
              key={id}
              className={`${bgColor} ${textColor} flex flex-col rounded-lg p-6 shadow-md
                transform transition-all duration-300
                hover:scale-105 hover:shadow-2xl
                hover:bg-purple-200 cursor-pointer`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={image} alt={title} className="w-12 h-12" />
                <h3 className="text-2xl font-semibold">{title}</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                {points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
