import React from "react";
import Lottie from "../Lottie";
import { ButtonType, TextButton } from "./styled";

import Sun from "../../assets/animations/loading_Button.json";
interface IButton {
  onPress: () => void;
  Loading: boolean;
}

const Button = ({ onPress, Loading }: IButton) => {
  return (
    <ButtonType onPress={onPress}>
      {Loading
        ? <Lottie autoPlay={true} height={200} width={200} img={Sun} />
        : <TextButton>Atualizar</TextButton>}
    </ButtonType>
  );
};

export default Button;
