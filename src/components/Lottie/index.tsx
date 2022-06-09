import React from 'react';
import LottieView from "lottie-react-native";

// import { Container } from './styles';

const Lottie = ({autoPlay, width, height, img}) => {
  return (<>
    <LottieView
    autoPlay={autoPlay}
    style={{ width: width, height: height }}
    source={img}
    />
    </>
  );
}

export default Lottie;