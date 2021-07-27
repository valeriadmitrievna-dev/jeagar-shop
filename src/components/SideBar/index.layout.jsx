import React from "react";
import { ReactComponent as Logo } from "../../assets/sidebar/Logo.svg";
import { ReactComponent as Home } from "../../assets/sidebar/Home.svg";
import { ReactComponent as LogOut } from "../../assets/sidebar/LogOut.svg";
import { ReactComponent as Settings } from "../../assets/sidebar/Settings.svg";
import { ReactComponent as Support } from "../../assets/sidebar/Support.svg";
import { ReactComponent as Sales } from "../../assets/sidebar/Sales.svg";
import { ReactComponent as Dashboard } from "../../assets/sidebar/Dashboard.svg";
import { ReactComponent as Notifications } from "../../assets/sidebar/Notifications.svg";

import * as S from "./index.styled";
import { Link } from "react-router-dom";

export default function SideBarLayout({
  pathname,
  handleMoveItem,
  offsetTopCursor,
}) {
  return (
    <S.SideBarContainer>
      <S.SideBarCursor top={offsetTopCursor}>
        <S.SideBarCursorBcg></S.SideBarCursorBcg>
      </S.SideBarCursor>
      <S.SidebarItemsContainer>
        <Logo />
        <S.SideBarItem
          active={pathname === '/'}
          onClick={(e) => handleMoveItem(e)}
        >
          <Link to="/">
            <Home />
          </Link>
        </S.SideBarItem>
        <S.SideBarItem
          active={pathname === '/sales'}
          onClick={(e) => handleMoveItem(e)}
        >
          <Link to="/sales">
            <Sales />
          </Link>
        </S.SideBarItem>
        <S.SideBarItem
          active={pathname === '/dashboard'}
          onClick={(e) => handleMoveItem(e)}
        >
          <Link to="/dashboard">
            <Dashboard />
          </Link>
        </S.SideBarItem>
        <S.SideBarItem
          active={pathname === '/support'}
          onClick={(e) => handleMoveItem(e)}
        >
          <Link to="/support">
            <Support />
          </Link>
        </S.SideBarItem>
        <S.SideBarItem
          active={pathname === '/notifications'}
          onClick={(e) => handleMoveItem(e)}
        >
          <Link to="/notifications">
            <Notifications />
          </Link>
        </S.SideBarItem>
        <S.SideBarItem
          active={pathname === '/settings'}
          onClick={(e) => handleMoveItem(e)}
        >
          <Link to="/settings">
            <Settings />
          </Link>
        </S.SideBarItem>
      </S.SidebarItemsContainer>

      <S.LogOutButton>
        <LogOut />
      </S.LogOutButton>
    </S.SideBarContainer>
  );
}
