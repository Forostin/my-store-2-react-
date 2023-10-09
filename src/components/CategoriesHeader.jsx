import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from '../styles/categHead.module.css'

const Sidebar = () => {
   const { list } = useSelector(({ categories }) => categories);
   
  return (
    <section className={styles.sidebar}>
      <nav>
        <ul className={styles.menu}>
          {list.map(( nameCategory , id ) => (
            <li key={id}>
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
        </ul>
      </nav>

    </section>
  );
};

export default Sidebar;