import React from "react";
import { View } from "react-native";
import Lottie from "../Lottie";
import LoadingLottie from "../../assets/animations/loading_Intro.json";

import { Container } from "./styled";

const Loading = () => {
  return (
    <Container>
      <Lottie autoPlay={true} height={350} width={350} img={LoadingLottie} />
    </Container>
  );
};

export default Loading;
