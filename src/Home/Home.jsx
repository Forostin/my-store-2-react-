import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Poster from "../components/Poster";
import Banner from "../components/Banner";
import Products from "../components/Products";

import styles from "../styles/home.module.css"
import { filterByPrice } from "../Redux/slices/productsSlice";

const Home = ()=>{
  const list = useSelector((state) => state.products.list);
  const filtered = useSelector((state) => state.products.filtered);
  const dispatch = useDispatch();
  

  useEffect(() => {
    if (list.length){
    dispatch(filterByPrice());
    }
  }, [ dispatch, list.length ]);

  return (
    <div className={styles.wrap}>
         <Banner />   
         <Products products={list} amount={5} title="популярні товари" />
         <Poster />
         <Products products={filtered} amount={5} title="акційні товари менше ніж 60$" />
    </div>
    );
  }
  
  export default Home;