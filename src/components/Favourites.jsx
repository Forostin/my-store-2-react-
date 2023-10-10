import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart,   removeItemFromFavour, addItemToFavour} from "../Redux/slices/userSlice";

import { sumBy } from "../utils/common";
import styles from "../styles/cart.module.css"
import closeIcon from "../assets/icons/close_delete_icon.png"
import { handleClick } from "./Header";


const Favourites = () => {
  const dispatch = useDispatch();
  const { favour } = useSelector(({ user }) => user);

  const changeQuantityFavuor = (item, quantity) => {
    dispatch(addItemToFavour({ ...item, quantity }));
  };

  const removeItem = (id) => {
    dispatch( removeItemFromFavour(id));
  };

  let allSum = sumBy(favour.map(({ quantity, price }) => quantity * price))

  return (
    <section className={styles.cart}>
        <h2 className={styles.title}>Ви помітили цей товар як сподобався:</h2>

      {!favour.length ? (
        <div className={styles.empty}>Нічого не обрано</div>
      ) : (
        <>
          <div className={styles.list}>
            {favour.map((item) => {
              const { title, category, image, price, id, quantity } = item;

              return (
                <div className={styles.item} key={id}>
                  <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${image})` }}
                  />
                  <div className={styles.info}>
                    <h3 className={styles.name}>{title}</h3>
                    <div className={styles.category}>{category.name}</div>
                  </div>

                  <div className={styles.price}>{price}$</div>

                  {/* <div className={styles.quantity}>
                    <div
                      className={styles.minus}
                      onClick={() =>
                        changeQuantityFavuor(item, Math.max(1, quantity - 1))
                      }
                    > - </div>

                    <span>{quantity}</span>

                    <div
                      className={styles.plus}
                      onClick={() =>
                        changeQuantityFavuor(item, Math.max(1, quantity + 1))
                      } 
                    >  +  </div>
                  </div> */}

                  {/* <div className={styles.total}>{price * quantity} $</div> */}

                  <div
                    className={styles.close}
                    onClick={() => removeItem(item.id)}
                  >
                    <img className={styles.icon} src={closeIcon} alt='close' />
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div className={styles.actions}>
            <div className={styles.total}> */}
            {/* ціна разом :{" "}
              <span>
                {/* {sumBy(cart.map(({ quantity, price }) => quantity * price))} $ */}
                {/* { Math.round(parseFloat(allSum) * 100) / 100 } $
              </span>
            </div>
            <button className={styles.proceed} onClick={handleClick}>Перейти до оформлення замовлення</button> */}
          {/* </div> */} 
        </>
      )}
    </section>
  );
};


export default Favourites;