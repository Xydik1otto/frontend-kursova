// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.header.module.css';

const Header: FC = () => {
    return (
        <div className={styles["header"]}>
            <a className={styles["header_main"]} href="https://www.youtube.com">
                <img src="/svg/header_home.svg" alt="Головна"/>
                <p>Головна</p>
            </a>
            <a className={styles["header_restaurant"]} href="https://www.youtube.com">
                <img src="/svg/header_restaurant.svg" alt="Ресторан"/>
                <p>Ресторан</p>
            </a>
            <a className={styles["header_logo"]} href="https://www.youtube.com">
                <img src="/svg/header_logo.svg" alt="Логотип"/>
            </a>
            <div className={styles["header_number"]}>
                <img src="/svg/header_number.svg" alt="Номер"/>
                <p>+380777777777</p>
            </div>
            <a className={styles["header_account"]} href="https://www.youtube.com">
                <img src="/svg/header_account.svg" alt="Аккаунт"/>
                <p>Аккаунт</p>
            </a>
        </div>
    );
}
export default Header;