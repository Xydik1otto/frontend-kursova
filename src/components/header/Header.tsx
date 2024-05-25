// Core
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Styles
import styles from './styles.header.module.css';

const Header: FC = () => {
    return (
        <div className={styles["header"]}>
            <Link href="http://localhost:3000" className={styles["header_main"]}>
                <img src="/svg/header_home.svg" alt="Головна"/>
                <p>Головна</p>
            </Link>
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className={styles["header_restaurant"]}>
                <img src="/svg/header_restaurant.svg" alt="Ресторан"/>
                <p>Ресторан</p>
            </Link>
            <Link href="https://www.youtube.com" className={styles["header_logo"]}>
                <img src="/svg/header_logo.svg" alt="Логотип"/>
            </Link>
            <div className={styles["header_number"]}>
                <img src="/svg/header_number.svg" alt="Номер"/>
                <p>+380777777777</p>
            </div>
            <Link href="https://www.youtube.com" className={styles["header_account"]}>
                <img src="/svg/header_account.svg" alt="Аккаунт"/>
                <p>Аккаунт</p>
            </Link>
        </div>
    );
}
export default Header;