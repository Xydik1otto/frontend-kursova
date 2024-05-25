// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.user.standart.module.css';

const UserStandart: FC = () => {
    return (
            <div className={styles["user_room"]}>
                <div className={styles["user_room_body"]}>
                    <img src="/img/standart_room.png" alt="Кімната Стандарт"/>
                    <div className={styles["user_room_info"]}>
                        <p className={styles["user_room_title"]}>
                            Стандарт
                        </p>
                        <p className={styles["user_room_subtitle"]}>
                            Затишні номери, де кожен день починається з вас. Відпочинок, комфорт та неперевершений сервіс - ваші найближчі сусіди тут.
                        </p>
                        <p className={styles["user_room_date"]}>
                            Дата:
                        </p>
                        <div className={styles["user_room_date_title"]}>
                            <p className={styles["user_room_date_start"]}>
                                19/05/2024 -
                            </p>
                            <p className={styles["user_room_date_end"]}>
                                24/05/2024
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default UserStandart;