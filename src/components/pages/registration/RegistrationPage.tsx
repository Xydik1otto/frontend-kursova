// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.module.css';

const RegistrationPage: FC = () => {
    return (
        <div className={styles["registration_page"]}>
            <div className={styles["registration_block"]}>
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
export default RegistrationPage;