import React from 'react';
const allServices = [
  {
    title: 'Quick Delivery',
    image: 'images/service-01.png',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora saepe!',
  },
  {
    title: 'Super Dine In',
    image: 'images/service-02.png',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora saepe!',
  },
  {
    title: 'Best Quality',
    image: 'images/service-03.png',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora saepe!',
  },
];
const Services = () => {
  return (
    <section className="Services my-10 md:my-20 flex flex-col">
      {/* text features */}
      <div className=" flex-all flex-col gap-5 w-full font-RocknRoll text-center px-5">
        <h5 className="text-xl text-secondary">What we serve</h5>
        <h2 className="text-2xl  sm:text-4xl max-w-[30rem] ">
          Just sit back at home we will{' '}
          <span className="text-secondary">take care</span>
        </h2>
        <p className="font-lato text-sm sm:text-base text-[#777777] max-w-[35rem] md:mt-5">
          The food delivery service of us ensures high-quality and timely
          delivery of fresh and delicious food to customers' doorsteps.
        </p>
      </div>
      {/* features */}
      <div className="flex items-center justify-center flex-wrap gap-y-10 gap-3 md:gap-5 my-10  ">
        {allServices.map(item => (
          <div className="flex-all flex-col gap-5 text-center" key={item.title}>
            <img className="w-20" src={item.image} alt="Food" />
            <h5 className="font-RocknRoll text-base xs:text-xl font-bold text-[#212529]">
              {item.title}
            </h5>
            <p className="text-[#777777] text-sm xs:text-base max-w-64 md:max-w-72 line-clamp-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
