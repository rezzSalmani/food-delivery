import React from 'react';
import Common from '../../components/UI/Common';
const Contact = () => {
  return (
    <section>
      <Common title="Stay in touch" />
      <div className="grid grid-cols-1 sm:grid-cols-2 my-20 h-full lg:px-40">
        <div className="flex justify-center max-h-[384px]">
          <img
            src="/images/network.png"
            alt="newWork"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex flex-col sm:items-start text-center sm:text-left  text-primary font-RocknRoll gap-8 ">
          <div className="space-y-2">
            <h4 className="text-sm xs:text-xl">
              Wanna chat with customer service?
            </h4>
            <div className="text-xs xs:text-base ">
              <p className="">Call 1-800-992-3773</p>
              <p className="">Monday-Friday: 8am-5pm CST</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm xs:text-xl">Wanna rate our services?</p>
            <a className="text-xs  xs:text-base inline-block text-secondary cursor-pointer">
              Click Here
            </a>
          </div>
          <div className="flex-all">
            <span className="text-red-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 md:w-20 md:h-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
