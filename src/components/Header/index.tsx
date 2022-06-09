import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import {
  Container,
  TextPrimary,
  TextSecundary,
  ViewSecundary,
  ButtonContainer,
  ViewButton,
  ContainerIconPin
} from "./styled";
import { DateFormat } from "../../global/utils/DateFormat";

const Header = ({ date, dataHeader }) => {
  return (
    <Container>
      <ViewSecundary>
        <TextPrimary>
          {DateFormat(date)}
        </TextPrimary>
        <ContainerIconPin>
          <MaterialIcons name="location-pin" size={24} color="white" />
          <TextSecundary>
            {dataHeader.name}, {dataHeader.sys.country}
          </TextSecundary>
        </ContainerIconPin>
      </ViewSecundary>
      <ViewButton>
        <ButtonContainer>
          <MaterialCommunityIcons
            name="white-balance-sunny"
            size={24}
            color="yellow"
          />
          <MaterialCommunityIcons
            name="moon-waning-crescent"
            size={24}
            color="white"
          />
        </ButtonContainer>
      </ViewButton>
    </Container>
  );
};

export default Header;
