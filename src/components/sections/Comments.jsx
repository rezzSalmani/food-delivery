import React from 'react';
import CommentsSlider from '../UI/CommentsSlider';
const Comments = () => {
  return (
    <section className="my-10 md:my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {/* first div */}
        <div className="flex flex-col justify-center gap-5 order-last md:order-none">
          <h5 className="text-secondary font-RocknRoll text-base sm:text-xl">
            Testimonial
          </h5>
          <h2 className="font-RocknRoll text-2xl sm:text-3xl ">
            What our{' '}
            <span className="inline-block scale-105 transition-all text-secondary">
              customers
            </span>{' '}
            are saying
          </h2>
          <p className="font-lato text-sm sm:text-base text-[#777777] line-clamp-4">
            Discover the voices of our valued customers and hear what they have
            to say about their experience with us.
          </p>
          <CommentsSlider />
        </div>
        {/* seconde div */}
        <div className="flex justify-center ">
          <img
            src="images/network.png"
            className="object-contain w-5/6 md:w-auto"
            alt="about us"
          />
        </div>
      </div>
    </section>
  );
};

export default Comments;
