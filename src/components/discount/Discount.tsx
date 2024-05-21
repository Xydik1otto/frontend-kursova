// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.discount.module.css';

const Discount: FC = () => {
    return (
        <div className={styles["discount"]}>
            <div className={styles["discount_left"]}>
                <button className={styles["discount_button_left"]}>
                    <img src="/svg/arrow.svg" alt="Вліво"/>
                </button>
            </div>
            <div className={styles["discount_block"]}>
                <img className={styles["discount_img"]} src="/img/discount.png" alt="Знижка"/>
                <p className={styles["discount_name"]}>Акція</p>
                <p className={styles["discount_propose"]}>Спеціальна пропозиція: </p>
                    <p className={styles["discount_desc"]}>Затишний однокімнатний <br/> номер в "Solar.is"!
                        Ідеально <br/> підходить для зручного та <br/> комфортного відпочинку під <br/> час вашої
                        подорожі до Карпат.</p>
                    <button className={styles["detail_button_discount"]}>Забронювати</button>
            </div>
            <div className={styles["discount_right"]}>
                <button className={styles["discount_button_right"]}>
                    <img src="/svg/arrow2.svg" alt="Вправо"/>
                </button>
            </div>
        </div>
);
}
export default Discount;