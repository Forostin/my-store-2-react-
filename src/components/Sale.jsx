import Poster from "../components/Poster";
import Products from "./Products"
import { useSelector } from "react-redux/es/hooks/useSelector";

import styles from "../styles/sale.module.css"


const Sale = ()=>{
    const filtered = useSelector((state) => state.products.filtered);
    return (
        <section className={styles.sale}>
          <Poster />
          <p className={styles.title}>акційні знижки </p>
          <Products products={filtered} amount={5} title="товари менше ніж 60$" />
        </section>
    )
}

export default Sale