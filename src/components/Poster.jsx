
import styles from '../styles/home.module.css';
import imgPoster from "../assets/images/image_computer.png"
import { handleClick } from './Header';


const Poster = ()=>{
    return(
        <section className={styles.home}>
           <div className={styles.product}>
             <div className={styles.text}>
               <p className={styles.action}>Акційна пропозиція -20%</p>
               <div className={styles.subtitle}>the bestseller 2023</div>
               <h1 className={styles.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
               <button className='button' onClick={handleClick} >купити зараз</button>
             </div>
             <div className={styles.image}>
                <img src={imgPoster} alt=''></img>
             </div>
           </div>
        </section>

    )
}
export default Poster