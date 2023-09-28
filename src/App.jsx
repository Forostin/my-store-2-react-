import AppRoutes from "./components/Routes/Routes";
import { useDispatch , useSelector} from "react-redux";
import { useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer"
import SideBar from "./components/SideBar";
import Products from "./components/Products";
import Categories from "./components/Categories/Categories";

import {getCategories} from "./Redux/slices/categorySlice"
import { getProducts } from "./Redux/slices/productsSlice";
import UserForm from "./components/userForm";


function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  // const {list} = useSelector((products) => products);
  // const {
  //   products: { list },
  //   // categories,
  // } = useSelector((state) => state);
  const  categories = useSelector((categories) => categories);

  return (
    <div className='app'>
      <Header />
      <UserForm />
      <div className="container">
        <SideBar />
        <AppRoutes />
      </div>
      {/* <Products products={list} amount={5} title="В тренді" /> */}
      {/* <Categories products={categories} title="Категоріі" /> */}
      <Footer />
     
    </div>
     );
}

export default App;
