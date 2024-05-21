// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.login.module.css';

const Login: FC = () => {
    return (
        <div className={styles["login"]}>
            <p className={styles["log_title"]}>Вхід</p>
            <p className={styles["log_subtitle"]}>Введіть свою електронну пошту та пароль</p>
            <div className={styles["log_input"]}>
                <div className={styles["log_input_email"]}>
                    <input
                        type="email"
                        className={styles["email_placeholder"]}
                        placeholder="e-mail"
                    />
                </div>
                <div className={styles["log_input_password"]}>
                    <input
                        type="password"
                        className={styles["password_placeholder"]}
                        placeholder="Пароль"
                    />
                </div>
            </div>
            <button className={styles["log_button"]}>Увійти</button>
            <p className={styles["log_have_account"]}>Не маєте аккаунта? <a href="URL">Створіть його!</a></p>
            <a className={styles["log_lost_password"]} href="URL">Забули свій пароль?</a>
        </div>
    );
}
export default Login;