import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import Loader from "../Components/Loader";


const RootLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation);

  return (
    <div className="max-w-11/12 mx-auto">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-[80vh]">
        {navigation.state === "loading" && (
          // <div className="fixed inset-0 bg-black/20 flex justify-center items-center z-50">
          //   <span className="loading loading-spinner loading-lg text-primary"></span>
          // </div>
          <div className="h-[70vh] flex justify-center items-center">
                  <Loader></Loader>
                </div>
          
        )}
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default RootLayout;
