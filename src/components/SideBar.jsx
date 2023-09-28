import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from '../styles/sidebar.module.css'

const Sidebar = () => {
   const { list } = useSelector(({ categories }) => categories);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>Категоріі</div>
      <nav>
        <ul className={styles.menu}>
          {list.map(( name , i) => (
            <li key={i}>
              
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
                to={`/categories/${i}`}
              >
                {name}
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