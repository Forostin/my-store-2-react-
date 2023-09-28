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
          {list.map(( name, i ) => (
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
        </ul>
      </nav>

    </section>
  );
};

export default Sidebar;