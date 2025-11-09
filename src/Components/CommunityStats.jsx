import React from "react";

const stats = [
  { title: "Meals Shared", value: 1250 },
  { title: "Active Donators", value: 320 },
  { title: "Communities Helped", value: 18 },
  { title: "Food Saved (kg)", value: 950 },
];

const CommunityStats = () => {
  return (
    <section className="py-16 bg-primary text-white px-5">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Community Impact</h2>
        <p className="text-gray-100 max-w-2xl mx-auto">
          PlateShare is dedicated to reducing food waste and helping those in need. See our latest stats!
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <p className="text-4xl font-bold">{stat.value}</p>
            <p className="text-lg mt-2">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityStats;
