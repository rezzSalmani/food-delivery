import React, { useEffect, useState } from 'react';
import Common from '../../components/UI/Common';
import StarRating from '../../components/UI/StarRating';
import ProductItem from '../../components/product/ProductItem';
import { json, useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import { notify } from '../../components/UI/notify';
import { supabase } from '../../supabaseClient';
import { scrollToTop } from '../../util/util';

const FoodDetail = () => {
  const [tab, setTab] = useState('desc');
  const dispatch = useDispatch();
  const { product } = useLoaderData();
  const { allFoods } = useLoaderData();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { title, price, category, desc, image01, image02, image03, id } =
    product?.[0];

  const productImages = [image01, image02, image03];

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex < productImages.length - 1 ? prevIndex + 1 : 0
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const relatedProduct = allFoods.filter(
    item => item.category === product?.[0].category
  );

  const addToCart = () => {
    dispatch(cartActions.addItem({ id, title, price, image: image01 }));
    notify();
  };

  const handleSendComment = e => {
    e.preventDefault();
    e.target.reset();
    notify('Thanks for Your Comment❤️');
  };
  return (
    <section className="">
      <Common title={title} />
      <div className="container ">
        <div className="flex flex-col items-center sm:flex-row md:gap-5 my-8 sm:my-15 xl:w-4/5 lg:justify-evenly">
          {/* left box */}
          <div className="flex flex-row sm:flex-col justify-center gap-4 xs:py-5 sm:py-10 child:w-14 child:md:w-24 child:cursor-pointer ">
            {productImages.map((image, index) => (
              <div
                className="hover:scale-110 transition-all duration-200 ease-linear"
                onClick={() => setCurrentImageIndex(index)}
              >
                <img src={image} className="mix-blend-multiply" alt={title} />
              </div>
            ))}
          </div>

          <div className="flex px-4 mt-4 items-center justify-evenly md:justify-between gap-4 lg:gap-10 w-full">
            {/* middle box */}
            <div className="relative flex items-center justify-center h-full w-36 xs:w-48 sm:w-64 md:w-[390px]">
              {productImages?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="food image"
                  className={`absolute inset-0 mx-auto my-auto object-cover w-full h-auto transition-all duration-500 ease-in-out mix-blend-multiply  ${
                    currentImageIndex === index
                      ? 'opacity-100 visible scale-100 -translate-x-0 rotate-0'
                      : 'opacity-0 invisible scale-110 -translate-x-4 rotate-6'
                  }`}
                />
              ))}
            </div>
            {/* third content */}
            <div className="flex flex-col w-fit sm:w-52 lg:w-72 gap-2 sm:gap-4 font-RocknRoll mt-5 sm:mt-10 ">
              <h4 className="text-base text-primary md:text-2xl lg:text-3xl">
                {title}
              </h4>
              <div className="flex justify-between items-center text-sm sm:text-base md:text-xl">
                <span>Price:</span>
                <span className=" md:text-2xl text-secondary">${price}</span>
              </div>
              <div className="flex justify-between items-center text-sm sm:text-base md:text-xl">
                <span className="text-sm sm:text-base md:text-xl">
                  Category:
                </span>
                <span className="text-xs xs:text-base md:text-2xl text-secondary">
                  {category}
                </span>
              </div>
              <div className="">
                <StarRating />
              </div>
              <div className="">
                <button
                  className="py-2 px-2 md:px-6 text-xs sm:text-sm md:text-base bg-secondary hover:bg-primary text-zinc-100 rounded-lg shadow-md"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-5 font-RocknRoll text-sm xs:text-base bg-third/60 border-b-2 border-b-third rounded-lg px-4 overflow-hidden py-2 sm:py-4">
            <button
              className={`${tab === 'desc' ? 'text-secondary' : ''}`}
              onClick={() => setTab('desc')}
            >
              Description
            </button>
            <button
              className={`${tab === 'review' ? 'text-secondary' : ''}`}
              onClick={() => setTab('review')}
            >
              Review
            </button>
          </div>
          {tab === 'desc' ? (
            <div>
              <p className=" font-lato text-sm sm:text-base px-5 line-clamp-6 ">
                {desc}
              </p>
            </div>
          ) : (
            <div className="flex items-center md:items-start flex-col gap-8 md:gap-0 sm:flex-row child:w-full  py-5 md:py-10 ">
              <div className="flex flex-col  gap-2 sm:gap-4 text-justify px-10">
                <div className="flex flex-col items-center gap-2 w-full">
                  <div className="flex flex-col w-12 rounded-full overflow-hidden items-center justify-center ">
                    <img
                      className="w-full"
                      src="/images/ava-2.jpg"
                      alt="avatar2"
                    />
                  </div>
                  <span className="inline-block  text-sm">Alex Smith</span>
                  <p className="w-full text-sm line-clamp-6 text-center md:text-justify ">
                    "Online food delivery has become a lifesaver for me,
                    especially during busy workdays or when I'm feeling under
                    the weather. I can order my favorite meals from local
                    restaurants with just a few clicks, and the food arrives at
                    my doorstep in no time. It's like having a personal chef at
                    my service!"
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 w-full">
                  <div className="">
                    <img
                      className="w-12 h-12 rounded-full object-cover overflow-hidden"
                      src="/images/ava-1.jpg"
                      alt="avatar1"
                    />
                  </div>
                  <span className="inline-block  text-sm">Jack anderson</span>
                  <p className="w-full text-sm line-clamp-6 text-center md:text-justify  ">
                    "I absolutely love the convenience of online food delivery!
                    It saves me so much time and effort. The wide variety of
                    restaurants and cuisines available at my fingertips is
                    amazing. Plus, the delivery service is always prompt and the
                    food arrives hot and fresh. It's a game-changer for those
                    busy days when cooking is just not an option!"
                  </p>
                </div>
              </div>
              <div className="flex-all w-full">
                <form
                  onSubmit={handleSendComment}
                  action=""
                  className="flex flex-col bg-third/60 px-5 py-2 space-y-2 shadow-lg w-full  md:w-full xl:w-3/4 rounded-lg child:child:outline-none child:child:pl-2 child:flex child:flex-col"
                >
                  <h6 className="font-RocknRoll my-1">
                    Write your Comment for us
                  </h6>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      className="rounded-lg py-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      className="rounded-lg py-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="Feedback">FeedBack</label>
                    <textarea
                      required
                      name="Feedback"
                      id=""
                      cols="30"
                      rows="10"
                      className="rounded-lg py-1 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center border border-primary/30 rounded-lg text-xl text-center font-mono font-semibold p-2"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
        <div className="space-y-5 font-RocknRoll mt-10 sx:px-2">
          <h4 className=" sm:text-2xl">You might also like</h4>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sx:gap-5 ">
            {relatedProduct &&
              relatedProduct
                .splice(1, 4)
                .map(item => <ProductItem key={item.id} {...item} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetail;

export const loader = async ({ request, params }) => {
  const id = params.foodId;
  let { data: product, error } = await supabase
    .from('deliveryFoodApp')
    .select('*')
    .eq('id', id);
  if (error) {
    console.log(error.message);
    return json({ message: 'Could not fetch your Food!' }, { status: 500 });
  }
  const { data: allFoods, error: allFoodsError } = await supabase
    .from('deliveryFoodApp')
    .select('*');
  if (allFoodsError)
    return json({ message: 'Could not fetch Foods!' }, { status: 500 });

  const combinedData = {
    product,
    allFoods,
  };

  return combinedData;
};
