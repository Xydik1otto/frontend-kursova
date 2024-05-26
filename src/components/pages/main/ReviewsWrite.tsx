"use client"
import { FC, useState } from 'react';
import Image from 'next/image';
import styles from '../../reviews-write/styles.reviews.write.module.css';

const ReviewsWrite: FC = () => {
    const [rating, setRating] = useState<number | null>(null);
    const [message, setMessage] = useState<string>('');
    const [userFirstName, setUserFirstName] = useState<string>(''); // Припустимо, що ім'я користувача ви отримуєте окремо

    const handleRatingClick = (value: number) => {
        setRating(value);
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    const handleSendClick = async () => {
        const feedbackData = {
            feedBackId: 0,
            message,
            evaluation: rating,
            userFirstName: "string",
        };

        try {
            const response = await fetch('http://localhost:5161/api/feedback-create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedbackData),
            });

            if (!response.ok) {
                throw new Error('Failed to send feedback');
            }

            // Очищуємо форму після успішної відправки
            setRating(null);
            setMessage('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className={styles["reviews_write"]}>
            <p className={styles["reviews_write_title"]}>
                Залишити коментар
            </p>
            <div className={styles["reviews_write_rating"]}>
                <p className={styles["rating_desc"]}>
                    Оцінка:
                </p>
                <div className={styles["rating_buttons"]}>
                    {[1, 2, 3, 4, 5].map(value => (
                        <button
                            key={value}
                            className={styles[`rating_${value}`]}
                            onClick={() => handleRatingClick(value)}
                        >
                            <p>{value}</p>
                        </button>
                    ))}
                </div>
            </div>
            <div className={styles["writing_text_title"]}>
                <p>
                    Відгук:
                </p>
            </div>
            <div className={styles["writing_review_text"]}>
                <textarea
                    placeholder="Введіть текст тут"
                    value={message}
                    onChange={handleMessageChange}
                />
            </div>
            <div className={styles["button_send_area"]}>
                <button className={styles["button_send"]} onClick={handleSendClick}>
                    <p>
                        Надіслати
                    </p>
                </button>
            </div>
        </div>
    );
};

export default ReviewsWrite;
