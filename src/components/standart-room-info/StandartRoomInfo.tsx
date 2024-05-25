// Core
import {FC} from 'react';
import Image from 'next/image';
// Styles
import styles from "./styles.standart.info.module.css";
const StandartRoomInfo: FC = () => {
    return (

        <div className={styles["standart_room_info"]}>
            <Image
                width={500}
                height={272}
                src='/img/standart_room.png'
                alt='Кімната Стандарт інфо'
            />
            <p className={styles["room_class_standart_info"]}>Стандарт</p>
            <p className={styles["room_desc_standart_info"]}>Затишні номери, де кожен день починається з<br/>вас. Відпочинок,
                комфорт та неперевершений<br/>сервіс - ваші найближчі сусіди тут.</p>
            <p className={styles["price_text_standart_info"]}>Ціна від 1400 грн</p>
            <button className={styles["detail_button_info"]}>Забронювати</button>
            <div className={styles["horizontal_line1_info"]}></div>

            <div className={styles["room_stats_standart_info"]}>
                <p style={{marginRight: '35px'}}>36 м²</p>
                <p style={{marginRight: '28px'}}>Максимум гостей:</p>
                <p>2</p>
            </div>
            <div className={styles["room_benefits_standart_info"]}>
                <p style={{marginRight: '56px'}}>Кондиціонер</p>
                <p style={{marginRight: '56px'}}>Балкон</p>
                <p>WI-FI</p>
            </div>
            <div className={styles["room_conditioning_standart_icon_info"]}><img src='/svg/air.conditioning.svg' alt='Кондиціонер'/>
            </div>
            <div className={styles['room_eye_standart_icon_info']}><img src='/svg/eye.svg' alt='Балкон'/></div>
            <div className={styles['room_wifi_standart_icon_info']}><img src='/svg/wifi.svg' alt="Wi-Fi"/></div>
            <div className={styles["room_size_standart_icon_info"]}><img src='/svg/room.size.svg' alt="Розмір"/></div>
            <div className={styles["room_persons_standart_icon_info"]}><img src='/svg/persons.svg' alt="Персони"/></div>
            <div className={styles["horizontal_line2_info"]}></div>
            </div>
    );
}
export default StandartRoomInfo;