import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PxToVw } from '../../index.styled';
import SideBarLayout from './index.layout';

export default function SideBar() {
  const { pathname } = useLocation();
  const [offsetTopCursor, setOffsetTopCursor] = useState();
  const handleMoveItem = (e) => {
    setOffsetTopCursor(e.currentTarget.offsetTop + 'px');
  };
  useEffect(() => {
    setOffsetTopCursor(
      document.querySelector(`a[href*='${pathname}']`).offsetTop + 'px'
    );
  }, []);

  return (
    <SideBarLayout
      pathname={pathname}
      offsetTopCursor={offsetTopCursor}
      handleMoveItem={handleMoveItem}
    />
  );
}
