// Core
import {FC} from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.module.css';

const ComfortRoom: FC = () => {
    return (

        <div className="comfort_room">
            <Image
                width={500}
                height={272}
                src='/img/comfort_room.png'
                alt='Кімната Комфорт'
            />
            <p className="room_class_comfort">Комфорт</p>
            <p className="room_desc_comfort">
                Вишукані номери, де комфорт переплітається з<br/> елегантністю, створюючи
                ідеальний простір<br/> для вашого відпочинку.
            </p>
            <p className="price_text_comfort">Ціна від 1800 грн</p>
            <button className="detail_button_comfort">Детальніше</button>
        </div>
    );
}

export default ComfortRoom;