import React from "react";
import { Handshake, Search, Upload, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Post Food",
    text: "Upload details of your extra meals and make them available for your community.",
    Icon: Upload,
    step: "STEP 1",
  },
  {
    title: "Find Food",
    text: "Browse through available foods near you and select the meals you want.",
    Icon: Search,
    step: "STEP 2",
  },
  {
    title: "Collect Food",
    text: "Safely pick up your selected meals and enjoy them while helping your community.",
    Icon: Handshake,
    step: "STEP 3",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        How It Works
      </h2>
      <p className="text-center mb-4 mx-auto text-gray-500 max-w-200 ">At KindPlate, sharing food is simple and meaningful.. Together, we reduce food waste, support communities, and make a positive impact—one plate at a time.</p>

      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-10">
        {steps.map(({ Icon, title, text, step }, index) => (
          <div
            key={index}
            className="relative w-full h-[350px] rounded-2xl border border-gray-300 overflow-hidden shadow-xl
                       bg-white cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            {/* Background Glow */}
            <div className="absolute w-full h-full p-1 bg-purple-200">
              <div className="w-full h-full rounded-xl rounded-tr-[100px] rounded-br-[40px] bg-gray-50"></div>
            </div>

            {/* Rotating Gradient Circle */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div
                className="w-32 h-32 rounded-full bg-linear-to-tr from-purple-500 to-orange-300 animate-spin"
                style={{ animationDuration: "12s" }}
              ></div>
            </div>

            {/* Foreground Glass Content */}
            <div className="absolute inset-0 z-20 p-3 flex justify-between">
              {/* Left Section */}
              <div className="w-3/5 p-3 flex flex-col rounded-xl backdrop-blur-lg bg-white/40 border border-white/80 shadow-md text-gray-800">
                <Icon className="w-8 h-8 mb-2 text-gray-700" />
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-xs text-gray-600 mt-1">{text}</p>

                <div className="mt-auto pt-3 text-center">
                  <span className="text-xs font-bold text-purple-600">{step}</span>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex flex-col items-end justify-between pt-2 text-gray-600">
                <div className="text-[10px] uppercase leading-[12px] text-right">
                  <p>Food</p>
                  <p>Share</p>
                </div>

                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 backdrop-blur-lg
                             hover:bg-white/80 transition duration-300 shadow-sm"
                >
                  <ArrowRight className="w-5 h-5 text-gray-700" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
