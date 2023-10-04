import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart,  removeItemFromCart } from "../Redux/slices/userSlice";

import { sumBy } from "../utils/common";
import styles from "../styles/cart.module.css"
import closeIcon from "../assets/icons/close_delete_icon.png"
import { handleClick } from "./Header";


const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(({ user }) => user);

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }));
  };

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  let allSum = sumBy(cart.map(({ quantity, price }) => quantity * price))

  return (
    <section className={styles.cart}>
        <h2 className={styles.title}>Ваш кошик</h2>

      {!cart.length ? (
        <div className={styles.empty}>Кошик пустий</div>
      ) : (
        <>
          <div className={styles.list}>
            {cart.map((item) => {
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

                  <div className={styles.quantity}>
                    <div
                      className={styles.minus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity - 1))
                      }
                    > - </div>

                    <span>{quantity}</span>

                    <div
                      className={styles.plus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity + 1))
                      } 
                    >  +  </div>
                  </div>

                  <div className={styles.total}>{price * quantity} $</div>

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

          <div className={styles.actions}>
            <div className={styles.total}>
            ціна разом :{" "}
              <span>
                {/* {sumBy(cart.map(({ quantity, price }) => quantity * price))} $ */}
                { Math.round(parseFloat(allSum) * 100) / 100 } $
              </span>
            </div>

            <button className={styles.proceed} onClick={handleClick}>Перейти до оформлення замовлення</button>
          </div>
        </>
      )}
    </section>
  );
};


export default Cart;