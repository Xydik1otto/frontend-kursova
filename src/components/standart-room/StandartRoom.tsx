// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.standart.module.css';

const StandartRoom: FC = () => {
    return (
        <div className={styles["standart_room"]}>
            <Image
                width={100}
                height={100}
                src='/img/standart_room.png'
                alt='Кімната Стандарт'
            />
            <p className="room_class_standart">Стандарт</p>
            <p className="room_desc_standart">
                Затишні номери, де кожен день починається з<br/>
                вас. Відпочинок, комфорт та неперевершений<br/>
                сервіс - ваші найближчі сусіди тут.
            </p>
            <p className="price-text-standart">Ціна від 1400 ₴</p>
            <button className="detail-button">Детальніше</button>
        </div>
    );
}

export default StandartRoom;