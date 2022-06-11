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

import Thunderstorm from "../../assets/animations/Thunderstorm.json";
import Drizzle from "../../assets/animations/Drizzle.json";
import Rain from "../../assets/animations/Drizzle.json";
import Snow from "../../assets/animations/Snow.json";
import Clear from "../../assets/animations/Clear.json";
import Clouds from "../../assets/animations/Cloud.json";
import { Platform } from "react-native";
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
        {Platform.OS === "ios" ? (
          <Lottie autoPlay width={200} height={220} img={img} />
        ) : (
          <Lottie autoPlay width={150} height={150} img={img} />
        )}
      </ContainerLottie>
      <ContainerText>
        <TextPrimary testID="text_description">
          {FirstCapitalWord(data.weather[0].description)}
        </TextPrimary>
        <ContainerTemperature>
          <Temperature testID="text_temp">
            {AroundNumber(data.main.temp)}
          </Temperature>
          <Ball />
        </ContainerTemperature>
        <TemperatureMaxMin>
          <Temp>
            <TempValue testID="text_temp_min">
              Min {AroundNumber(data.main.temp_min)}
            </TempValue>
            <FontAwesome5 name="temperature-low" size={24} color="#034078" />
          </Temp>
          <Temp>
            <TempValue testID="text_temp_min">
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
