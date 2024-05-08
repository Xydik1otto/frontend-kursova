// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.module.css';

const ComfortRoom: FC = () => {
    return (
        <div className={styles["comfort_room"]}>
            <Image
                width={100}
                height={100}
                src='/img/comfort_room.png'
                alt='Кімната Комфорт'
            />
            <p className="room_class_comfort">Комфорт</p>
            <p className="room_desc_comfort">
                Вишукані номери, де комфорт переплітається з<br/> елегантністю, створюючи
                ідеальний простір<br/> для вашого відпочинку.
            </p>
            <p className="price-text-comfort">Ціна від 1800 грн</p>
            <button className="detail-button">Детальніше</button>
        </div>
    );
}

export default ComfortRoom;