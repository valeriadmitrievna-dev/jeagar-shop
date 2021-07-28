import React, { useState } from "react";
import { order_types } from "../../constants/home";
import HomeLayout from "./index.layout";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const discount = 0;
  const [order, setOrder] = useState({
    number: Math.floor(Math.random() * 100000),
    orderList: [],
    type: order_types[0],
  });
  const [activeTabLine, setActiveTabLine] = useState(0);
  const handleSetActiveTab = (e, id) => {
    setActiveTabLine({
      left: e.target.offsetLeft,
      width: e.target.offsetWidth,
    });
    setActiveTab(id);
  };
  const handleSetOrder = (dish) => {
    const candidateDish = order.orderList.find((d) => d.title === dish.title);
    if (candidateDish) {
      setOrder((prop) => {
        return {
          ...prop,
          orderList: order.orderList.map((d) => {
            if (d.title === candidateDish.title) {
              d.count = d.count + 1;
            }
            return d;
          }),
        };
      });
    } else
      setOrder((prop) => {
        return {
          ...prop,
          orderList: [...order.orderList, dish],
        };
      });
  };
  const handleSetOrderType = (type) => {
    setOrder((prop) => {
      return {
        ...prop,
        type,
      };
    });
  };

  return (
    <HomeLayout
      activeTab={activeTab}
      handleSetActiveTab={handleSetActiveTab}
      activeTabLine={activeTabLine}
      order={order}
      setOrder={setOrder}
      discount={discount}
      handleSetOrder={handleSetOrder}
      handleSetOrderType={handleSetOrderType}
    />
  );
}
