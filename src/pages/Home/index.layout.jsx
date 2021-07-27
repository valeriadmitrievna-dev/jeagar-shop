import { format } from "date-fns";
import React from "react";
import * as I from "../../index.styled";
import * as H from "./index.styled";
import { all_dishes, menu_tabs } from "./../../constants/home";
import { Drawer } from "antd";
import { PxToVw } from "./../../index.styled";

export default function HomeLayout({
  activeTab,
  handleSetActiveTab,
  activeTabLine,
  drawer,
  handleShowDrawer,
  handleCloseDrawer,
}) {
  return (
    <I.MainContainer drawer={drawer}>
      <div>
        <I.PageHeader>
          <I.PageTitle>
            <h2>Jaegar Resto</h2>
            <p>{format(new Date(), "EEEE, d MMM yyyy")}</p>
          </I.PageTitle>
          <H.HomeSearch placeholder="Search for food, coffe, etc.." />
        </I.PageHeader>
        <H.HomeNav line={activeTabLine}>
          {menu_tabs.map((tab, id) => (
            <H.HomeNavItem
              onClick={(e) => handleSetActiveTab(e, id)}
              active={activeTab === id}
              key={id}
            >
              {tab}
            </H.HomeNavItem>
          ))}
        </H.HomeNav>
        <H.HomeContentHeader>Choose dishes</H.HomeContentHeader>
        <H.HomeContentDishes drawer={drawer}>
          {all_dishes
            .filter((dish) => dish.category === menu_tabs[activeTab])
            .map((dish, id) => (
              <H.DishCard key={id} onClick={handleShowDrawer}>
                <img src={dish.cover} alt="" />
                <h5>{dish.title}</h5>
                <span>$ {dish.price}</span>
                <p>{dish.available} Bowls available</p>
              </H.DishCard>
            ))}
        </H.HomeContentDishes>
      </div>
      <I.StaticDrawer drawer={drawer}>
        drawer
        <button onClick={handleCloseDrawer}>close</button>
      </I.StaticDrawer>
    </I.MainContainer>
  );
}
