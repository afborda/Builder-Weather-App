import React from "react";
import { View, ActivityIndicator } from "react-native";

import { ButtonType, TextButton } from "./styled";

interface IButton {
  onPress: () => void;
  Loading: boolean;
}

const Button = ({ onPress, Loading }: IButton) => {
  return (
    <ButtonType onPress={onPress}>
      {Loading
        ? <ActivityIndicator size={"large"} color={"#FFFFFF80"} />
        : <TextButton>Atualizar</TextButton>}
    </ButtonType>
  );
};

export default Button;
