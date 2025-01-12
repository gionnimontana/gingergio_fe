import { createBrowserRouter } from "react-router-dom";
import { routes } from "../constants/routes";
import { Home } from "./home/Home";
import { Market } from "./market/Market";
  
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
    path: '*',
    element: <Home/>,
  }
]);