import { format } from "date-fns";
import React from "react";
import * as I from "../../index.styled";
import * as H from "./index.styled";
import { all_dishes, menu_tabs, order_types } from "./../../constants/home";
import { Select } from "antd";
import { ReactComponent as Arrow } from "../../assets/arrow-ios-down.svg";
import OrderDrawer from "./../../components/OrderDrawer/index";

export default function HomeLayout({
  activeTab,
  handleSetActiveTab,
  activeTabLine,
  order,
  setOrder,
  discount,
  handleSetOrder,
  handleSetOrderType,
}) {
  return (
    <I.MainContainer drawer={order.orderList.length > 0}>
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
        <H.HomeContentHeader>
          Choose dishes
          <Select
            defaultValue={order.type}
            value={order.type}
            onChange={(e) => handleSetOrderType(e)}
            showArrow={true}
            suffixIcon={<Arrow />}
          >
            {order_types.map((type, id) => (
              <Select.Option key={id} value={type}>
                {type}
              </Select.Option>
            ))}
          </Select>
        </H.HomeContentHeader>
        <H.HomeContentDishes drawer={order.orderList.length > 0}>
          {all_dishes
            .filter((dish) => dish.category === menu_tabs[activeTab])
            .map((dish, id) => (
              <H.DishCard key={id} onClick={() => handleSetOrder(dish)}>
                <img src={dish.cover} alt="" />
                <H.DishCardContainer>
                <h5>{dish.title}</h5>
                <h2>$ {dish.price}</h2>
                <p>{dish.available} Bowls available</p>
                <h3>{dish.description}</h3>
                <h4>Calories: {dish.calories}</h4>
                </H.DishCardContainer>
              </H.DishCard>
            ))}
        </H.HomeContentDishes>
      </div>
      <OrderDrawer
        order={order}
        setOrder={setOrder}
        order_types={order_types}
        discount={discount}
        handleSetOrderType={handleSetOrderType}
      />
    </I.MainContainer>
  );
}
