import { styled } from "styled-components";
import { Card } from "react-native-paper";

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  padding-top: ${(props) => props.theme.space[2]};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const Address = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.body};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const TempClose = styled.Text`
  color: red;
  padding-right: 10px;
  padding-bottom: 2.5px;
`;

export const SpaceView = styled.View`
  padding-left: 10px;
`;

export const Image15 = styled.Image`
  width: 15px;
  height: 15px;
`;

export const BoderCard = styled(Card)`
  border-color: black;
  border-width: 0.2px;
`;

export const CardCover = styled(Card.Cover)`
  padding: 4px;
  background-color: #e4dded;
`;
