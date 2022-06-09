import styled from "styled-components/native";

export const Container = styled.View`
  height: 10%;
  margin: 10px;
  border-radius: 15px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const TextSecundary = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin: 5px 0 0 5px;
`;

export const TextPrimary = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ViewSecundary = styled.View`
  max-width: 50%;
  justify-content: space-between;
`;

export const ViewButton = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background: ${({ theme }) => theme.COLORS.GRAY};
  border-radius: 20px;
  color: ${({ theme }) => theme.COLORS.GRAY};
  height: 40px;
  width: 80px;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const ContainerIconPin = styled.View`flex-direction: row;`;
