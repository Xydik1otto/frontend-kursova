// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.eco.module.css';

const EconomRoom: FC = () => {
    return (
        <div className="eco_room">
            <Image
                width={500}
                height={272}
                src='/img/econom_room.png'
                alt='Кімната Економ'
            />
            <p className="room_class_eco">Економ</p>
            <p className="room_desc_eco">
                Ідеальний вибір для тих, хто шукає затишне<br/>
                проживання за доступною ціною у серці Карпат.
            </p>
            <p className="price_text_eco">Ціна від 1200 ₴</p>
            <button className="detail_button">Детальніше</button>
        </div>
    );
}

export default EconomRoom;