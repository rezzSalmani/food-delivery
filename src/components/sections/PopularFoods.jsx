import React, { useEffect, useState, forwardRef } from 'react';
import ProductItem from '../product/ProductItem';
import { useLoaderData } from 'react-router-dom';
import { filterProductByCategory } from '../../util/util';
const CATEGORIES = [
  ['ALL'],
  ['BURGER', '/images/hamburger.png'],
  ['PIZZA', '/images/pizza.png'],
  ['BREAD', '/images/bread.png'],
];
const PopularFoods = ({ init = 'ALL' }, ref) => {
  const foods = useLoaderData();

  const [category, setCategory] = useState(init);
  const [allProducts, setAllProducts] = useState(foods);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleCategory(category);
  }, [category]);

  const handleCategory = async categoryName => {
    setCategory(categoryName);
    setIsLoading(true);
    try {
      if (categoryName === 'ALL') {
        setAllProducts(foods);
      } else {
        const data = await filterProductByCategory(categoryName);
        setAllProducts(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="my-10 md:my-20 flex-all flex-col gap-10 md:gap-16 "
      ref={ref}
    >
      <h2 className="font-RocknRoll text-center text-3xl hover:scale-110 hover:-rotate-2 transition-all hover:text-secondary ">
        Popular Foods
      </h2>
      <div className="flex-all w-full font-mono bg-[#DF2020] py-3 sm:py-5 rounded-lg px-3 gap-x-2 sm:gap-x-5 child:cursor-pointer child:rounded-lg child:py-3 child:px-4 child:flex-all child:gap-2 child:transition-all flex-wrap">
        {CATEGORIES.map(categoryName => (
          <button
            key={categoryName[0]}
            className={` text-zinc-100 ${
              category === categoryName[0]
                ? 'bg-white text-zinc-900'
                : 'text-zinc-100"'
            }`}
            onClick={() => handleCategory(categoryName[0])}
          >
            {categoryName[1] && (
              <img
                className="w-6 h-6"
                src={categoryName[1]}
                alt={categoryName[1]}
              />
            )}
            {categoryName[0]}
          </button>
        ))}
      </div>
      {isLoading && (
        <div className="flex items-center justify-center flex-col gap-6 py-20">
          <img src="/images/res-logo.png" alt="logo" className="animate-spin" />
          <span className="text-center font-bold text-sm md:text-base">
            Loading...
          </span>
        </div>
      )}
      <div className=" w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {allProducts &&
          !isLoading &&
          allProducts.map(item => <ProductItem key={item.id} {...item} />)}
      </div>
    </section>
  );
};

export default forwardRef(PopularFoods);
