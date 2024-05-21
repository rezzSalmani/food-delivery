import React from 'react';
import Slider from 'react-slick';

const usersComments = [
  {
    name: 'John Doe',
    img: 'images/ava-1.jpg',
    comment: ` "I absolutely love the convenience of online food delivery! It saves
  me so much time and effort. The wide variety of restaurants and
  cuisines available at my fingertips is amazing. Plus, the delivery
  service is always prompt and the food arrives hot and fresh. It's a
  game-changer for those busy days when cooking is just not an option!"`,
  },
  {
    name: 'Jack Anderson',
    img: 'images/ava-2.jpg',
    comment: `"I rely on online food delivery for most of my meals, and it never
  disappoints! The user-friendly platforms make it effortless to browse
  through a vast selection of restaurants and dishes. I appreciate the
  detailed descriptions and mouthwatering food photos that help me make
  the perfect choice. The delivery drivers are always courteous, and my
  orders arrive on time, making it a reliable and satisfying experience
  every time."`,
  },
  {
    name: 'Lois walt',
    img: 'images/ava-3.jpg',
    comment: `"Online food delivery has completely transformed my dining experience.
  I can explore a multitude of restaurant menus, read reviews, and make
  an informed choice without leaving my home. The seamless ordering
  process and real-time updates on the delivery status make it
  incredibly convenient. Whether I'm craving comfort food or gourmet
  cuisine, online food delivery ensures I can enjoy a delicious meal
  without any hassle"`,
  },
  {
    name: 'Madison karon',
    img: 'images/ava-4.jpg',
    comment: `"I rely on online food delivery for most of my meals, and it never
  disappoints! The user-friendly platforms make it effortless to browse
  through a vast selection of restaurants and dishes. I appreciate the
  detailed descriptions and mouthwatering food photos that help me make
  the perfect choice. The delivery drivers are always courteous, and my
  orders arrive on time, making it a reliable and satisfying experience
  every time."`,
  },
];
const CommentsSlider = () => {
  const settings = {
    dots: true,
    autoPlay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider arrows={false} {...settings}>
      {usersComments.map(comment => (
        <div className="space-y-4" key={comment.name}>
          <p className="font-lato text-[#777777] text-xs md:text-base line-clamp-3 md:line-clamp-5">
            {comment.comment}
          </p>
          <div className="flex  items-center text-base gap-3 font-semibold">
            <img className="w-12" src={comment.img} alt="avatar" />
            <span>{comment.name}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CommentsSlider;
