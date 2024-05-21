// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.eco.module.css';

const EconomRoom: FC = () => {
    return (
        <div className={styles["eco_room"]}>
            <Image
                width={500}
                height={272}
                src='/img/econom_room.png'
                alt='Кімната Економ'
            />
            <p className={styles["room_class_eco"]}>Економ</p>
            <p className={styles["room_desc_eco"]}>
                Ідеальний вибір для тих, хто шукає затишне<br/>
                проживання за доступною ціною у серці Карпат.
            </p>
            <p className={styles["price_text_eco"]}>Ціна від 1200 ₴</p>
            <button className={styles["detail_button"]}>Детальніше</button>
        </div>
    );
}

export default EconomRoom;