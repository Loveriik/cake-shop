import Navigation from "./components/Navigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProductPage from "./pages/ProductPage/ProductPage";
import Shop, { loader as productLoader } from "./pages/Shop/Shop";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from "./pages/ContactUs/ContactUs";
import Trainings, { loader as trainingsLoader } from "./pages/Trainings/Trainings";
import Checkout from "./pages/Checkout/Checkout";
import Confirmation, { action as clientOrder } from "./pages/Checkout/Confirmation";

import cakePic from './images/cakePrinter.png'
import cakePic2 from './images/cakePrinter2.png'

function App() {

  const router = createBrowserRouter([
    { path: '/', 
      element: <Navigation />,
      children: [
        {
          index:true,
          element: <HomePage />
        },
        {
          path: 'about', 
          element: <AboutUs />
        },
        { path: 'patiss3', 
          element: <ProductPage src={cakePic} title='Patiss3'/>
        },
        { path: 'cakewalk',
          element: <ProductPage src={cakePic2} title='Cakewalk'/>
        },
        { path: 'shop',
          element: <Shop />,
          loader: productLoader
        },
        { path: 'contactus',
          element: <ContactUs />
        },
        { path: 'trainings',
          element: <Trainings />,
          loader: trainingsLoader
        },
        {
          path:'checkout',
          element:<Checkout />
        },
        {
          path:'checkout/confirmation',
          element:<Confirmation />,
          action: clientOrder
        }
        
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
