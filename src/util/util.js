import { useEffect } from 'react';
import { supabase } from '../supabaseClient';

export const filterProductByCategory = async productCategory => {
  console.log(
    productCategory.toLowerCase().charAt(0).toUpperCase() +
      productCategory.toLowerCase().slice(1)
  );
  let { data, error } = await supabase
    .from('deliveryFoodApp')
    .select('*')
    // Filters
    // to toLowerCase except first letter
    .eq(
      'category',
      productCategory.toLowerCase().charAt(0).toUpperCase() +
        productCategory.toLowerCase().slice(1)
    );
  if (error) {
    return error;
  }

  return data;
};

export const sortProducts = (option, foods) => {
  let sortedProducts = [...foods];
  switch (option) {
    case 'default':
      sortedProducts = [...foods];
      break;
    case 'ascending':
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'descending':
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case 'high-price':
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case 'low-price':
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    default:
      break;
  }
  return sortedProducts;
};
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
export const useOutsideClick = (onClose, modalRef) => {
  useEffect(() => {
    const handleClickOutside = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClose, modalRef]);
};
