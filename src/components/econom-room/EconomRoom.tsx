// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.eco.module.css';

const EconomRoom: FC = () => {
    return (
        <div className={styles["eco_room"]}>
            <Image
                width={100}
                height={100}
                src='/img/econom_room.png'
                alt='Кімната Економ'
            />
            <p className="room_class_econom">Економ</p>
            <p className="room_desc_eco">
                Ідеальний вибір для тих, хто шукає затишне<br/>
                проживання за доступною ціною у серці Карпат.
            </p>
            <p className="price-text-eco">Ціна від 1200 ₴</p>
            <button className="detail-button">Детальніше</button>
        </div>
    );
}

export default EconomRoom;