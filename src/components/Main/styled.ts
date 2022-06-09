import styled from "styled-components/native";

export const Container = styled.View`height: 70%;`;

export const ContainerLottie = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
export const ContainerText = styled.View`
  flex: 1;
  align-items: center;
`;
export const TextPrimary = styled.Text`
  font-size: 28px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SECONDARY};
  margin-bottom: 20px;
`;
export const ContainerTemperature = styled.View`flex-direction: row;`;
export const Temperature = styled.Text`
  font-size: 120px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const Ball = styled.View`
  border-color: ${({ theme }) => theme.COLORS.BALL};
  border-radius: 50px;
  border-width: 6px;
  width: 30px;
  height: 30px;
  margin-top: 15px;
`;
export const TemperatureMaxMin = styled.View`
  flex-direction: row;
  border-radius: 30px;
  height: 60px;
  align-items: center;
  justify-content: space-around;
  margin: 10px 10px 0 10px;
`;
export const Temp = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITEOPACITY};
  height: 60px;
  width: 40%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-left: 5px;
  flex-direction: row;
`;
export const TempValue = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 18px;
  margin-right: 10px;
`;
