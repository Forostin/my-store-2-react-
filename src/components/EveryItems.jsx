// import Poster from "../components/Poster";
import Products from "./Products"
import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

import styles from "../styles/everyItems.module.css"

import {useGetProductsQuery, useGetSortProductsQuery} from "../Redux/slices/apiSlices/apiSlice"

const EveryItems= ()=>{
    // const filtered = useSelector((state) => state.products.filtered);
    // const list = useSelector((state) => state.products.list)

    // const [searchValue, setSearchValue] = useState('');
    
    const { data, isLoading } = useGetProductsQuery({ title: '' });
    // const {list} = useGetSortProductsQuery({price: 'desk'})
    // console.log(list)
    return (
        <section className={styles.sale}>
          {/* <Poster /> */}
          <p className={styles.title}>наші товари</p>
          <button >спочатку дешевші</button>
          <div className={styles.box}>
              {isLoading
                ? "Loading"
                : !data.length
                ? "No results"
                : data.map(({ title, image, id, price}) => {
                   return (
                      <Link
                        key={id}
                        // onClick={() => setSearchValue("")}
                        className={styles.item}
                        to={`/products/${id}`}
                      >
                        <div  
                          className={styles.image}
                          style={{ backgroundImage: `url(${image})` }}
                        />
                        <div className={styles.title}>{title}</div>
                        <div className={styles.price}>{price} $</div>
                      </Link>
                    );
                  })}
            </div>
          {/* <Products  products={list}/> */}
        </section>
    )
}

export default EveryItems