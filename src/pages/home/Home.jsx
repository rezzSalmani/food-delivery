import React, { useRef, useState } from 'react';
import Hero from '../../components/sections/Hero';
import Category from '../../components/sections/Category';
import Services from '../../components/sections/Services';
import PopularFoods from '../../components/sections/PopularFoods';
import AboutUs from '../../components/sections/AboutUs';
import HotPizza from '../../components/sections/HotPizza';
import Comments from '../../components/sections/Comments';
const Home = () => {
  const popularFoodsRef = useRef(null);
  const [initCategory, setInitCategory] = useState('ALL');
  const scrollToPopularFoods = () => {
    popularFoodsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleCategoryClick = category => {
    setInitCategory(category);
    scrollToPopularFoods();
  };
  return (
    <section className="container">
      <Hero onOrderNowClick={scrollToPopularFoods} />
      <Category onCategoryClick={handleCategoryClick} />
      <Services />
      <PopularFoods
        ref={popularFoodsRef}
        init={initCategory}
        key={initCategory}
      />
      <AboutUs />
      <HotPizza />
      <Comments />
    </section>
  );
};

export default Home;
