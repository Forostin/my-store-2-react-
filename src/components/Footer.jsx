import React from "react";
import { Link } from "react-router-dom";

import styles from '../styles/footer.module.css'
import logo from "../assets/icons/free-icon-letter-a-5906711.png";
import iconFb from "../assets/icons/fb_icon-icons.com_66689.png";
import iconYt from "../assets/icons/youtube_logo_icon_147199.png";

import { ROUTES } from "../utils/routes";

const Footer = ()=>{
    return (
    <>
       <section className={styles.footer}>
         <div > 
          <Link to={ROUTES.HOME}  className={styles.wrapLogo}> 
             <p> на головну </p>
             <img className={styles.logo} src={logo}  alt='stuff'/>
          </Link>
         </div>
         <div className={styles.rights}> 
             Developed by Alexander Forostin only for test.
         </div>
         <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
               <img className="icon" src={iconFb}  alt='stuff'>
               </img>               
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
               <img className="icon" src={iconYt}  alt='stuff'>
               </img>               
            </a>
         </div>
       </section>
    </>
    );
  }
  
  export default Footer