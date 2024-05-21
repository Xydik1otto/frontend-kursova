// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.login.page.module.css';
import Link from "next/link";

const LoginPage: FC = () => {
    return (
        <div className={styles["login_page"]}>
            <div className={styles["login_block"]}>
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
                    <p className={styles["log_have_account"]}>Не маєте аккаунта?
                        <Link href='/registration'>
                            Створіть його!
                        </Link>
                    </p>
                    <a className={styles["log_lost_password"]} href="URL">Забули свій пароль?</a>
                </div>
            </div>
            <div className={styles["footer"]}>
                <div className={styles["footer_logo"]}>
                    <img src="/svg/logo_footer.svg" alt="Лого"/>
                    <p className={styles["footer_name"]}>solar.is</p>
                </div>
                <div className={styles["footer_subtitle_contacts"]}>
                    <p className={styles["footer_contacts"]}>Контакти</p>
                    <a className={styles["footer_adress"]} href="https://www.youtube.com">Ужгород, вул.Загорська 12</a>
                    <a className={styles["footer_mail"]}
                       href="https://www.youtube.com">solar.is.dachakovera@gmail.com</a>
                    <a className={styles["footer_telephone"]} href="https://www.youtube.com">+380777777777</a>
                    <div className={styles["footer_social"]}>
                        <a className={styles["footer_inst"]} href="https://www.youtube.com">
                            <img src="/svg/footer_insta.svg" alt="Інстаграм"/>
                        </a>
                        <a className={styles["footer_facebook"]} href="https://www.youtube.com">
                            <img src="/svg/footer_facebook.svg" alt="Фейсбук"/>
                        </a>
                        <a className={styles["footer_twitter"]} href="https://www.youtube.com">
                            <img src="/svg/footer_twitter.svg" alt="Твіттер"/>
                        </a>
                        <a className={styles["footer_telegram"]} href="https://www.youtube.com">
                            <img src="/svg/footer_telegram.svg" alt="Телеграм"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;