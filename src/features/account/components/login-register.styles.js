import styled from "styled-components";
import { Button } from "react-native-paper";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button)`
  padding: 2px;
  margin-left: 64px;
  margin-right: 64px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const ErrorContainer = styled.View`
  max-width: 250px;
  align-items: center;
  align-self: center;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
