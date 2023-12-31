import React, {useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import { useDispatch, useSelector } from "react-redux";

import { toggleForm } from "../Redux/slices/userSlice"
import { useGetProductsQuery } from "../Redux/slices/apiSlices/apiSlice";
import CategoriesHeader from "./CategoriesHeader";

import styles from '../styles/header.module.css'
import logo from "../assets/icons/free-icon-letter-a-5906711.png";
import heart from "../assets/icons/icon-2445095_640.png";
import cartImag from "../assets/icons/shopping-cart-297750_640.png"

export let handleClick = null

const Header = ()=>{
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('');

  const { currentUser, cart, favour }= useSelector(({user})=> user);
  // const [values, setValues] = useState({ name: "Guest", avatar: AVATAR });
  const { data, isLoading } = useGetProductsQuery({ title: searchValue });

  useEffect(() => {
    if (!currentUser) return;
  //   // setValues(currentUser);
  }, [currentUser]);

  handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  };

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);
  };

  let currentQuantity = null
  cart.map((item) => 
    currentQuantity += item.quantity
  )  

  let currentQuantityFavuor = null
  favour.map((item) => 
    currentQuantityFavuor += item.quantity
  )  


  let itemInfo = []
  if(data){
   itemInfo= data.filter(obj => {
      if(obj.title.toLowerCase().includes(searchValue.toLowerCase())){
        return true
      }
        return false
  }
  )
 .map(({ title, image, id }) => {
    return (
      <Link
        key={id}
        onClick={() => setSearchValue("")}
        className={styles.item}
        to={`/products/${id}`}
      >
        <div  
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={styles.title}>{title}</div>
      </Link>
    );
  })
   } 

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className="headerLogo">
             <p>REACT</p>
          <Link to={ROUTES.HOME}>
             <img className={styles.logo} src={logo} alt='stuff' />
            <p>Alex Store</p>
          </Link>
        </div>

        {searchValue && (
            <div className={styles.box}>
              {isLoading
                ? "Loading"
                : !data.length
                ? "No results"
                : 
                itemInfo                                
                }
            </div>
          )}
        
        <form className={styles.form}>
          <div className={styles.info}>
              <div className={styles.user} onClick={handleClick}>
                 <div className={styles.avatar}>зареєструватися</div>
              </div>
          </div>
          <Link to={ROUTES.EVERYITEMS} >   
              <button className={styles.buttonItems}>Всі наші товари</button>
          </Link>
         
           <div className={styles.input}>
            <input
              type="search"
              name="search"
              placeholder="Пошук товарів..."
              autoComplete="off"
              onChange={handleSearch}
              value={searchValue}
            />
          </div>
          
         </form>
         <div className={styles.containerIcons}>
          <div className={styles.account}>
            <Link to={ROUTES.FAVOURITES} className={styles.favourites}>
               <img className={styles.iconHead} src={heart} alt=""/>
            </Link>
            { currentQuantityFavuor&&
               <div className={styles.countFavourites} >{currentQuantityFavuor}</div>
            }
          </div>
       
          <div className={styles.account}>
            <Link to={ROUTES.CART} className={styles.favourites} >
                <img className={styles.iconCart} src={cartImag} alt="" />
            </Link>
            { currentQuantity&&
                <div className={styles.countCart} >{currentQuantity}</div>
            }
          </div>
         </div>    
        </div>
         <div className={styles.categories}>
            <CategoriesHeader /> 
         </div> 
             
      </div>    
    );
  }
  
  export default Header