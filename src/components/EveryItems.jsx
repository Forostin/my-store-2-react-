import Banner from "../components/Banner"
import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/everyItems.module.css"

import {useGetProductsQuery} from "../Redux/slices/apiSlices/apiSlice"

const EveryItems= ()=>{   
    const { data, isLoading } = useGetProductsQuery({ title: '' });
   
    let arrayForSort = data
    let sortData = []
  if(arrayForSort){
     arrayForSort = data.slice(0)
     sortData = arrayForSort.sort(function(a, b){
        return a.price - b.price;
    })
  }
  
    return (
        <section className={styles.sale}>
          <Banner />
          <p className={styles.title}>наші товари</p>
          <p >спочатку дешевші</p>
          <div className={styles.box}>
              {isLoading
                ? "Loading"
                : !data.length
                ? "No results"
                : sortData.map(({ title, image, id, price}) => {
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
        </section>
    )
}

export default EveryItems