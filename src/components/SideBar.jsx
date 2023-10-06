
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from '../styles/sidebar.module.css'

import {getSelectedCategory}  from "../Redux/slices/categorySlice"
import {useState, useEffect} from "react"

const Sidebar = () => {
   const { list } = useSelector(({ categories }) => categories);
  //  console.log(list)
  //  const [userCategory, setCategory] = useState()
  //  useEffect(()=>{
  //        fetch('https://fakestoreapi.com/products/categories') 
  //        .then(res => res.json())
  //        .then(data => setCategory( data))
  //        console.log(setCategory)
  //  },[]);
  //  console.log(setCategory)
  //  const userCategory = useSelector((state) => state.categories.category)
 
  //  console.log(userCategory)
  //  const dispatch = useDispatch()

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>Категоріі</div>
      <nav>
        <ul className={styles.menu}>
          {list.map(( nameCategory , id, ) => (
            // ?????????????????????
            // <li key={id} onClick={() => dispatch(getSelectedCategory(nameCategory))} >
                 <li key={id}  > 
              <NavLink 
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
                to={`/products/category/${nameCategory}`}
              >
                {nameCategory}
              </NavLink>
            </li>
          ))}

      {/* Ecли получаем массив обьектов, то: */}
        {/* { Object.entries(list).map(([_,value]) => 
            <li key={value}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
                to={`/categories/`}
              >
                {value}
              </NavLink>
            </li>    
          )}  */}

        </ul>
      </nav>

      {/* <div className={styles.footer}>
        <a href="/help" target="_blank" className={styles.link}>
          Help
        </a>
        <a
          href="/terms"
          target="_blank"
          className={styles.link}
          style={{ textDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
      </div> */}   


    </section>
  );
};

export default Sidebar;