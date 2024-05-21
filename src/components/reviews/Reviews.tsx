// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.reviews.module.css';

const Reviews: FC = () => {
    return (
        <div className={styles["reviews"]}>
            <p className={styles["reviews_title"]}>Відгуки</p>
            <div className={styles["reviews_main"]}>
                <p className={styles["reviews_username"]}>User</p>
                <div className={styles["reviews_overall"]}>
                    <p className={styles["reviews_rating_desc"]}>Оцінка:</p>
                    <p className={styles["reviews_rating"]}>5</p>
                    <p className={styles["reviews_rating_total"]}>/5</p>
                </div>
                <p className={styles["reviews_comment_title"]}>Відгук:</p>
                <p className={styles["reviews_comment"]}>Готель вражає своєю чистотою та комфортом. Персонал дуже
                    привітний і завжди готовий допомогти. Зручне розташування із прекрасним видом з вікон.
                    Щасливий, що обрав цей готель для своєї подорожі.</p>
                <div className={styles["review_left"]}>
                    <button className={styles["review_button_left"]}>
                        <img src="/svg/arrowb.svg" alt="Вліво"/>
                    </button>
                </div>
                <div className={styles["review_right"]}>
                    <button className={styles["review_button_right"]}>
                        <img src="/svg/arrowb1.svg" alt="Вправо"/>
                    </button>
                </div>
            </div>
            <div className={styles["review_button"]}>
                <button className={styles["detail_button_review"]}>Написати відгук</button>
            </div>
        </div>
    );
}
export default Reviews;