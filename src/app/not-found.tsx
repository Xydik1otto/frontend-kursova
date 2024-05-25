'use client'
// Core
import {FC, useEffect} from 'react';
import {useRouter} from "next/navigation";
// Styles
import styles from './styles.module.css';

const NotFound: FC = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    })

    return (
        <div style={{marginTop: '300px'}}>
            Not found
        </div>
    );
}

export default NotFound;