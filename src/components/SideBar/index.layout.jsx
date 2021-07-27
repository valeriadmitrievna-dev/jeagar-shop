import React from 'react';
import { ReactComponent as Logo } from '../../assets/sidebar/Logo.svg';
import { ReactComponent as Home } from '../../assets/sidebar/Home.svg';
import { ReactComponent as LogOut } from '../../assets/sidebar/LogOut.svg';
import { ReactComponent as Settings } from '../../assets/sidebar/Settings.svg';
import { ReactComponent as Support } from '../../assets/sidebar/Support.svg';
import { ReactComponent as Sales } from '../../assets/sidebar/Sales.svg';
import { ReactComponent as Dashboard } from '../../assets/sidebar/Dashboard.svg';
import { ReactComponent as Notifications } from '../../assets/sidebar/Notifications.svg';

import * as S from './index.styled';
import { Link } from 'react-router-dom';

export default function SideBarLayout({ pathname }) {
  return (
    <S.SideBarContainer>
      <S.SidebarItemsContainer>
        <Logo />
        <S.SideBarItem active={pathname === '/'}>
          <Link to="/">
            <Home />
          </Link>
        </S.SideBarItem>
        <S.SideBarItem active={pathname === '/sales'}>
          <Link to="/sales">
            <Sales />
          </Link>
        </S.SideBarItem>
        <S.SideBarItem active={pathname === '/dashboard'}>
          <Link to="/dashboard">
            <Dashboard />
          </Link>
        </S.SideBarItem>
        <S.SideBarItem active={pathname === '/support'}>
          <Link to="/support">
            <Support />
          </Link>
        </S.SideBarItem>
        <S.SideBarItem active={pathname === '/notifications'}>
          <Link to="/notifications">
            <Notifications />
          </Link>
        </S.SideBarItem>
        <S.SideBarItem active={pathname === '/settings'}>
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
