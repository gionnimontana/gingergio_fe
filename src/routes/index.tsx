import { createBrowserRouter } from "react-router-dom";
import { routes } from "../constants/routes";
import { Home } from "./home/Home";
import { Market } from "./market/Market";
import { Basket } from "./basket/Basket";
import { ConfirmOrder } from "./confirmOrder/ConfirmOrder";
import { PaymentAndDelivery } from "./paymentAndDelivery/PaymentAndDelivery";
import { AuthPage } from "./authPage/AuthPage";
import { User } from "./user/User"
  
export const router = createBrowserRouter([
  {
    path: routes.Home,
    element: <Home/>,
  },
  {
    path: routes.Market,
    element: <Market/>,
  },
  {
    path: routes.Basket,
    element: <Basket/>,
  },
  {
    path: routes.AuthPage,
    element: <AuthPage nextRoute={routes.PaymentAndDelivery}/>,
  },
  {
    path: routes.PaymentAndDelivery,
    element: <PaymentAndDelivery/>,
  },
  {
    path: routes.ConfirmOrder,
    element: <ConfirmOrder/>,
  },
  {
    path: routes.User,
    element: <User/>
  },
  {
    path: '*',
    element: <Home/>,
  }
]);