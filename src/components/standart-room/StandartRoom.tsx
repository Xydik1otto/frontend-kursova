// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.standart.module.css';

const StandartRoom: FC = () => {
    return (
        <div className="standart_room">
            <Image
                width={500}
                height={272}
                src='/img/standart_room.png'
                alt='Кімната Стандарт'
            />
            <p className="room_class_standart">Стандарт</p>
            <p className="room_desc_standart">
                Затишні номери, де кожен день починається з<br/>
                вас. Відпочинок, комфорт та неперевершений<br/>
                сервіс - ваші найближчі сусіди тут.
            </p>
            <p className="price_text_standart">Ціна від 1400 ₴</p>
            <button className="detail_button_standart">Детальніше</button>
        </div>
    );
}

export default StandartRoom;