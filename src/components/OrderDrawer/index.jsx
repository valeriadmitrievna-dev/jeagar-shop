import { message, notification } from "antd";
import { differenceInMonths } from "date-fns";
import React, { useState } from "react";
import OrderDrawerLayout from "./index.layout";

export default function OrderDrawer({
  order,
  setOrder,
  orderTypes,
  discount,
  handleSetOrderType,
}) {
  const [isPaymentAvailable, setPaymentAvailable] = useState(false);
  const [payment, setPayment] = useState({
    type: "",
  });
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
  const handleCloseDrawer = () => {
    setOrder((prop) => {
      return {
        ...prop,
        orderList: [],
      };
    });
  };

  const handleContinueToPayment = () => {
    if (order.orderList.length) {
      const full_order = {
        order: order.orderList,
        cost: parseFloat(
          order.orderList
            .map((order) => order.price * (order.count || 1))
            .reduce((a, b) => a + b)
            .toFixed(2)
        ),
        discount,
        type: order.type,
        delivery:
          order.type === "delivery"
            ? parseFloat(
                order.orderList
                  .map((order) => order.price * (order.count || 1))
                  .reduce((a, b) => a + b)
                  .toFixed(2)
              ) > 25
              ? 0
              : 5
            : 0,
      };
      const unavailable = full_order.order.find(
        (dish) => dish.count > dish.available
      );
      if (unavailable) {
        notification.error({
          message: (
            <>
              We dont have enoung count of <b>{unavailable.title}</b>. We have
              only {unavailable.available} bowls but you require{" "}
              {unavailable.count}
            </>
          ),
          duration: 10,
        });
      } else {
        console.log(full_order);
        setPaymentAvailable(true);
      }
    }
  };
  const handleChangePaymentType = (type) => {
    setPayment((prop) => {
      return {
        type,
      };
    });
  };
  const handleChangePaymentInfo = (e) => {
    if (!e.target) {
      setPayment((prop) => {
        return {
          ...prop,
          date: new Date(e),
        };
      });
    } else {
      if (
        e.target.id === "card_number" &&
        !parseInt(e.target.value) &&
        e.target.value !== ""
      )
        return;
      if (
        e.target.id === "date" &&
        !parseInt(e.target.value.replace("/", "")) &&
        !parseInt(e.target.value.replace("/", "")) === 0 &&
        e.target.value !== ""
      )
        return;
      if (
        e.target.id === "cvv" &&
        !parseInt(e.target.value) &&
        !parseInt(e.target.value) === 0 &&
        e.target.value !== ""
      )
        return;
      else {
        let value;
        switch (e.target.id) {
          case "card_number":
            value = e.target.value
              .replace(/[^\dA-Z]/g, "")
              .replace(/(.{4})/g, "$1 ")
              .trim();
            break;
          case "date":
            value = e.target.value
              .replace(/[^\dA-Z]/g, "")
              .replace(/(.{2})/, "$1/")
              .trim();
            break;
          case "cvv":
            value = e.target.value.replace(/[^\dA-Z]/g, "").trim();
            break;
          default:
            value = e.target.value;
            break;
        }
        setPayment((prop) => {
          return {
            ...prop,
            [e.target.id]: value,
          };
        });
      }
    }
  };

  const handleSubmitPayment = () => {
    if (payment.type === "card") {
      if (!payment.name || payment.name.replace(/[' ']+/, "") === "") {
        message.error("Enter cardholder name");
        return;
      } else if (!payment.card_number) {
        message.error("Enter card number");
        return;
      } else if (!payment.date) {
        message.error("Enter card expiration date");
        return;
      } else if (!payment.cvv) {
        message.error("Enter card CVV");
        return;
      } else if (!payment.name) {
        message.error("Enter cardholder name");
        return;
      } else if (differenceInMonths(new Date(payment.date), new Date()) <= 0) {
        message.error("Select date in future");
        return;
      } else if (
        payment.card_number.length < 19 ||
        payment.card_number.length > 19
      ) {
        message.error("Enter valid card number");
        return;
      } else if (payment.cvv.length < 3 || payment.cvv.length > 3) {
        message.error("Enter valid CVV");
        return;
      }
    }
    message.success("Your order is accepted!");
    setPaymentAvailable(false);
    handleCloseDrawer();
    setPayment({
      type: "",
    });
  };

  return (
    <OrderDrawerLayout
      order={order}
      setOrder={setOrder}
      orderTypes={orderTypes}
      discount={discount}
      handleSetOrderType={handleSetOrderType}
      handleChangeOrderItemCount={handleChangeOrderItemCount}
      handleDeleteOrderItem={handleDeleteOrderItem}
      handleAddOrderNotes={handleAddOrderNotes}
      handleContinueToPayment={handleContinueToPayment}
      isPaymentAvailable={isPaymentAvailable}
      setPaymentAvailable={setPaymentAvailable}
      handleCloseDrawer={handleCloseDrawer}
      payment={payment}
      handleChangePaymentType={handleChangePaymentType}
      handleChangePaymentInfo={handleChangePaymentInfo}
      handleSubmitPayment={handleSubmitPayment}
    />
  );
}
