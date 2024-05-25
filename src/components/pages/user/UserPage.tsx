// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.user.page.module.css';

const UserPage: FC = () => {
    return (
        <div className={styles["user_page"]}>
            <div className={styles["user_body"]}>
                <div className={styles["user"]}>
                    <div className={styles["user_title"]}>
                        <p>Профіль</p>
                    </div>
                    <div className={styles["user_data"]}>
                        <div className={styles["user_name"]}>
                            <p className={styles["user_name_desc"]}>
                                Ім'я:
                            </p>
                            <p className={styles["user_name_data"]}>
                                User
                            </p>
                        </div>
                        <div className={styles["user_surname"]}>
                            <p className={styles["user_surname_desc"]}>
                                Прізвище:
                            </p>
                            <p className={styles["user_surname_data"]}>
                                User
                            </p>
                        </div>
                        <div className={styles["user_email"]}>
                            <p className={styles["user_email_desc"]}>
                                Пошта:
                            </p>
                            <p className={styles["user_email_data"]}>
                                qwerty@gmail.com
                            </p>
                        </div>
                        <div className={styles["user_number"]}>
                            <p className={styles["user_number_desc"]}>
                                Телефон:
                            </p>
                            <p className={styles["user_number_data"]}>
                                +380999999999
                            </p>
                        </div>
                        <div className={styles["user_password"]}>
                            <p className={styles["user_password_desc"]}>
                                Пароль:
                            </p>
                            <p className={styles["user_password_data"]}>
                                qwertytrewq1213454
                            </p>
                        </div>
                    </div>
                    <div className={styles["user_button"]}>
                        <button className={styles["user_redactor"]}>
                            <p>
                                Редагувати
                            </p>
                        </button>
                        <button className={styles["user_logout"]}>
                            <p>
                                Вийти з акаунту
                            </p>
                        </button>
                    </div>
                    <div className={styles["user_title"]}>
                        <p>Мій номер</p>
                    </div>
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
                </div>
            </div>
            <div className={styles["footer"]}>
                <div className={styles["footer_logo"]}>
                <img src="/svg/logo_footer.svg" alt="Лого"/>
                    <p className={styles["footer_name"]}>solar.is</p>
                </div>
                <div className={styles["footer_subtitle_hotel"]}>
                    <p className={styles["footer_hotel_desc"]}>Готель у серці Карпат</p>
                    <a className={styles["footer_about_hotel"]} href="https://www.youtube.com">Про готель</a>
                    <a className={styles["footer_action"]} href="https://www.youtube.com">Акції</a>
                    <a className={styles["footer_rooms"]} href="https://www.youtube.com">Номери та ціни</a>
                    <a className={styles["footer_reviews"]} href="https://www.youtube.com">Відгуки</a>
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
export default UserPage;