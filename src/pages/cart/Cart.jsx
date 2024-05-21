import React from 'react';
import Common from '../../components/UI/Common';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import { notify } from '../../components/UI/notify';
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout');
    } else {
      notify('Please Add a Product to Your Cart', 'bottom-center', 'info');
    }
  };
  return (
    <section>
      <Common title="Your cart" />
      <div className="container">
        <div className="my-10">
          {cartItems.length > 0 ? (
            <table className="w-full ">
              <thead className="bg-third w-full">
                <tr className=" font-lato child:font-semibold text-sm sm:text-base md:text-lg border border-[#DEE2E6] border-b-2 border-b-primary child:border child:border-[#DEE2E6] child:py-1 child:md:py-2 text-primary">
                  <th className=" w-1/6">Image</th>
                  <th className="w-1/3 ">Product Title</th>
                  <th className="">Price</th>
                  <th className=" ">Quantity</th>
                  <th className="">Delete</th>
                </tr>
              </thead>
              <tbody className="">
                {cartItems.length > 0 &&
                  cartItems.map(item => (
                    <tr
                      className="w-full text-center border border-[#DEE2E6] font-lato sx:font-RocknRoll text-xs xs:text-sm md:text-base child:border child:border-[#DEE2E6]"
                      key={item.id}
                    >
                      <td className="flex-all">
                        <img
                          className="w-10 xs:w-14 md:w-16 lg:w-20 py-1 sm:py-2 hover:scale-110 transition-all"
                          src={item.image}
                          alt=""
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>${item.totalPrice}</td>
                      <td>{item.quantity} pcs</td>
                      <td className="">
                        <div className="flex-all ">
                          <span
                            className="cursor-pointer  w-3 h-3 sm:w-5 sm:h-5"
                            onClick={() =>
                              dispatch(cartActions.removeWholeItem(item.id))
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-full h-full"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <h4 className="text-center font-RocknRoll sm:text-xl">
              Your cart is empty
            </h4>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="font-RocknRoll text-sm sm:text-base text-primary">
              Subtotal:
            </span>
            <span className="text-secondary font-RocknRoll text-sm sm:text-base ">
              ${cartItems.reduce((acc, item) => acc + item.totalPrice, 0)}
            </span>
          </div>
          <p className="font-lato text-xs sm:text-sm ">
            Taxes and shipping will be calculated at checkout
          </p>
          <div className="flex items-center mt-3 gap-2 sm:gap-5 flex-wrap">
            <Link
              to="/foods"
              className="bg-secondary text-xs xs:text-sm sm:text-base py-2 px-3 md:px-6 hover:bg-primary text-white transition-all rounded-lg"
            >
              Continue Shopping
            </Link>
            <button
              onClick={handleCheckout}
              className="bg-secondary text-xs xs:text-sm sm:text-base py-2 px-3 md:px-6  hover:bg-primary text-white transition-all rounded-lg"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
