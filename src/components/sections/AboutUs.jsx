import React from 'react';

const aboutUsDetails = [
  'Fresh and Tasty food',
  'Quality support',
  'Order from any location',
];
const AboutUs = () => {
  return (
    <section className="my-10 md:my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-x-10 ">
        <div className="flex justify-center">
          <img
            src="images/location.png"
            className="w-5/6 md:w-auto object-contain"
            alt="about us "
          />
        </div>
        <div className="flex items-center xs:items-start text-center xs:text-left flex-col gap-5 sm:gap-5 mt-5 xs:mt-10">
          <h2 className="font-RocknRoll text-left text-3xl ">
            Why{' '}
            <span className="inline-block text-secondary hover:scale-110 hover:-rotate-2 transition-all">
              Foodie?
            </span>
          </h2>
          <p className="font-lato text-[#777777] line-clamp-4">
            The food delivery service of us ensures high-quality and timely
            delivery of fresh and delicious food to customers' doorsteps.Fast
            and easy food delivery service to spoil the foodie within you.
          </p>
          <div className="space-y-5">
            {aboutUsDetails.map(title => (
              <div
                className="flex flex-col items-center xs:items-start child:flex child:items-center text-[#212529] font-lato child:gap-2 gap-3"
                key={title}
              >
                <span className="font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-secondary w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  {title}
                </span>
                <p className="text-[#777777] line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur, sunt!
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
