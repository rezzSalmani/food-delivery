import React, { useState } from 'react';
import ProductItem from '../product/ProductItem';
import { useLoaderData } from 'react-router-dom';

const HotPizza = () => {
  const products = useLoaderData();
  const [hotPizza, setHotPizza] = useState(
    products.filter(item => item.category === 'Pizza').slice(0, 4)
  );
  return (
    <section className="my-10 md:my-20 flex flex-col gap-10 md:gap-20 overflow-hidden">
      <h2 className="font-RocknRoll text-center text-3xl scale-110 -rotate-2  text-secondary md:scale-100 md:-rotate-0  md:text-primary hover:scale-110 hover:-rotate-2  hover:text-secondary transition-all duration-150">
        Hot Pizza
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {hotPizza &&
          hotPizza.map(item => <ProductItem key={item.id} {...item} />)}
      </div>
    </section>
  );
};

export default HotPizza;
