// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.login.module.css';

const Login: FC = () => {
    return (
        <div className="login">
            <p className="log_title">Вхід</p>
            <p className="log_subtitle">Введіть свою електронну пошту та пароль</p>
            <div className="log_input">
                <div className="log_input_email"><input type="email" placeholder="e-mail"/></div>
                <div className="log_input_password"><input type="password" placeholder="пароль"/></div>
            </div>
            <button className="log_button">Увійти</button>
            <p className="log_have_account">Не маєте аккаунта? <a href="URL">Створіть його!</a></p>
            <a className="log_lost_password" href="URL">Забули свій пароль?</a>
        </div>
    );
}
export default Login;