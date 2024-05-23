import React from 'react';
import { Link } from 'react-router-dom';
import { cartActions } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
import { notify } from '../UI/notify';

const ProductItem = ({ image01, title, price, id }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addItem({ id, title, price, image: image01 }));
    notify();
  };
  return (
    <div
      className="flex-all flex-col p-2 xs:p-5 border border-third
    gap-y-5 shadow-lg overflow-hidden"
    >
      <Link
        to={`/foods/${id}`}
        className="flex-all w-20 xs:w-28 md:w-32 xs:h-[128px] "
      >
        <img
          className="h-full w-full object-contain hover:scale-[1.2] transition-all ease-linear duration-200"
          src={`${image01}`}
          alt={title}
          loading="lazy"
        />
      </Link>
      <div className="flex-all flex-col w-full gap-5">
        <h5 className="flex items-end text-xs xs:text-sm md:text-base text-center h-9 md:h-12 text-primary font-RocknRoll line-clamp-1">
          <Link to={`/foods/${id}`} className="line-clamp-2" href="">
            {title}
          </Link>
        </h5>
        <div className="flex justify-between items-center font-lato w-full">
          <span className="text-xs sm:text-base md:text-xl text-secondary font-semibold ">
            ${price}
          </span>
          <button
            className="bg-secondary text-xs md:text-sm lg:text-base text-zinc-100 rounded-lg hover:bg-primary transition-all py-[5px] xs:py-2 px-2 md:px-3"
            onClick={addToCart}
          >
            Add <span className="hidden xs:inline-block">to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
