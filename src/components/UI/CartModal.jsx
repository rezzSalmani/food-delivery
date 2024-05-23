import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import { notify } from './notify';
import { useOutsideClick } from '../../util/util';
const CartModal = ({ open, onClose }) => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const navigate = useNavigate();
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout');
      onClose();
    } else {
      notify('Please Add a Product to Your Cart', 'top-center', 'info');
    }
  };
  useOutsideClick(onClose, modalRef);
  const handleAddItem = item => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
      })
    );
  };
  return createPortal(
    <div
      ref={modalRef}
      className={`flex flex-col bg-zinc-100 h-screen fixed right-0 top-0 transition-all shadow-2xl z-50 duration-200 ease-in-out  ${
        open
          ? 'w-3/5 xs:w-2/4 md:w-2/6 lg:w-1/3 xl:w-1/4 opacity-100 visible '
          : ' w-0 opacity-0 invisible '
      }`}
    >
      <span
        onClick={() => {
          onClose();
        }}
        className="inline-block w-fit mt-10 pl-4 hover:text-secondary transition-all cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 md:w-8 h-5 md:h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </span>
      {/* content */}
      <div className="divide-y-2 divide-third rounded-lg space-y-2 overflow-auto mt-2 md:mt-4">
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <div
              className="flex xs:items-center justify-evenly xs:justify-between gap-1 sm:gap-4 px-2 py-2"
              key={item.id}
            >
              <div className="flex flex-col xs:flex-row items-center gap-2 sm:gap-3 xl:gap-6">
                <div className=" w-12 md:w-14">
                  <img
                    src={`.${item.image}`}
                    className="w-full rounded-full mix-blend-multiply"
                    alt="food"
                  />
                </div>
                <div className="flex flex-col items-center xs:items-start space-y-1 xs:space-y-2 text-sm md:text-base font-lato  ">
                  <h5 className="text-center">{item.title}</h5>
                  <div className="flex justify-between w-28  ">
                    <span>x 1 =</span>
                    <span className="text-secondary">${item.price}</span>
                  </div>
                  <div className="flex justify-between items-center gap-2 bg-third px-2 rounded-lg shadow-md w-28 text-sm md:text-base">
                    <button onClick={() => handleAddItem(item)}>+</button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => dispatch(cartActions.removeItem(item.id))}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
              {/* fully remove item */}
              <div className="flex items-center justify-center pr-2 md:pr-5">
                <span
                  className="inline-block cursor-pointer hover:text-secondary transition-all"
                  onClick={() => dispatch(cartActions.removeWholeItem(item.id))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))
        ) : (
          <h4 className="font-RocknRoll text-sm px-4 sm:text-base md:text-xl mt-10">
            No item added to the cart!
          </h4>
        )}
      </div>
      {/* total */}
      <div className="flex flex-col items-center gap-2 bg-secondary/80 w-full h-24 mt-auto  p-4 ">
        <div className="flex w-full sm:text-xl text-zinc-50 justify-between ">
          <span>Subtotal:</span>
          <span>
            ${cartItems && cartItems.reduce((a, b) => a + b.totalPrice, 0)}
          </span>
        </div>

        <button
          onClick={handleCheckout}
          className="flex-all px-3 py-2 rounded-lg bg-zinc-100 hover:bg-third transition-colors"
        >
          Checkout
        </button>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default CartModal;
