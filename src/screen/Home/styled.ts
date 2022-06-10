import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const ContainerButton = styled.View`
  margin-top: 30px;
  align-items: center;
`;
