import React from "react";
import LottieView from "lottie-react-native";

// import { Container } from './styles';

interface ILottie {
  autoPlay: boolean;
  width: number;
  height: number;
  img: any;
}

const Lottie = ({ autoPlay, width, height, img }: ILottie) => {
  return (
    <LottieView
      autoPlay={autoPlay}
      style={{ width: width, height: height }}
      source={img}
    />
  );
};

export default Lottie;
