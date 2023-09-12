import React from "react";
import { Spacer } from "../../../components/spacer/components.spacer";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Spacer size="large">
        <Title>Meals To Go</Title>
      </Spacer>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="outlined"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>

        <Spacer size="large">
          <AuthButton
            icon="progress-pencil"
            mode="outlined"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
