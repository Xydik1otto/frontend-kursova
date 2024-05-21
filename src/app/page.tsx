// Core
import {FC} from "react";
// Components

import EconomRoomInfo from "@/components/econom-room-info/EconomRoomInfo";
import ComfortRoom from "@/components/comfort-room/ComfortRoom";
import EconomRoom from "@/components/econom-room/EconomRoom";
import StandartRoom from "@/components/standart-room/StandartRoom";
import LuxRoom from "@/components/lux-room/LuxRoom";
import Login from "@/components/login/Login";
import Registration from "@/components/registration/Registration";
import MainInfo from "@/components/main-info/MainInfo";
import Discount from "@/components/discount/Discount";
import Reviews from "@/components/reviews/Reviews";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Main_page from "@/components/main_page/Main_page";
import Registration_page from "@/components/registration-page/Registration_page";
import Login_page from "@/components/login-page/Login_page";
import {Montserrat_Alternates} from "next/font/google";

const montserrat = Montserrat_Alternates({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  preload: true,
  subsets: ['latin']
});

const Home: FC = () => {
  return (
    <div>
      {<Main_page/>}

    </div>

  );
}

export default Home;