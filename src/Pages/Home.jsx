import React from 'react';
import Banner from '../Components/Banner';
import FeaturedFoods from '../Components/FeaturedFoods';
import { useLoaderData } from 'react-router';
import HowItWorks from '../Components/HowItWorks';
import OurMission from '../Components/OurMission';

const Home = () => {
    const featuredFoods = useLoaderData();
    // console.log(allFoods);
    
    return (
        <div>
            <Banner></Banner>
            <FeaturedFoods featuredFoods={featuredFoods}></FeaturedFoods>
            <HowItWorks></HowItWorks>
          
            <OurMission></OurMission>
        </div>
    );
};

export default Home;