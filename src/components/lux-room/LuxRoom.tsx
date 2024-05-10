// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.lux.module.css';

const LuxRoom: FC = () => {
    return (
        <div className={styles["lux_room"]}>
            <Image
                width={100}
                height={100}
                src='/img/lux_room.png'
                alt='Кімната Люкс'
            />
            <p className="room_class_lux">Люкс</p>
            <p className="room_desc_lux">
                Розкішні номери люкс, створені для найбільш <br/>
                вибагливих гостей, які цінують бездоганний <br/>
                сервіс та неперевершений комфорт.
            </p>
            <p className="price-text-lux">Ціна від 2800 ₴</p>
            <button className="detail-button">Детальніше</button>
        </div>
    );
}

export default LuxRoom;