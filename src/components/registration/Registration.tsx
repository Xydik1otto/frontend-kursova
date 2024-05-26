// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.registration.module.css';

const Registration: FC = () => {
    return (
        <div className={styles["registration"]}>
            <p className={styles["reg_title"]}>Реєстрація</p>
            <p className={styles["reg_subtitle"]}>Створіть свій аккаунт</p>
            <div className={styles["reg_input"]}>
                <div className={styles["reg_input_name"]}>
                    <input
                        type="text"
                        className={styles["name_placeholder"]}
                        placeholder="Ім'я"
                    />
                </div>
                <div className={styles["reg_input_surname"]}>
                    <input
                        type="text"
                        className={styles["surname_placeholder"]}
                        placeholder="Прізвище"
                    />
                </div>
                <div className={styles["reg_input_email"]}>
                    <input
                        type="email"
                        className={styles["email_placeholder"]}
                        placeholder="e-mail"
                    />
                </div>
                <div className={styles["reg_input_number"]}>
                    <input
                        type="text"
                        className={styles["number_placeholder"]}
                        placeholder="Телефон"
                    />
                </div>
                <div className={styles["reg_input_password"]}>
                    <input
                        type="password"
                        className={styles["password_placeholder"]}
                        placeholder="Пароль"
                    />
                </div>
            </div>
            <button className={styles["reg_button"]}>Зареєструватись</button>
            <p className={styles["reg_have_account"]}>Вже маєте аккаунт? <a href="URL">Вхід</a></p>
        </div>
    );
}
export default Registration;