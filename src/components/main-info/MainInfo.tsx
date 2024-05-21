// Core
import { FC } from 'react';
import Image from 'next/image';
// Styles
import styles from './styles.main.info.module.css';

const MainInfo: FC = () => {
    return (
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
                - чарівного готельно-ресторанного<br/> комплексу, який розташований у<br/> затишному куточку серця
                Карпат.<br/>
                Наші дерев'яні котеджі занурять вас у<br/> атмосферу спокою і комфорту, де<br/> кожен момент стає
                особливим.
            </p>
        </div>
    );
}
export default MainInfo;