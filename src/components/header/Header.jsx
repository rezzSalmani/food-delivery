import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { uiActions } from '../../store/uiSlice';
import CartModal from '../UI/CartModal';
import LoadingIndicator from '../UI/LoadingIndicator';
import { useOutsideClick } from '../../util/util';
const NAV_LINKS = [
  {
    display: 'Home',
    path: '/',
  },
  {
    display: 'Foods',
    path: 'foods',
  },
  {
    display: 'Cart',
    path: 'cart',
  },
  {
    display: 'Contact',
    path: 'contact',
  },
];
const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const dispatch = useDispatch();
  const cartRef = useRef();
  const navigation = useNavigation();

  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const cartItems = useSelector(state => state.cart.items);
  useEffect(() => {
    if (cartIsVisible) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [cartIsVisible]);

  const handleUserDashboard = () => {
    toast.warning("account section isn't available!", {
      position: 'bottom-right',
      autoClose: 1000,
    });
  };
  useOutsideClick(() => setMenuIsOpen(false), cartRef);

  return (
    <>
      <CartModal
        open={cartIsVisible}
        onClose={() => dispatch(uiActions.hideCart())}
      />
      <header
        className={`header sticky inset-0 my-auto mx-auto z-40 w-full h-full xs:h-[100px] bg-white leading-[100px] py-5 px-1 xs:px-5`}
      >
        <div className="container flex items-center justify-between ">
          <Link
            to={'/'}
            className="flex gap-1 xs:flex-col xs:gap-0 items-center hover:scale-110 transition-all cursor-pointer"
          >
            <img
              className="w-8 h-8 md:w-[50px] md:h-[50px]"
              src="/images/res-logo.png"
              alt="Foodie logo"
            />
            <h5 className="font-RocknRoll leading-5 font-semibold">Foodie</h5>
          </Link>
          <div className="hidden xs:flex md:hidden font-RocknRoll text-xs xs:text-base md:text-xl">
            <h4>Stay Happy with us :)</h4>
          </div>
          <div className="hidden md:flex">
            <ul className="flex items-center font-mono gap-3 xs:gap-5 md:gap-10 child:transition-all font-semibold lg:font-medium child:cursor-pointer text-sm md:text-base lg:text-xl">
              {navigation.state === 'loading' ? (
                <LoadingIndicator />
              ) : (
                NAV_LINKS.map(item => (
                  <li key={item.display} className="hover:text-secondary">
                    <NavLink
                      className={navClass =>
                        navClass.isActive ? 'text-secondary' : ''
                      }
                      to={item.path}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="flex items-center gap-5 child:cursor-pointer">
            <span
              className="relative hover:scale-110 transition-all "
              onClick={() => dispatch(uiActions.showCart())}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="md:w-8 w-5 md:h-8 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span className="cart-counter w-4 h-4 md:w-[18px] md:h-[18px]">
                {cartItems.length > 0
                  ? cartItems.reduce((a, b) => a + b.quantity, 0)
                  : '0'}
              </span>
            </span>
            <span
              className="hover:scale-110 transition-all"
              onClick={handleUserDashboard}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="md:w-8 w-5 md:h-8 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </span>
            <div className="flex md:hidden hover:scale-110 transition-all ">
              <span
                onClick={() => {
                  setMenuIsOpen(pre => !pre);
                }}
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div
          ref={cartRef}
          className={`fixed h-screen right-0 top-0 bottom-0 transition-all bg-zinc-100 ${
            menuIsOpen ? 'w-3/5 visible' : 'invisible w-0'
          }`}
        >
          <span
            onClick={() => {
              setMenuIsOpen(pre => !pre);
            }}
            className="hover:text-secondary absolute left-5 top-5 hover:scale-110 transition-all "
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
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </span>
          <ul
            className="flex-col mt-14 items-center font-mono child:transition-all font-medium child:cursor-pointer 
    text-sm md:text-base divide-y divide-gray-300 child:py-4 child:w-full child:flex child:justify-center px-5"
          >
            {NAV_LINKS.map(item => (
              <li
                key={item.display}
                className="hover:text-secondary"
                onClick={() => {
                  setMenuIsOpen(pre => !pre);
                }}
              >
                <NavLink
                  className={navClass =>
                    navClass.isActive ? 'text-secondary' : ''
                  }
                  to={item.path}
                >
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
      {cartIsVisible && (
        <div className="fixed top-0 left-0 w-full h-full z-40 bg-black/20"></div>
      )}
    </>
  );
};

export default Header;
