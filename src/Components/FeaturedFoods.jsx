import React from "react";
import FeaturedFoodCard from "./FeaturedFoodCard";
import { Link } from "react-router";
import { motion } from 'framer-motion';

const FeaturedFoods = ({ featuredFoods }) => {
  // useEffect(()=>{
  //     fetch('https://kind-server-plate.vercel.app/allfoods')
  //     .then(res => res.json)
  //     .then(data => console.log(data)
  //     )
  // }, [])
  // console.log(allFoods);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl text-center my-5 font-bold text-[#3E3F29]"
      >
        <h1>Featured Foods</h1>
      </motion.div>

      <div className="grid gap-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featuredFoods.map((food) => (
          <FeaturedFoodCard key={food._id} food={food}></FeaturedFoodCard>
        ))}
      </div>
      <div className="flex justify-center my-3">
        <Link to="/availableFoods">
          <button className="btn btn-outline text-green-500 px-6">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFoods;
