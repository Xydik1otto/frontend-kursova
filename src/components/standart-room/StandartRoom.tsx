// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.standart.module.css';

const StandartRoom: FC = () => {
    return (
        <div className={styles["standart_room"]}>
            <Image
                width={500}
                height={272}
                src='/img/standart_room.png'
                alt='Кімната Стандарт'
            />
            <p className={styles["room_class_standart"]}>Стандарт</p>
            <p className={styles["room_desc_standart"]}>
                Затишні номери, де кожен день починається з<br/>
                вас. Відпочинок, комфорт та неперевершений<br/>
                сервіс - ваші найближчі сусіди тут.
            </p>
            <p className={styles["price_text_standart"]}>Ціна від 1400 ₴</p>
            <button className={styles["detail_button_standart"]}>Детальніше</button>
        </div>
    );
}

export default StandartRoom;