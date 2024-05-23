"use client"
import { FC, useState } from 'react';
import styles from './styles.module.css';
import Link from "next/link";

const RegistrationPage: FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        const userData = {
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
        };

        console.log('Sending user data:', userData);

        try {
            const response = await fetch('http://localhost:5161/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Registration successful:', data);
            // Обробка успішної реєстрації
        } catch (error) {
            console.error('There was a problem with the registration request:', error);
            // Обробка помилки реєстрації
        }
    };
    return (
        <div className={styles["registration_page"]}>
            <div className={styles["registration_block"]}>
                <div className={styles.registration}>
                    <p className={styles.reg_title}>Реєстрація</p>
                    <p className={styles.reg_subtitle}>Створіть свій аккаунт</p>
                    <div className={styles.reg_input}>
                        <div className={styles.reg_input_name}>
                            <input
                                type="text"
                                className={styles.name_placeholder}
                                placeholder="Ім'я"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className={styles.reg_input_surname}>
                            <input
                                type="text"
                                className={styles.surname_placeholder}
                                placeholder="Прізвище"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className={styles.reg_input_email}>
                            <input
                                type="email"
                                className={styles.email_placeholder}
                                placeholder="e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={styles.reg_input_number}>
                            <input
                                type="text"
                                className={styles.number_placeholder}
                                placeholder="Телефон"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div className={styles.reg_input_password}>
                            <input
                                type="password"
                                className={styles.password_placeholder}
                                placeholder="Пароль"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <button className={styles.reg_button} onClick={handleRegister}>
                        Зареєструватись
                    </button>
                    <p className={styles.reg_have_account}>
                        <Link href='/login'>
                            Вже маєте аккаунт? Вхід
                        </Link>
                    </p>
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