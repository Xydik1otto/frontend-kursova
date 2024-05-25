// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.booking.message.module.css';

const BookingMessage: FC = () => {
    return (
        <div className={styles["message_body"]}>
            <p className={styles["message_title"]}>
                Повідомлення
            </p>
            <p className={styles["message_success"]}>
                Запит на бронювання номеру успішно надіслано!
                За кілька хвилин з вами зв’яжеться наш працівник
                для підтвердження бронювання.
            </p>
            <button className={styles["message_button"]}>
                <p>
                    ОК
                </p>
            </button>
        </div>
    );
}
export default BookingMessage;