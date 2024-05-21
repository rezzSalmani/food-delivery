import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
export const notify = (
  message = 'Product added to your Cart!',
  position = 'bottom-right',
  type = 'success'
) => {
  if (type === 'success') {
    return toast.success(message, {
      position,
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  } else {
    toast.info(message, {
      position,
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }
};
