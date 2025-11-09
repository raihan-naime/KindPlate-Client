import React from "react";
import { FaUpload, FaSearch, FaHandsHelping } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50 px-5">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Sharing food has never been easier! Follow these 3 simple steps to
          help your community and reduce food waste.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <div className="text-5xl text-primary mb-4">
            <FaUpload />
          </div>
          <h3 className="text-xl font-semibold mb-2">Post Food</h3>
          <p className="text-gray-600">
            Upload details of your extra meals and make them available for
            your community.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <div className="text-5xl text-primary mb-4">
            <FaSearch />
          </div>
          <h3 className="text-xl font-semibold mb-2">Find Food</h3>
          <p className="text-gray-600">
            Browse through available foods near you and select the meals you
            want.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <div className="text-5xl text-primary mb-4">
            <FaHandsHelping />
          </div>
          <h3 className="text-xl font-semibold mb-2">Collect Food</h3>
          <p className="text-gray-600">
            Safely pick up your selected meals and enjoy them while helping
            your community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
