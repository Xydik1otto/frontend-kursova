// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.footer.module.css';

const Footer: FC = () => {
    return (
        <div className={styles["footer"]}>
            <div className={styles["footer_logo"]}>
                <img src="/svg/logo_footer.svg" alt="Лого"/>
                <p className={styles["footer_name"]}>solar.is</p>
            </div>
            <div className={styles["footer_title"]}>
                <p className={styles["footer_hotel_desc"]}>Готоль у серці Карпат</p>
                <p className={styles["footer_contacts"]}>Контакти</p>
            </div>
            <div className={styles["footer_subtitle_hotel"]}>
                <a className={styles["footer_about_hotel"]} href="https://www.youtube.com">Про готель</a>
                <a className={styles["footer_action"]} href="https://www.youtube.com">Акції</a>
                <a className={styles["footer_rooms"]} href="https://www.youtube.com">Номери та ціни</a>
                <a className={styles["footer_reviews"]} href="https://www.youtube.com">Відгуки</a>
            </div>
            <div className={styles["footer_subtitle_contacts"]}>
                <a className={styles["footer_adress"]} href="https://www.youtube.com">Ужгород, вул.Загорська 12</a>
                <a className={styles["footer_mail"]} href="https://www.youtube.com">solar.is.dachakovera@gmail.com</a>
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
            <div className={styles["footer_privacy"]}>
                <p className={styles["footer_privacy_text"]}>
                    © 2024 by Solaris . All Reserved.
                </p>
            </div>
        </div>
    );
}
export default Footer;