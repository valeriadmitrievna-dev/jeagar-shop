import React from "react";
import { ReactComponent as Logo } from "../../assets/sidebar/Logo.svg";
import { ReactComponent as Home } from "../../assets/sidebar/Home.svg";
import { ReactComponent as Exit } from "../../assets/sidebar/Exit.svg";
import { ReactComponent as Settings } from "../../assets/sidebar/Settings.svg";
import { ReactComponent as Support } from "../../assets/sidebar/Support.svg";
import { ReactComponent as Sales } from "../../assets/sidebar/Sales.svg";
import { ReactComponent as Dashboard } from "../../assets/sidebar/Dashboard.svg";
import { ReactComponent as Notifications } from "../../assets/sidebar/Notifications.svg";

import * as S from "./index.styled";
import { Link } from "react-router-dom";

export default function SideBarLayout() {
  return (
    <S.SideBarContainer>
      <Logo />
      <Link to="/"></Link>
      <Home />
      <Link to="/sales">
        <Sales />
      </Link>
      <Link to="/dashboard">
        <Dashboard />
      </Link>
      <Link to="/support">
        <Support />
      </Link>
      <Link to="/notifications">
        <Notifications />
      </Link>
      <Link to="/settings">
        <Settings />
      </Link>
      <S.LogOutButton>
        <Exit />
      </S.LogOutButton>
    </S.SideBarContainer>
  );
}
