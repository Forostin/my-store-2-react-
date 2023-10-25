import styles from '../styles/banner.module.css'
import bannerImg from '../assets/images/santa_klaus.jpg'
import { Link } from 'react-router-dom'
import { ROUTES } from '../utils/routes'

const Banner = ()=>{
    return (
      <section className={styles.banner}>
       <div className={styles.animation}>
         <div className={styles.snowflake}>
             <p className={styles.content}>
               New YEAR 
               <span>SALE</span>
             </p>   
             <Link to={ROUTES.SALE} >   
                 <button className={styles.more}>показати</button>
             </Link>  
         </div>
       </div>
        
        <div className={styles.blockImage}>           
            <div className={styles.rightImage} style={{backgroundImage: `url(${bannerImg})`}}>
                <p className={styles.discount}>
                   заощаджуйте зі знижкою до
                   <span> 40% </span>
                </p>
        </div>
        </div>
        
      </section>
    )    
}

export default Banner