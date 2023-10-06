// import React, { useEffect, useState } from "react";
// import {useParams} from "react-router-dom"
// import { useSelector } from "react-redux";

// import { useGetProductsQuery } from "../../Redux/slices/apiSlices/apiSlice";
// import Products from "../Products";

// import styles from "../../styles/category.module.css"

// const Category = () => {
//     const { id } = useParams();
//     const { list } = useSelector(({ categories }) => categories);
//   // console.log(list)
//     const defaultValues = {
//       title: "",
//       price_min: 1,
//       price_max: 1000,
//     };
  
//     const defaultParams = {
//       categoryId: id,
//       limit: 5,
//       offset: 0,
//       ...defaultValues,
//     };
  
//     const [isEnd, setEnd] = useState(false);
//     const [cat, setCat] = useState(null);
//     const [items, setItems] = useState([]);
//     const [values, setValues] = useState(defaultValues);
//     const [params, setParams] = useState(defaultParams);
  
//     const { data = [], isLoading, isSuccess } = useGetProductsQuery(params);
  
//     useEffect(() => {
//       if (!id) return;
  
//       setValues(defaultValues);
//       setItems([]);
//       setEnd(false);
//       setParams({ ...defaultParams, categoryId: id });
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [id]);
  
//     useEffect(() => {
//       if (isLoading) return;
  
//       // if (!data.length) return setEnd(true);
//       if (!data) return setEnd(true);
  
//       setItems((_items) => [..._items, ...data]);
//     }, [data, isLoading]);
  
//     useEffect(() => {
//       if (!id || !list.length) return;
  
//       const category = list.find((item) => item.id === id );
  
//       setCat(category);
//     }, [list, id]);
  
//     const handleChange = ({ target: { value, name } }) => {
//       setValues({ ...values, [name]: value });
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
  
//       setItems([]);
//       setEnd(false);
//       setParams({ ...defaultParams, ...values });
//     };
  
//     const handleReset = () => {
//       setValues(defaultValues);
//       setParams(defaultParams);
//       setEnd(false);
//     };
  
//     return (
//       <section className={styles.wrapper}>
//         <h2 className={styles.title}>{cat?.name}</h2>
  
//         <form className={styles.filters} onSubmit={handleSubmit}>
//           <div className={styles.filter}>
//             <input
//               type="text"
//               name="title"
//               onChange={handleChange}
//               placeholder="Product name"
//               value={values.title}
//             />
//           </div>
//           <div className={styles.filter}>
//             <input
//               type="number"
//               name="price_min"
//               onChange={handleChange}
//               placeholder="0"
//               value={values.price_min}
//             />
//             <span>Price from</span>
//           </div>
//           <div className={styles.filter}>
//             <input
//               type="number"
//               name="price_max"
//               onChange={handleChange}
//               placeholder="0"
//               value={values.price_max}
//             />
//             <span>Price to</span>
//           </div>
  
//           <button type="submit" >Пошук</button>
        
//         </form>
  
//         {isLoading ? (
//           <div className="preloader">Loading...</div>
//         ) : !isSuccess || !items.length ? (
//           <div className={styles.back}>
//             <span>No results</span>
//             <button onClick={handleReset}>Reset</button>
//           </div>
//         ) : (
//           <Products
//             title=""
//             products={items}
//             style={{ padding: 0 }}
//             amount={items.length}
//           />
//         )}
  
//         {!isEnd && (
//           <div className={styles.more}>
//             <button
//               onClick={() =>
//                 setParams({ ...params, offset: params.offset + params.limit })
//               }
//             >
//               See more
//             </button>
//           </div>
//         )}
//       </section>
//     );
//   };
  
// export default Category

import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import axios from "axios";
import { Link } from 'react-router-dom';

import styles from '../../styles/products.module.css'

import {ROUTES} from "../../utils/routes"
import { useSelector } from "react-redux";

// import { useGetProductsQuery } from "../../Redux/slices/apiSlices/apiSlice";
import Products from "../Products";

// import styles from "../../styles/category.module.css"

const Category = () => {
    const { title } = useParams();
    // const { list } = useSelector(({ categories }) => categories);
  
    const [ singleCategory, setSingleCategory ] = useState(null)
  useEffect(()=>{
    async function fetchCategory(){
        try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/category/${title}`);
        setSingleCategory( data )
      } catch (error){
        alert(" Помилка при отриманні катєгоріі ")
      }
    }
    fetchCategory()
  },[])
     
    return (
      <section className={styles.products}>
        {singleCategory&&( 
          <div className={styles.list}>
          {singleCategory.map(({id, title, image, price})=>(
                      <Link to={`/products/${id}`} key={id} className={styles.product} >
                         <div className={styles.image} 
                             style={{ backgroundImage: `url(${image})` }} 
                         />
                              <div className={styles.wrapper}>
                                 <h3 className={styles.title}>{title}</h3>
                                 <div className={styles.info}>
                                 <div className={styles.price}>{price}$</div>
                             </div>
                         </div>
                       </Link>
                    ))
          }
          </div>      
        )}
        <button className={styles.buttonHome}>
           <Link to={ROUTES.HOME} >Повернутися на головну сторінку</Link>
        </button>
      </section>
    );
  };
  
export default Category