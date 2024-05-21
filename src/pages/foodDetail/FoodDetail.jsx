import React, { useEffect, useState } from 'react';
import Common from '../../components/UI/Common';
import StarRating from '../../components/UI/StarRating';
import ProductItem from '../../components/product/ProductItem';
import { json, useLoaderData, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import { notify } from '../../components/UI/notify';
import { supabase } from '../../supabaseClient';
const FoodDetail = () => {
  const [tab, setTab] = useState('desc');
  const dispatch = useDispatch();
  const { product } = useLoaderData();
  const { allFoods } = useLoaderData();

  const { title, price, category, desc, image01, image02, image03, id } =
    product?.[0];
  const [previewImg, setPreviewImg] = useState('');
  useEffect(() => {
    setPreviewImg(image01);
    window.scrollTo(0, 0);
  }, [product?.[0]]);
  const relatedProduct = allFoods.filter(
    item => item.category === product?.[0].category
  );
  const addToCart = () => {
    dispatch(cartActions.addItem({ id, title, price, image: image01 }));
    notify();
  };
  return (
    <section className="">
      <Common title={title} />
      <div className="container ">
        <div className="flex flex-col items-center sm:flex-row  md:gap-5 my-5 sm:my-10 xl:w-4/5 lg:justify-evenly">
          {/* left box */}
          <div className="flex flex-row sm:flex-col justify-center gap-4 xs:py-5 sm:py-10 child:w-14 child:md:w-24 child:cursor-pointer child:transition-all">
            <div
              className="hover:scale-110 "
              onClick={() => setPreviewImg(image01)}
            >
              <img src={`${image01}`} alt="" />
            </div>
            <div
              className="hover:scale-110"
              onClick={() => setPreviewImg(image02)}
            >
              <img src={`${image02}`} alt="" />
            </div>
            <div
              className="hover:scale-110"
              onClick={() => setPreviewImg(image03)}
            >
              <img src={`${image03}`} alt="" />
            </div>
          </div>
          <div className="flex  px-4 mt-4 items-center md:items-start justify-center sm:justify-between flex-row gap-4 lg:gap-10 ">
            {/* middle box */}
            <div className="flex items-center justify-center w-36 sx:w-48 sm:w-64 md:w-[390px] overflow-hidden  ">
              <img
                src={`${previewImg}`}
                alt=""
                className="w-full object-contain animate-fadeInAnimation transition-all"
              />
            </div>
            {/* third content */}
            <div className="flex flex-col gap-2 sm:gap-5 font-RocknRoll mt-5 sm:mt-10">
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
            <div className="flex items-center flex-col sm:flex-row">
              <div className="flex flex-col text-center gap-2 sm:gap-4 w-1/2">
                <div className="flex flex-col items-center gap-2 w-full">
                  <div className="flex flex-col w-12 rounded-full overflow-hidden items-center justify-center ">
                    <img
                      className="w-full  "
                      src="/images/ava-2.jpg'"
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
                  <div className="flex flex-col w-12 rounded-full overflow-hidden items-center justify-center ">
                    <img
                      className="w-full  "
                      src="/images/ava-1.jpg'"
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
              <div className="flex-all my-5 md:my-10 w-full ">
                <form
                  action=""
                  className="flex flex-col bg-third p-5 shadow-lg w-full sm:w-3/4 md:w-4/6 lg:w-1/2 rounded-lg child:outline-none child:pl-2"
                >
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" className="rounded-lg" />

                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" className="rounded-lg" />

                  <label htmlFor="Feedback">FeedBack</label>
                  <textarea
                    name="Feedback"
                    id=""
                    cols="30"
                    rows="10"
                    className="rounded-lg"
                  ></textarea>
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
