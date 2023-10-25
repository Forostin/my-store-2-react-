import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { removeItemFromFavour, addItemToFavour} from "../Redux/slices/userSlice";

import styles from "../styles/favourites.module.css"
import closeIcon from "../assets/icons/close_delete_icon.png"

const Favourites = () => {
  const dispatch = useDispatch();
  const { favour } = useSelector(({ user }) => user);

  const removeItem = (id) => {
    dispatch( removeItemFromFavour(id));
  };


  return (
    <section className={styles.cart}>
        <h2 className={styles.title}>Ви помітили цей товар як сподобався:</h2>

      {!favour.length ? (
        <div className={styles.empty}>Нічого не обрано</div>
      ) : (
          <div >
            {favour.map((item) => {
              const { title,  image, price, id, description  } = item;

              return (
                <div className={styles.item} key={id}>
                <Link to={`/products/${id}`} key={id}  >
                   
                  <div className={styles.image}
                        style={{ backgroundImage: `url(${image})` }}
                  />
                </Link>
                  <div className={styles.info}>
                    <h3 className={styles.name}>{title}</h3>
                    <div className={styles.price}>{price}$</div>
                    <p className={styles.description}>{description }</p>
                  </div>
    
                  <div className={styles.close}
                       onClick={() => removeItem(item.id)}
                  >
                    <img className={styles.icon} src={closeIcon} alt='close' />
                  </div>
                </div>
              );
            })}
          </div>
      )}
    </section>
  );
};

export default Favourites;