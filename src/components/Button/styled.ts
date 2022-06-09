import styled from "styled-components/native";

export const ButtonType = styled.TouchableOpacity`
  width: 300px;
  height: 70px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  margin: 10px 10px 0 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 25px;
`;
