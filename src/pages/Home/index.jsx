import React, { useState } from "react";
import HomeLayout from "./index.layout";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [dishToShow, setDishToShow] = useState({});
  const [drawer, setDrawer] = useState(false);
  const [activeTabLine, setActiveTabLine] = useState(0);
  const handleSetActiveTab = (e, id) => {
    setActiveTabLine({
        left: e.target.offsetLeft,
        width: e.target.offsetWidth
    });
    setActiveTab(id);
  };
  const handleShowDrawer = () => {
    setDrawer(true);
  };
  const handleCloseDrawer = () => {
    setDrawer(false);
  };

  return (
    <HomeLayout
      activeTab={activeTab}
      handleSetActiveTab={handleSetActiveTab}
      activeTabLine={activeTabLine}
      drawer={drawer}
      handleShowDrawer={handleShowDrawer}
      handleCloseDrawer={handleCloseDrawer}
    />
  );
}
