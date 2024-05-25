// Core
import {FC} from "react";
// Components
import MainPage from "@/components/pages/main/MainPage";
import UserPage from "@/components/pages/user/UserPage";
import Discount from "@/components/discount/Discount";
import ReviewsWrite from "@/components/reviews-write/ReviewsWrite";
import BookingMessage from "@/components/booking-message/BookingMessage";
import EconomRoomInfo from "@/components/econom-room-info/EconomRoomInfo";
import StandartRoomInfo from "@/components/standart-room-info/StandartRoomInfo";
import ComfortRoomInfo from "@/components/comfort-room-info/ComfortRoomInfo";
import LuxRoomInfo from "@/components/lux-room-info/LuxRoomInfo";
import Reviews from "@/components/reviews/Reviews";
import UserEconom from "@/components/user-rooms/econom/UserEconom";
import UserComfort from "@/components/user-rooms/comfort/UserComfort";
import UserStandart from "@/components/user-rooms/standart/UserStandart";
import UserLux from "@/components/user-rooms/lux/UserLux";

const Home: FC = () => <UserLux/>

export default Home;