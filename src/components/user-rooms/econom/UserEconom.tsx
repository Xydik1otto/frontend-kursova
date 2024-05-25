// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.user.econom.module.css';

const UserEconom: FC = () => {
    return (
            <div className={styles["user_room"]}>
                <div className={styles["user_room_body"]}>
                    <img src="/img/econom_room.png" alt="Кімната економ"/>
                    <div className={styles["user_room_info"]}>
                        <p className={styles["user_room_title"]}>
                            Економ
                        </p>
                        <p className={styles["user_room_subtitle"]}>
                            Ідеальний вибір для тих, хто шукає затишне проживання за доступною ціною у серці
                            Карпат.
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
export default UserEconom;