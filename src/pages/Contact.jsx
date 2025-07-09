import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-700">
        Contact Me
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Email Card */}
        <div className="bg-white rounded-lg shadow-md p-5 flex items-start space-x-4 hover:shadow-lg transition-shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-blue-600 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8"
            />
          </svg>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Email</h3>
            <a
              href="mailto:yogal2507@gmail.com"
              className="text-sm text-blue-600 hover:underline break-all"
            >
              yogal2507@gmail.com
            </a>
          </div>
        </div>

        {/* Phone Card */}
        <div className="bg-white rounded-lg shadow-md p-5 flex items-start space-x-4 hover:shadow-lg transition-shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-600 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3a2 2 0 012 2v2a2 2 0 01-2 2H5v2h2a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 17h5v-3a2 2 0 00-2-2h-3v5z"
            />
          </svg>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
            <a
              href="tel:+18728029154"
              className="text-sm text-green-600 hover:underline"
            >
              +1 872-802-9154
            </a>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="bg-white rounded-lg shadow-md p-5 flex items-start space-x-4 hover:shadow-lg transition-shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-blue-800 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5v-10h3v10zm-1.5-11.27c-.97 0-1.75-.78-1.75-1.75S5.53 4.23 6.5 4.23s1.75.78 1.75 1.75-.78 1.75-1.75 1.75zM20 19h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96V19h-3v-10h2.88v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19z" />
          </svg>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/yoganandlankapalli/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-800 hover:underline break-all"
            >
              linkedin.com/in/yoganandlankapalli
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
