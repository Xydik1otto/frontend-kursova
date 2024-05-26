"use client"
import { FC, useState } from 'react';
import Image from 'next/image';
import styles from './styles.main.module.css';

const MainPage: FC = () => {
    const discounts = [
        {
            imgSrc: "/img/discount.png",
            name: "Акція",
            propose: "Спеціальна пропозиція:",
            desc: "Затишний однокімнатний номер в \"Solar.is\"! Ідеально підходить для зручного та комфортного відпочинку під час вашої подорожі до Карпат.",
        },
        {
            imgSrc: "/img/discount2.png",
            name: "Акція 2",
            propose: "Інша пропозиція:",
            desc: "Затишний та сучасний двокімнатний номер у 'Solar.is'! Ідеально підходить для релаксу та приємного проведення часу в атмосфері комфорту та затишку.",
        },
    ];
    const reviews = [
        {
            username: "User1",
            rating: 5,
            comment: "Готель вражає своєю чистотою та комфортом. Персонал дуже привітний і завжди готовий допомогти. Зручне розташування із прекрасним видом з вікон. Щасливий, що обрав цей готель для своєї подорожі."
        },
        {
            username: "User2",
            rating: 4,
            comment: "Чудовий готель з приємним персоналом та комфортними умовами. З задоволенням повернуся ще раз!"
        },
        // Додайте інші відгуки, якщо потрібно
    ];


    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + discounts.length) % discounts.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % discounts.length);
    };

    const currentDiscount = discounts[currentIndex];
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const handlePrevReview = () => {
        setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const handleNextReview = () => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const currentReview = reviews[currentReviewIndex];

    return (
        <div className={styles["main_page"]}>
            <div className={styles["main_page_photo"]}>
                <img src="/img/main_page_photo.png" alt="solar.is"/>
            </div>
            <div id="main_info_block" className={styles["main_info_block"]}>
                <div className={styles["main_info"]}>
                    <Image
                        width={452}
                        height={534}
                        src='/img/main_info_img.png'
                        alt='Інформаційний блок'
                    />
                    <p className={styles["main_info_title"]}>Готель у серці<br/> Карпат</p>
                    <p className={styles["main_info_subtitle"]}>
                        Ласкаво запрошуємо до Solar.is –<br/>
                        - чарівного готельно-ресторанного<br/> комплексу, який розташований у<br/> затишному куточку
                        серця
                        Карпат.<br/>
                        Наші дерев'яні котеджі занурять вас у<br/> атмосферу спокою і комфорту, де<br/> кожен момент
                        стає
                        особливим.
                    </p>
                </div>
            </div>
            <div id="discount_block_main" className={styles["discount_block_main"]}>
                <div className={styles["discount"]}>
                    <div className={styles["discount_left"]}>
                        <button className={styles["discount_button_left"]} onClick={handlePrev}>
                            <img src="/svg/arrow.svg" alt="Вліво"/>
                        </button>
                    </div>
                    <div className={styles["discount_block"]}>
                        <img className={styles["discount_img"]} src={currentDiscount.imgSrc} alt="Знижка"/>
                        <p className={styles["discount_name"]}>{currentDiscount.name}</p>
                        <p className={styles["discount_propose"]}>{currentDiscount.propose}</p>
                        <p className={styles["discount_desc"]}>{currentDiscount.desc}</p>
                        <button className={styles["detail_button_discount"]}>Забронювати</button>
                    </div>
                    <div className={styles["discount_right"]}>
                        <button className={styles["discount_button_right"]} onClick={handleNext}>
                            <img src="/svg/arrow2.svg" alt="Вправо"/>
                        </button>
                    </div>
                </div>
            </div>
            <div id="main_rooms_upper" className={styles["main_rooms_upper"]}>
                <div className={styles["eco_room"]}>
                    <Image
                        width={500}
                        height={272}
                        src='/img/econom_room.png'
                        alt='Кімната Економ'
                    />
                    <p className={styles["room_class_eco"]}>Економ</p>
                    <p className={styles["room_desc_eco"]}>
                        Ідеальний вибір для тих, хто шукає затишне<br/>
                        проживання за доступною ціною у серці Карпат.
                    </p>
                    <p className={styles["price_text_eco"]}>Ціна від 1200 ₴</p>
                    <button className={styles["detail_button"]}>Детальніше</button>
                </div>
                <div className={styles["standart_room"]}>
                    <Image
                        width={500}
                        height={272}
                        src='/img/standart_room.png'
                        alt='Кімната Стандарт'
                    />
                    <p className={styles["room_class_standart"]}>Стандарт</p>
                    <p className={styles["room_desc_standart"]}>
                        Затишні номери, де кожен день починається з<br/>
                        вас. Відпочинок, комфорт та неперевершений<br/>
                        сервіс - ваші найближчі сусіди тут.
                    </p>
                    <p className={styles["price_text_standart"]}>Ціна від 1400 ₴</p>
                    <button className={styles["detail_button_standart"]}>Детальніше</button>
                </div>
            </div>
            <div className={styles["main_rooms_downer"]}>
                <div className={styles["comfort_room"]}>
                    <Image
                        width={500}
                        height={272}
                        src='/img/comfort_room.png'

                        alt='Кімната Комфорт'
                    />
                    <p className={styles["room_class_comfort"]}>Комфорт</p>
                    <p className={styles["room_desc_comfort"]}>
                        Вишукані номери, де комфорт переплітається з<br/> елегантністю, створюючи
                        ідеальний простір<br/> для вашого відпочинку.
                    </p>
                    <p className={styles["price_text_comfort"]}>Ціна від 1800 грн</p>
                    <button className={styles["detail_button_comfort"]}>Детальніше</button>
                </div>
                <div className={styles["lux_room"]}>
                    <Image
                        width={500}
                        height={272}
                        src='/img/lux_room.png'
                        alt='Кімната Люкс'
                    />
                    <p className={styles["room_class_lux"]}>Люкс</p>
                    <p className={styles["room_desc_lux"]}>
                        Розкішні номери люкс, створені для найбільш <br/>
                        вибагливих гостей, які цінують бездоганний <br/>
                        сервіс та неперевершений комфорт.
                    </p>
                    <p className={styles["price_text_lux"]}>Ціна від 2800 ₴</p>
                    <button className={styles["detail_button_lux"]}>Детальніше</button>
                </div>
            </div>
            <div id="reviews" className={styles["reviews"]}>
                <p className={styles["reviews_title"]}>Відгуки</p>
                <div className={styles["reviews_main"]}>
                    <p className={styles["reviews_username"]}>{currentReview.username}</p>
                    <div className={styles["reviews_overall"]}>
                        <p className={styles["reviews_rating_desc"]}>Оцінка:</p>
                        <p className={styles["reviews_rating"]}>{currentReview.rating}</p>
                        <p className={styles["reviews_rating_total"]}>/5</p>
                    </div>
                    <p className={styles["reviews_comment_title"]}>Відгук:</p>
                    <p className={styles["reviews_comment"]}>{currentReview.comment}</p>
                    <div className={styles["review_left"]}>
                        <button className={styles["review_button_left"]} onClick={handlePrevReview}>
                            <img src="/svg/arrowb.svg" alt="Вліво"/>
                        </button>
                    </div>
                    <div className={styles["review_right"]}>
                        <button className={styles["review_button_right"]} onClick={handleNextReview}>
                            <img src="/svg/arrowb1.svg" alt="Вправо"/>
                        </button>
                    </div>
                    <div className={styles["review_button"]}>
                        <button className={styles["detail_button_review"]}>Написати відгук</button>
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
        </div>
    );
}
export default MainPage;