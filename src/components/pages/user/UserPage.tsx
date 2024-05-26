"use client"
// Core
import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
// Styles
import styles from './styles.user.page.module.css';
import Link from "next/link";

async function checkUserAuthentication() {
    try {
        const response = await fetch('http://localhost:5161/api/user/checkAuth', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Include your authentication headers here
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.isAuthenticated;
    } catch (error) {
        console.error('There was a problem with the authentication check:', error);
        return false;
    }
}


const UserPage: FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
        id: 0,
        firstName: 'User',
        lastName: 'User',
        email: 'qwerty@gmail.com',
        phoneNumber: '+380999999999',
        password: 'qwertytrewq1213454'
    });

    useEffect(() => {
        checkUserAuthentication().then(isAuthenticated => {
            if (!isAuthenticated) {
                window.location.href = '/login';
            }
        });
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const toggleEdit = async () => {
        if (isEditing) {
            // If the user was editing, save the changes
            try {
                const response = await fetch('http://localhost:5161/api/user/edit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('User edit successful:', data);
                // Обробка успішного редагування
            } catch (error) {
                console.error('There was a problem with the edit request:', error);
                // Обробка помилки редагування
            }
        }

        setIsEditing(!isEditing);
    };

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
                            {isEditing ? (
                                <input
                                    className={styles["user_name_data"]}
                                    value={user.firstName}
                                    onChange={handleInputChange}
                                    name="firstName"
                                />
                            ) : (
                                <p className={styles["user_name_data"]}>
                                    {user.firstName}
                                </p>
                            )}
                        </div>
                        <div className={styles["user_surname"]}>
                            <p className={styles["user_surname_desc"]}>
                                Прізвище:
                            </p>
                            {isEditing ? (
                                <input
                                    className={styles["user_surname_data"]}
                                    value={user.lastName}
                                    onChange={handleInputChange}
                                    name="lastName"
                                />
                            ) : (
                                <p className={styles["user_surname_data"]}>
                                    {user.lastName}
                                </p>
                            )}
                        </div>
                        <div className={styles["user_email"]}>
                            <p className={styles["user_email_desc"]}>
                                Пошта:
                            </p>
                            {isEditing ? (
                                <input
                                    className={styles["user_email_data"]}
                                    value={user.email}
                                    onChange={handleInputChange}
                                    name="email"
                                />
                            ) : (
                                <p className={styles["user_email_data"]}>
                                    {user.email}
                                </p>
                            )}
                        </div>
                        <div className={styles["user_number"]}>
                            <p className={styles["user_number_desc"]}>
                                Телефон:
                            </p>
                            {isEditing ? (
                                <input
                                    className={styles["user_number_data"]}
                                    value={user.phoneNumber}
                                    onChange={handleInputChange}
                                    name="phoneNumber"
                                />
                            ) : (
                                <p className={styles["user_number_data"]}>
                                    {user.phoneNumber}
                                </p>
                            )}
                        </div>
                        <div className={styles["user_password"]}>
                            <p className={styles["user_password_desc"]}>
                                Пароль:
                            </p>
                            {isEditing ? (
                                <input
                                    className={styles["user_password_data"]}
                                    value={user.password}
                                    onChange={handleInputChange}
                                    name="password"
                                />
                            ) : (
                                <p className={styles["user_password_data"]}>
                                    **********
                                </p>
                            )}
                        </div>
                    </div>
                    <div className={styles["user_button"]}>
                        <button className={styles["user_redactor"]} onClick={toggleEdit}>
                            <p>
                                {isEditing ? 'Готово' : 'Редагувати'}
                            </p>
                        </button>
                        <button className={styles["user_logout"]}>
                            <p>
                                <Link href='/registration'>
                                    Вийти з акаунту
                                </Link>
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
        </div>

    );
}
export default UserPage;
