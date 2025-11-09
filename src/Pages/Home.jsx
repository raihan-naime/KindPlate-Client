import React from 'react';
import Banner from '../Components/Banner';
import FeaturedFoods from '../Components/FeaturedFoods';
import { useLoaderData } from 'react-router';

const Home = () => {
    const featuredFoods = useLoaderData();
    // console.log(allFoods);
    
    return (
        <div>
            <Banner></Banner>
            <FeaturedFoods featuredFoods={featuredFoods}></FeaturedFoods>
        </div>
    );
};

export default Home;