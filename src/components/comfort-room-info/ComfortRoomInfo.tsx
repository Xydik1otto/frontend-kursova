// Core
import {FC} from 'react';
import Image from 'next/image';
// Styles
import styles from "./styles.comfort.info.module.css";
const ComfortRoomInfo: FC = () => {
    return (

        <div className={styles["comfort_room_info"]}>
            <Image
                width={500}
                height={272}
                src='/img/comfort_room.png'
                alt='Кімната Комфорт інфо'
            />
            <p className={styles["room_class_comfort_info"]}>Комфорт</p>
            <p className={styles["room_desc_comfort_info"]}>Вишукані номери, де комфорт переплітається з
                <br/>елегантністю, створюючи ідеальний простір
                <br/>для вашого відпочинку.</p>
            <p className={styles["price_text_comfort_info"]}>Ціна від 1800 грн</p>
            <button className={styles["detail_button_info"]}>Забронювати</button>
            <div className={styles["horizontal_line1_info"]}></div>

            <div className={styles["room_stats_comfort_info"]}>
                <p style={{marginRight: '35px'}}>40 м²</p>
                <p style={{marginRight: '28px'}}>Максимум гостей:</p>
                <p>2</p>
            </div>
            <div className={styles["room_benefits_comfort_info"]}>
                <p style={{marginRight: '56px'}}>Кондиціонер</p>
                <p style={{marginRight: '56px'}}>Балкон</p>
                <p>WI-FI</p>
            </div>
            <div className={styles["room_conditioning_comfort_icon_info"]}><img src='/svg/air.conditioning.svg' alt='Кондиціонер'/>
            </div>
            <div className={styles['room_eye_comfort_icon_info']}><img src='/svg/eye.svg' alt='Балкон'/></div>
            <div className={styles['room_wifi_comfort_icon_info']}><img src='/svg/wifi.svg' alt="Wi-Fi"/></div>
            <div className={styles["room_size_comfort_icon_info"]}><img src='/svg/room.size.svg' alt="Розмір"/></div>
            <div className={styles["room_persons_comfort_icon_info"]}><img src='/svg/persons.svg' alt="Персони"/></div>
            <div className={styles["horizontal_line2_info"]}></div>
            </div>
    );
}
export default ComfortRoomInfo;