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
import Sol from "../../assets/animations/4801-weather-partly-shower.json";

interface IMain {
  data: object;
}

const Main = ({ data }: IMain) => {
  return (
    <Container>
      <ContainerLottie>
        <Lottie autoPlay width={200} height={200} img={Sol} />
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
