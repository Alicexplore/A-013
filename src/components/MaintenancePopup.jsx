import { useState } from "react";

const MaintenancePopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-9/12 md:w-11/12 max-w-md rounded-md shadow-lg relative p-6">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition transform duration-500"
          onClick={() => setIsVisible(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
          A-013 is being improved
        </h2>
        <p className="text-gray-600 text-sm md:text-lg">
          I am currently working on improvements to give you a better experience, you might face some bugs. 
        </p>
        <p className="text-gray-600 mt-2 text-md md:text-lg">
          Thank you for your understanding.
        </p>
      </div>
    </div>
  );
};

export default MaintenancePopup;
