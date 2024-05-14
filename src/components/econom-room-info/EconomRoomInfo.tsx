// Core
import {FC} from 'react';
import Image from 'next/image';
// Styles
import styles from "/styles.eco.info.module.css";
const EconomRoomInfo: FC = () => {
    return (

        <div className="eco_room_info">
            <Image
                width={500}
                height={272}
                src='/img/econom_room.png'
                alt='Кімната Економ інфо'
            />
            <p className="room_class_eco_info">Економ</p>
            <p className="room_desc_eco_info">Ідеальний вибір для тих, хто шукає затишне<br/> проживання за доступною ціною у
                серці Карпат.</p>
            <p className="price_text_eco_info">Ціна від 1200 грн</p>
            <button className="detail_button_info">Забронювати</button>
            <div className="horizontal_line1_info"></div>

            <div className="room_stats_eco_info">
                <p style={{marginRight: '35px'}}>30 м²</p>
                <p style={{marginRight: '28px'}}>Максимум гостей:</p>
                <p>2</p>
            </div>
            <div className="room_benefits_eco_info">
                <p style={{marginRight: '56px'}}>Кондиціонер</p>
                <p style={{marginRight: '56px'}}>Балкон</p>
                <p>WI-FI</p>
            </div>
            <div className="room_conditioning_eco_icon_info"><img src='/svg/air.conditioning.svg' alt='Кондиціонер'/>
            </div>
            <div className='room_eye_eco_icon_info'><img src='/svg/eye.svg' alt='Балкон'/></div>
            <div className='room_wifi_eco_icon_info'><img src='/svg/wifi.svg' alt="Wi-Fi"/></div>
            <div className="room_size_eco_icon_info"><img src='/svg/room.size.svg' alt="Розмір"/></div>
            <div className="room_persons_eco_icon_info"><img src='/svg/persons.svg' alt="Персони"/></div>
            <div className="horizontal_line2_info"></div>
            </div>
    );
}
export default EconomRoomInfo;