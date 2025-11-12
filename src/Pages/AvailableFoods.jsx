import React from 'react';
import { useLoaderData } from 'react-router';
import FeaturedFoodCard from '../Components/FeaturedFoodCard';

const AvailableFoods = () => {
    const allFoods = useLoaderData();
    // console.log(allFoods);
    
    return (
        <div>
      <h2 className="text-3xl text-center my-5 font-bold text-[#3E3F29]">
        Featured Foods
      </h2>
      <div className="grid gap-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allFoods.map((food) => (
          <FeaturedFoodCard key={food._id} food={food}></FeaturedFoodCard>
        ))}
      </div>
    </div>
    );
};

export default AvailableFoods;