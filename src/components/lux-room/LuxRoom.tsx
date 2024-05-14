// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.lux.module.css';

const LuxRoom: FC = () => {
    return (
        <div className="lux_room">
            <Image
                width={500}
                height={272}
                src='/img/lux_room.png'
                alt='Кімната Люкс'
            />
            <p className="room_class_lux">Люкс</p>
            <p className="room_desc_lux">
                Розкішні номери люкс, створені для найбільш <br/>
                вибагливих гостей, які цінують бездоганний <br/>
                сервіс та неперевершений комфорт.
            </p>
            <p className="price_text_lux">Ціна від 2800 ₴</p>
            <button className="detail_button_lux">Детальніше</button>
        </div>
    );
}

export default LuxRoom;