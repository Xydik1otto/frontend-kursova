// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.user.comfort.module.css';

const UserComfort: FC = () => {
    return (
            <div className={styles["user_room"]}>
                <div className={styles["user_room_body"]}>
                    <img src="/img/comfort_room.png" alt="Кімната комфорт"/>
                    <div className={styles["user_room_info"]}>
                        <p className={styles["user_room_title"]}>
                            Комфорт
                        </p>
                        <p className={styles["user_room_subtitle"]}>
                            Вишукані номери, де комфорт переплітається з елегантністю, створюючи ідеальний простір для вашого відпочинку.
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
export default UserComfort;