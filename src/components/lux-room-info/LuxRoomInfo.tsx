// Core
import {FC} from 'react';
import Image from 'next/image';
// Styles
import styles from "./styles.lux.info.module.css";
const LuxRoomInfo: FC = () => {
    return (

        <div className={styles["lux_room_info"]}>
            <Image
                width={500}
                height={272}
                src='/img/lux_room.png'
                alt='Кімната Люкс інфо'
            />
            <p className={styles["room_class_lux_info"]}>Люкс</p>
            <p className={styles["room_desc_lux_info"]}>Розкішні номери люкс, створені для найбільш
                <br/>вибагливих гостей, які цінують бездоганний
                <br/>сервіс та неперевершений комфорт.</p>
            <p className={styles["price_text_lux_info"]}>Ціна від 2800 грн</p>
            <button className={styles["detail_button_info"]}>Забронювати</button>
            <div className={styles["horizontal_line1_info"]}></div>

            <div className={styles["room_stats_lux_info"]}>
                <p style={{marginRight: '35px'}}>50 м²</p>
                <p style={{marginRight: '28px'}}>Максимум гостей:</p>
                <p>2</p>
            </div>
            <div className={styles["room_benefits_lux_info"]}>
                <p style={{marginRight: '56px'}}>Кондиціонер</p>
                <p style={{marginRight: '56px'}}>Балкон</p>
                <p>WI-FI</p>
            </div>
            <div className={styles["room_conditioning_lux_icon_info"]}><img src='/svg/air.conditioning.svg' alt='Кондиціонер'/>
            </div>
            <div className={styles['room_eye_lux_icon_info']}><img src='/svg/eye.svg' alt='Балкон'/></div>
            <div className={styles['room_wifi_lux_icon_info']}><img src='/svg/wifi.svg' alt="Wi-Fi"/></div>
            <div className={styles["room_size_lux_icon_info"]}><img src='/svg/room.size.svg' alt="Розмір"/></div>
            <div className={styles["room_persons_lux_icon_info"]}><img src='/svg/persons.svg' alt="Персони"/></div>
            <div className={styles["horizontal_line2_info"]}></div>
            </div>
    );
}
export default LuxRoomInfo;