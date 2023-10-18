import { Routes, Route } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

import Home from '../../Home/Home'
import SingleProduct from "../SingleProduct";
import SingleCategory from "../Categories/SingleCategory";
import Profile from "../Profile"
import Cart from "../Cart";
import Favourites from "../Favourites";
import Sale from "../Sale";


const appRoutes = ()=>{
  return (
   <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />}  />
      <Route path={ROUTES.PROFILE} element={<Profile />}  />
      <Route path={ROUTES.CATEGORY} element={<SingleCategory />}  />
      <Route path={ROUTES.CART} element={<Cart />}  />
      <Route path={ROUTES.FAVOURITES} element={<Favourites />} />
      <Route path={ROUTES.SALE} element={<Sale />} />
   </Routes>
    );
}

export default appRoutes;
