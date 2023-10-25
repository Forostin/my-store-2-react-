import AppRoutes from "./components/Routes/Routes";
import { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer"
import SideBar from "./components/SideBar";

import {getCategories} from "./Redux/slices/categorySlice"
import { getProducts } from "./Redux/slices/productsSlice";
import UserForm from "./components/userForm";


function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

 
  const [width, setWidth]   = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className='app'>
      <Header />
      <UserForm />
      <div className="container">
        { width > 1200 &&
          <SideBar />
        }
       
        <AppRoutes />
      </div>
        <Footer />
    </div>
     );
}

export default App;
