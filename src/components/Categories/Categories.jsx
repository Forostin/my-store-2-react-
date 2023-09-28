// import styles from '../../styles/categories.module.css';
// import { Link } from 'react-router-dom';
// import { useSelector } from "react-redux";



// const Categories = ({title, id, name,  categories , amount})=>{
//    // const list = products.filter((_, i) => amount < 5)
//    const { list } = useSelector(({ categories }) => categories);
//     return(
//        <section className={styles.section}>
//           <h2>{title}</h2>    
//           <div className={styles.list}>
//             {  list.map(({ id, name, image }) => (
//                   <li key={id}>
//                     <Link to={`/categories/${id}`}  key={id}>
//                            <div className={styles.image}  style={{backgroundImage: `url(${image})`}}></div> 
//                            <h3 className={styles.title} key={id} >{name}</h3>
//                     </Link>   
//                   </li>
//                 ))
//             }
//           </div>      
//        </section>
//     )
// }

// export default Categories