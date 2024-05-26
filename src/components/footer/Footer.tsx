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
            <div className={styles["footer_subtitle_hotel"]}>
                <p className={styles["footer_hotel_desc"]}>Готель у серці Карпат</p>
                <a className={styles["footer_about_hotel"]} href="#main_info_block">Про готель</a>
                <a className={styles["footer_action"]} href="#discount_block_main">Акції</a>
                <a className={styles["footer_rooms"]} href="#main_rooms_upper">Номери та ціни</a>
                <a className={styles["footer_reviews"]} href="#reviews">Відгуки</a>
            </div>
            <div className={styles["footer_subtitle_contacts"]}>
                <p className={styles["footer_contacts"]}>Контакти</p>
                <a className={styles["footer_adress"]}
                   href="https://maps.app.goo.gl/m2Y9X4RcSXV7x53p6">Ужгород, пров.Минайський 7</a>
                <a className={styles["footer_mail"]}
                   href="https://mail.google.com/mail/u/0/?authuser=volkovskiy22@gmail.com">solar.is.dachakovera@gmail.com</a>
                <a className={styles["footer_telephone"]} href="tel:+380637191493">+380637191493</a>
                <div className={styles["footer_social"]}>
                    <a className={styles["footer_inst"]} href="https://www.instagram.com/solaris_dacha/">
                        <img src="/svg/footer_insta.svg" alt="Інстаграм"/>
                    </a>
                    <a className={styles["footer_facebook"]} href="https://www.instagram.com/solaris_dacha/">
                        <img src="/svg/footer_facebook.svg" alt="Фейсбук"/>
                    </a>
                    <a className={styles["footer_twitter"]} href="https://www.instagram.com/solaris_dacha/">
                        <img src="/svg/footer_twitter.svg" alt="Твіттер"/>
                    </a>
                    <a className={styles["footer_telegram"]} href="https://www.instagram.com/solaris_dacha/">
                        <img src="/svg/footer_telegram.svg" alt="Телеграм"/>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Footer;