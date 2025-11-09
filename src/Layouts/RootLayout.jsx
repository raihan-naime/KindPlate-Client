import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='min-h-[80vh]'>
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;