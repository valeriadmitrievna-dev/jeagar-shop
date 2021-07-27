import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import SideBarLayout from './index.layout';

export default function SideBar() {
    const {pathname} = useLocation()
    return <SideBarLayout pathname={pathname} />
}
