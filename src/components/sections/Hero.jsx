import React from 'react';
import { Link } from 'react-router-dom';
const Hero = ({ onOrderNowClick }) => {
  return (
    <section className="Hero sm:my-10">
      <div className="flex flex-col md:flex-row items-center lg:items-start gap-y-5">
        {/* text Content */}
        <div className="flex flex-col gap-5 md:mt-10 basis-1/2 text-center md:text-left">
          <h5 className="text-base sm:text-xl font-RocknRoll text-[#212529]">
            Fast and easy food delivery service to spoil the foodie within you
          </h5>
          <h1 className="text-3xl leading-10 lg:text-[40px] xs:leading-[55px] font-RocknRoll text-[#212245] md:max-w-[30rem]">
            <span className="inline-block text-secondary transition-all scale-110 -rotate-2">
              HUNGRY?
            </span>{' '}
            just wait food at
            <span className="text-secondary"> your door!</span>
          </h1>
          <p className="font-lato text-sm xs:text-base text-[#777777]">
            The food delivery service of us ensures high-quality and timely
            delivery of fresh and delicious food to customers' doorsteps.
          </p>
          {/* buttons */}
          <div className="flex items-center gap-10 justify-center md:justify-start text-sm xs:text-base">
            <button
              className="flex items-center justify-center py-2 px-2 xs:px-5 bg-secondary text-zinc-100 rounded-md font-lato hover:bg-primary duration-200 transition-all ease-in"
              onClick={onOrderNowClick}
            >
              Order Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <Link
              to="foods"
              className="border border-secondary rounded-md py-2 px-2 xs:px-5 font-lato text-secondary hover:bg-secondary hover:text-zinc-100 transition-all ease-in"
            >
              See all foods
            </Link>
          </div>
          {/* logos */}
          <div className="flex items-center gap-4 xs:gap-14 mt-5 justify-center md:justify-start text-xs xs:text-sm">
            <div className="flex items-center font-sans gap-2 font-medium ">
              <span className="bg-secondary w-6 h-6 rounded-full text-white flex-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                  />
                </svg>
              </span>
              <p>Free Delivery</p>
            </div>
            <div className="flex items-center font-sans gap-2 font-medium ">
              <span className="bg-secondary w-6 h-6 rounded-full text-white flex-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
              </span>
              <p>100% secure checkout</p>
            </div>
          </div>
        </div>
        {/* picture content */}
        <div className="flex justify-center items-center w-4/5 md:w-full md:h-full basis-1/2">
          <img
            className="object-contain flex basis-1/2"
            src="/images/hero.png"
            alt="Hero Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
