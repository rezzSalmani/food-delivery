import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer.jsx';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { Slide, ToastContainer } from 'react-toastify';
const Layout = () => {
  return (
    <>
      <div className="relative">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <ToastContainer transition={Slide} />
      </div>
    </>
  );
};

export default Layout;
