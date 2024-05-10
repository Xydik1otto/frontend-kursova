// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.registration.module.css';

const Registration: FC = () => {
    return (
        <div className={styles["registration"]}>
            <p className="reg_title">Реєстрація</p>
            <p className="reg_subtitle">Створіть свій аккаунт</p>
            <div className="reg_input">
                <div className="reg_input_name"><input type="text" placeholder="Ім'я"/></div>
                <div className="reg_input_surname"><input type="text" placeholder="Прізвище"/></div>
                <div className="reg_input_email"><input type="email" placeholder="e-mail"/></div>
                <div className="reg_input_password"><input type="password" placeholder="пароль"/></div>
            </div>
            <button className="reg_button">Зареєструватись</button>
            <p className="reg_have_account">Вже маєте аккаунт? <a href="URL">Вхід</a></p>
            <div className="horizontal-line1"></div>
            <div className="horizontal-line2"></div>
            <p className="reg_alternative">Реєстрація за допомогою:</p>
            <a href="#" className="reg_google_link">Продовжити з Google</a>
            <a href="#" className="reg_facebook_link">Продовжити з Facebook</a>
        </div>
    );
}
export default Registration;