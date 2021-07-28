import { message } from "antd";
import React from "react";
import OrderDrawerLayout from "./index.layout";

export default function OrderDrawer({
  order,
  setOrder,
  order_types,
  discount,
  handleSetOrderType,
}) {
  const handleChangeOrderItemCount = (dish, count) => {
    setOrder((prop) => {
      return {
        ...prop,
        orderList: order.orderList.map((d) => {
          if (d.title === dish.title) {
            d.count = count === 0 ? 1 : parseInt(count);
          }
          return d;
        }),
      };
    });
  };
  const handleDeleteOrderItem = (dish) => {
    setOrder((prop) => {
      return {
        ...prop,
        orderList: order.orderList.filter((d) => d.title !== dish.title),
      };
    });
  };
  const handleAddOrderNotes = (note, dish) => {
    setOrder((prop) => {
      return {
        ...prop,
        orderList: order.orderList.map((d) => {
          if (d.title === dish.title) d.note = note;
          return d;
        }),
      };
    });
  };

  const handleContinueToPayment = () => {
    if (order.orderList.length) {
      const full_order = {
        order: order.orderList,
        cost: order.orderList
          .map((order) => order.price * (order.count || 1))
          .reduce((a, b) => a + b)
          .toFixed(2),
        discount,
      };
      const unavailable = full_order.order.find(
        (dish) => dish.count > dish.available
      );
      if (unavailable) {
        message.error({
          content: (
            <>
              We dont have enoung count of <b>{unavailable.title}</b>. We have
              only {unavailable.available} bowls but you require{" "}
              {unavailable.count}
            </>
          ),
          duration: 10,
        });
      }
    }
  };

  return (
    <OrderDrawerLayout
      order={order}
      setOrder={setOrder}
      order_types={order_types}
      discount={discount}
      handleSetOrderType={handleSetOrderType}
      handleChangeOrderItemCount={handleChangeOrderItemCount}
      handleDeleteOrderItem={handleDeleteOrderItem}
      handleAddOrderNotes={handleAddOrderNotes}
      handleContinueToPayment={handleContinueToPayment}
    />
  );
}
