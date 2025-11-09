import React from "react";
import FeaturedFoodCard from "./FeaturedFoodCard";

const FeaturedFoods = ({ featuredFoods }) => {
  // useEffect(()=>{
  //     fetch('http://localhost:3000/allfoods')
  //     .then(res => res.json)
  //     .then(data => console.log(data)
  //     )
  // }, [])
  // console.log(allFoods);

  return (
    <div>
      <h2 className="text-3xl text-center my-5 font-bold text-blue-700">
        Featured Foods
      </h2>
      <div className="grid gap-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featuredFoods.map((food) => (
          <FeaturedFoodCard key={food._id} food={food}></FeaturedFoodCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedFoods;
