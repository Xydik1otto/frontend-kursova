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

const Home: FC = () => {
  return (
    <div>
     {<Registration/>}

    </div>

  );
}

export default Home;