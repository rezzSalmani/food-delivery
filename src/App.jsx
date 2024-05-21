import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Foods, { loader as foodsLoader } from './pages/foods/Foods';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import Checkout from './pages/checkout/Checkout';
import FoodDetail, {
  loader as foodDetailLoader,
} from './pages/foodDetail/FoodDetail';
import Error from './components/UI/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: foodsLoader,
      },
      {
        path: '/foods',
        element: <Foods />,
        loader: foodsLoader,
      },
      {
        path: '/foods/:foodId',
        element: <FoodDetail />,
        loader: foodDetailLoader,
      },
      { path: '/cart', element: <Cart /> },
      { path: '/contact', element: <Contact /> },
      { path: '/checkout', element: <Checkout /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
