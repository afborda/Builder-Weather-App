import { FontAwesome5 } from "@expo/vector-icons";

import {
  Container,
  ContainerLottie,
  ContainerText,
  TextPrimary,
  ContainerTemperature,
  Temperature,
  Ball,
  TemperatureMaxMin,
  Temp,
  TempValue
} from "./styled";
import { AroundNumber } from "../../global/utils/ToolsNumber";
import { FirstCapitalWord } from "../../global/utils/ToolsString";
import Lottie from "../Lottie";
import Intro from "../../assets/animations/loading_Intro.json";
import { AnimationSalaect } from "../../global/utils/SelectAnimationsWeather";

import Thunderstorm from "../../assets/animations/Thunderstorm.json";
import Drizzle from "../../assets/animations/Drizzle.json";
import Rain from "../../assets/animations/Drizzle.json";
import Snow from "../../assets/animations/Snow.json";
import Clear from "../../assets/animations/Clear.json";
import Clouds from "../../assets/animations/Cloud.json";
interface IMain {
  data: {
    weather: Array<any>;
    main: {
      temp: string;
      temp_min: string;
      temp_max: string;
    };
  };
}

const Main = ({ data }: IMain) => {
  let img: any = "";

  switch (data.weather[0].main) {
    case "Thunderstorm":
      img = Thunderstorm;
      break;
    case "Drizzle":
      img = Drizzle;
      break;
    case "Rain":
      img = Rain;
      break;
    case "Snow":
      img = Snow;
      break;
    case "Clear":
      img = Clear;
      break;
    case "Clouds":
      img = Clouds;
      break;
    default:
      img = Clear;
      break;
  }

  return (
    <Container>
      <ContainerLottie>
        <Lottie autoPlay width={200} height={220} img={img} />
      </ContainerLottie>
      <ContainerText>
        <TextPrimary>
          {FirstCapitalWord(data.weather[0].description)}
        </TextPrimary>
        <ContainerTemperature>
          <Temperature>
            {AroundNumber(data.main.temp)}
          </Temperature>
          <Ball />
        </ContainerTemperature>
        <TemperatureMaxMin>
          <Temp>
            <TempValue>
              Min {AroundNumber(data.main.temp_min)}
            </TempValue>
            <FontAwesome5 name="temperature-low" size={24} color="#034078" />
          </Temp>
          <Temp>
            <TempValue>
              Max {AroundNumber(data.main.temp_max)}
            </TempValue>
            <FontAwesome5 name="temperature-high" size={24} color="#E2C029" />
          </Temp>
        </TemperatureMaxMin>
      </ContainerText>
    </Container>
  );
};

export default Main;
