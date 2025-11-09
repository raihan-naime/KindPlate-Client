import React from 'react';
import Banner from '../Components/Banner';
import FeaturedFoods from '../Components/FeaturedFoods';
import { useLoaderData } from 'react-router';
import HowItWorks from '../Components/HowItWorks';
import CommunityStats from '../Components/CommunityStats';

const Home = () => {
    const featuredFoods = useLoaderData();
    // console.log(allFoods);
    
    return (
        <div>
            <Banner></Banner>
            <FeaturedFoods featuredFoods={featuredFoods}></FeaturedFoods>
            <HowItWorks></HowItWorks>
            <CommunityStats></CommunityStats>
        </div>
    );
};

export default Home;