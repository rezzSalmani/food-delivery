import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import { Slide, ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer.jsx';
import { scrollToTop } from '../../util/util.js';
const Layout = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

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
