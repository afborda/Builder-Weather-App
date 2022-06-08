import { DateFormat } from "../../global/utils/DateFormat";
import React from "react";
import { Text, View } from "react-native";

import { Container } from "./styled";
import { ILocation } from "./types";

const Home = ({ data }: ILocation) => {
  return (
    <Container>
      <View>
        <Text>
          {DateFormat(data.timestamp)}
        </Text>
        <Text />
      </View>
    </Container>
  );
};

export default Home;
