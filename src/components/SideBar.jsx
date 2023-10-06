
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from '../styles/sidebar.module.css'

import {getSelectedCategory}  from "../Redux/slices/categorySlice"
import {useState, useEffect} from "react"

const Sidebar = () => {
   const { list } = useSelector(({ categories }) => categories);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>Категоріі</div>
      <nav>
        <ul className={styles.menu}>
          {list.map(( nameCategory , id, ) => (
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
    </section>
  );
};

export default Sidebar;