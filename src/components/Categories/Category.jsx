import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import axios from "axios";
import { Link } from 'react-router-dom';

import styles from '../../styles/products.module.css'

import {ROUTES} from "../../utils/routes"


const Category = () => {
    const { title } = useParams();
  
    const [ singleCategory, setSingleCategory ] = useState(null)

  useEffect(()=>{
    async function fetchCategory(){
        try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/category/${title}`);
        setSingleCategory( data )
      } catch (error){
        alert(" Помилка при отриманні катєгоріі ")
      }
    }
      fetchCategory()
  },[ title ])

 
    return (
      <section className={styles.products}>
        {singleCategory&&( 
          <div className={styles.list}>
          {singleCategory.map(({id, title, image, price})=>(
                      <Link to={`/products/${id}`} key={id} className={styles.product}  >
                         <div className={styles.image} 
                             style={{ backgroundImage: `url(${image})` }} 
                         />
                              <div className={styles.wrapper}>
                                 <h3 className={styles.title}>{title}</h3>
                                 <div className={styles.info}>
                                 <div className={styles.price}>{price}$</div>
                             </div>
                         </div>
                       </Link>
                    ))              
          }
          </div>      
        )}
        <button className={styles.buttonHome}>
           <Link to={ROUTES.HOME} >Повернутися на головну сторінку</Link>
        </button>
      </section>
    );
  };
  
export default Category