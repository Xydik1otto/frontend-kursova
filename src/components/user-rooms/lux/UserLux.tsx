// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.user.lux.module.css';

const UserLux: FC = () => {
    return (
            <div className={styles["user_room"]}>
                <div className={styles["user_room_body"]}>
                    <img src="/img/standart_room.png" alt="Кімната Люкс"/>
                    <div className={styles["user_room_info"]}>
                        <p className={styles["user_room_title"]}>
                            Люкс
                        </p>
                        <p className={styles["user_room_subtitle"]}>
                            Розкішні номери люкс, створені для найбільш вибагливих гостей, які цінують бездоганний сервіс та неперевершений комфорт.
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
export default UserLux;