import React, { useState, useEffect } from "react";
import { Heart, Users, Leaf, ShoppingCart, Globe } from "lucide-react";

const missions = [
  { title: "Reduce Food Waste", text: "Encourage sharing of surplus food to minimize waste and promote sustainability.", icon: Leaf, color: "bg-green-100 text-green-600" },
  { title: "Help the Community", text: "Connect donors with those in need, ensuring everyone has access to meals.", icon: Users, color: "bg-blue-100 text-blue-600" },
  { title: "Spread Kindness", text: "Promote generosity and community engagement through food sharing.", icon: Heart, color: "bg-pink-100 text-pink-600" },
  { title: "Support Local Businesses", text: "Encourage local food providers to share excess meals and reduce waste.", icon: ShoppingCart, color: "bg-yellow-100 text-yellow-600" },
  { title: "Global Impact", text: "Build a community that inspires global sustainable food sharing.", icon: Globe, color: "bg-purple-100 text-purple-600" },
];

const OurMission = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % missions.length);
    }, 4000); // 4 seconds per card
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-gray-600 mb-12">
          At PlateShare, we believe in creating a sustainable and compassionate community. Here’s how we make a difference:
        </p>

        {/* Carousel */}
        <div className="relative w-full max-w-xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {missions.map(({ title, text, icon: Icon, color }, idx) => (
              <div key={idx} className="min-w-full px-4">
                <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                  <div className={`p-4 rounded-full mb-4 flex items-center justify-center ${color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                  <p className="text-gray-600">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {missions.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                  idx === activeIndex ? "bg-gray-800" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
