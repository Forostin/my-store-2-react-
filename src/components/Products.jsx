
import { Link } from 'react-router-dom';
import styles from '../styles/products.module.css';

const Products = ({title, products = [], style={}, amount})=>{    
    // const list = products.filter((_, i)=> i < amount) 
    // console.log(list)
    return (
        <section className={styles.products} style={style}>
            {title && <h2>{title}</h2>}
            <div className={styles.list}>
                {
                    products.map(({id, title, image, category :{name:cat}, price})=>(
                      <Link to={`/products/${id}`} key={id} className={styles.product} >
                         <div className={styles.image} 
                             style={{ backgroundImage: `url(${image})` }} 
                         />
                              <div className={styles.wrapper}>
                                 <h3 className={styles.title}>{title}</h3>
                                 <div className={styles.cat}>{cat}</div>
                                 <div className={styles.info}>
                                 <div className={styles.price}>{price}$</div>
                             </div>
                         </div>
                       </Link>
                    ))
                }
            </div>
        </section>
    )
}

export default Products