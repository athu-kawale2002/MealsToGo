import React, { useContext } from "react";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import { Spacer } from "../../../components/spacer/components.spacer";
import {
  AccountBackground,
  AccountCover,
  ErrorContainer,
  AccountContainer,
  AuthButton,
  Title,
} from "../components/login-register.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";

export const LoginScreen = ({ navigation }) => {
  const { onLogin, error } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  return (
    <AccountBackground>
      <Spacer size="large">
        <Title>Meals To Go</Title>
      </Spacer>
      <AccountCover />
      <AccountContainer>
        <TextInput
          label="Email"
          value={email}
          autoCapitalize="none"
          right={<TextInput.Icon icon="email" />}
          onChangeText={(e) => setEmail(e)}
        />
        <Spacer size="large">
          <TextInput
            label="Password"
            value={password}
            autoCapitalize="none"
            secureTextEntry={isPasswordSecure}
            right={
              <TextInput.Icon
                icon={isPasswordSecure ? "eye-off" : "eye"}
                onPress={() => {
                  isPasswordSecure
                    ? setIsPasswordSecure(false)
                    : setIsPasswordSecure(true);
                }}
              />
            }
            onChangeText={(e) => setPassword(e)}
          />
        </Spacer>
        {error && (
          <ErrorContainer>
            <Spacer size="large">
              <Text variant="error">{error}</Text>
            </Spacer>
          </ErrorContainer>
        )}
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="outlined"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton
          icon="arrow-left-circle-outline"
          mode="outlined"
          onPress={() => navigation.goBack()}
        >
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
