// Core
import {FC} from 'react';
// Styles
import styles from './styles.module.css';
// Components
import UserPage from "@/components/pages/user/UserPage";
import Discount from "@/components/discount/Discount";
import ReviewsWrite from "@/components/pages/main/ReviewsWrite";



const TestPage: FC = () => {
    return (
        <>
            <Discount/>
        </>
    );
}

export default TestPage;