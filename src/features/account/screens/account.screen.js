import React from "react";
import { AccountBackground, AccountCover } from "../components/account.styles";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

export const AccountScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
    </AccountBackground>
  );
};
