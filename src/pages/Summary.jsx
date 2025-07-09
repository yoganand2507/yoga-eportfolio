import React from "react";

const Summary = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      
      {/* Background wrapper with subtle color */}
      <div className="bg-blue-100 rounded-2xl p-6 shadow-lg max-w-4xl w-full">
        
        <div className="bg-white rounded-xl shadow-md flex flex-col md:flex-row overflow-hidden
                        transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          
          {/* Image Section */}
          <div className="md:w-1/3 flex items-center justify-center bg-blue-50 p-6">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
              alt="Data Engineering"
              className="rounded-lg object-cover w-full h-64 md:h-auto"
            />
          </div>
  
          {/* Content Section */}
          <div className="md:w-2/3 p-8 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center md:text-left">
              Professional Summary
            </h1>
            <p className="text-gray-700 leading-relaxed text-lg">
              Data Engineer / Data Analyst with 4+ years of experience designing scalable data pipelines, automating ETL workflows, and building data-driven solutions across finance, healthcare, and EdTech industries. Proven expertise in multi-cloud environments including AWS (Glue, Lambda, Redshift, S3), Azure, and GCP, leveraging cloud-native services for ingestion, transformation, and storage of high-volume data. Skilled in SQL, Python, Docker, and modern BI tools (Power BI, Tableau) to deliver insights, maintain data quality, and drive business decisions in Agile teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
