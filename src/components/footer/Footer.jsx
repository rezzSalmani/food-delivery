import React from 'react';
const Footer = () => {
  return (
    <footer className="mt-10 md:mt-20 bg-third">
      <div className="container flex justify-center items-center flex-wrap lg:flex-nowrap md:justify-between py-5 sm:py-10 lg:px-10 gap-5 sm:gap-10 xs:child:w-1/4 child:md:w-auto">
        <div className=" space-y-2 sm:space-y-4">
          <a className="flex flex-col items-center hover:scale-110 transition-all cursor-pointer">
            <img
              className="w-8 h-8 md:w-[50px] md:h-[50px]"
              src="/images/res-logo.png"
              alt="Foodie logo"
            />
            <h5 className="font-RocknRoll text-[#212529] leading-5 font-semibold">
              Foodie
            </h5>
          </a>
          <p className="text-center font-semibold text-[#333333] text-xs md:text-base max-w-44 sm:max-w-52">
            Fast and easy food delivery service to spoil the foodie within you.
          </p>
        </div>
        {/* delivery time */}
        <div className="flex flex-col gap-1 sm:gap-2 text-primary text-center w-[130px] xs:w-auto">
          <h5 className="font-RocknRoll font-semibold text-sm md:text-lg ">
            Delivery Time
          </h5>
          <div className="flex flex-col font-lato child:inline-block text-xs md:text-base">
            <span>Monday - Thursday</span>
            <span>10:00am - 9:00pm</span>
          </div>
          <div className="flex flex-col font-lato child:inline-block text-xs md:text-base">
            <span>Friday - Sunday</span>
            <span>11:00am - 11:00pm</span>
          </div>
        </div>
        {/* Contact */}
        <div className="flex flex-col h-full space-y-3 text-primary text-center ">
          <h5 className="font-RocknRoll font-semibold text-sm md:text-lg">
            Contact Us
          </h5>
          <div className="font-lato flex flex-col sx:gap-y-2 child:inline-block child:font-medium child:text-xs child:md:text-base w-[155px] xs:w-auto">
            <span>Location: 123 Olympiakatu, Espoo,FI</span>
            <span>Hotline: +358 412 345 023</span>
            <span>Email: contact@foodie.com</span>
          </div>
        </div>
        {/* Newsletter */}
        <div className=" text-primary font space-y-3 text-center">
          <h5 className="font-RocknRoll font-semibold text-sm md:text-lg ">
            News letters
          </h5>
          <span className="inline-block font-lato text-xs sm:text-sm font-semibold">
            Subcribe our newsletter
          </span>
          <div className="flex items-center border border-primary py-1 rounded-lg px-1 sm:px-2 max-w-36 sm:max-w-44 md:max-w-[255px]">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full h-full outline-none bg-transparent text-xs sm:text-sm "
            />
            <span className="px-2 md:px-3 py-2 bg-secondary text-zinc-100 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 sm:w-5 h-3 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <p className="container text-center text-secondary text-sm">
        &copy; - 2024, made by Reza Salmani
      </p>
    </footer>
  );
};

export default Footer;
