import React, { useRef } from 'react';
import Common from '../../components/UI/Common';
import InputCheckOut from '../../components/UI/InputCheckOut';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { notify } from '../../components/UI/notify';
import { cartActions } from '../../store/cartSlice';
const Checkout = () => {
  const formRef = useRef();
  const cartItem = useSelector(state => state.cart.items);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelForm = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const objData = Object.fromEntries(formData.entries());
    formRef.current.reset();
    console.log(objData);
    notify(
      `Dear ${objData.name} we received your request, thanks`,
      'top-center',
      'success',
      2000
    );
    navigate('/');
    dispatch(cartActions.clearCart());
  };
  return (
    <section>
      <Common title="Checkout" />
      <div className="container flex flex-col-reverse md:flex-row justify-between items-center md:items-start flex-wrap py-10 gap-5 lg:px-10">
        {/* Shipping Address */}
        <div className="flex flex-col gap-3 md:gap-5 md:w-2/4 bg-third/60 shadow-xl rounded-lg p-5">
          <h4 className="font-RocknRoll text-base sm:text-xl md:text-2xl">
            Fill Out Information
          </h4>
          <form
            ref={formRef}
            onSubmit={handelForm}
            action=""
            className="flex flex-col gap-2 md:gap-4 font-lato"
          >
            <InputCheckOut title="Name" label="name" type="text" />
            <InputCheckOut title="Email" label="email" type="email" />
            <InputCheckOut
              title="Phone Number"
              label="phone-number"
              type="number"
            />
            <InputCheckOut
              title="Street Address"
              label="street-address"
              type="text"
            />
            <InputCheckOut title="City" label="city" type="text" />
            <div className="flex items-center gap-4 ">
              <InputCheckOut
                title="Postal Code"
                label="postal-code"
                type="number"
              />
              <InputCheckOut title="Country" label="country" type="text" />
            </div>
            <div className="flex gap-4 mt-4 text-zinc-100 child:bg-secondary child:rounded-lg child:transition-all">
              <button
                type="submit"
                className="py-2 px-2 xs:px-4 sm:px-6 hover:bg-primary"
              >
                Checkout
              </button>
              <Link
                to="/cart"
                className=" py-2 px-2 xs:px-4 sm:px-6 hover:bg-primary"
              >
                Back to Cart
              </Link>
            </div>
          </form>
        </div>
        {/* Checkout */}
        <div className="p-5 bg-third/60 w-full sm:w-2/5 rounded-lg space-y-8 font-RocknRoll shadow-lg text-sm sm:text-base">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="">Subtotal:</span>
              <span className="">
                $
                {cartItem.length > 0
                  ? cartItem.reduce((a, b) => a + b.totalPrice, 0)
                  : '0'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="">Shipping fee:</span>
              <span className="">${cartItem.length > 0 ? '10' : '0'}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="">Total:</span>
            <span className="">
              $
              {cartItem.length > 0
                ? cartItem.reduce((a, b) => a + b.totalPrice, 0) + 10
                : '0'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
