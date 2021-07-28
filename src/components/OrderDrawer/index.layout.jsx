import React from "react";
import * as I from "../../index.styled";
import * as O from "./index.styled";
import { ReactComponent as Trash } from "../../assets/Trash.svg";

export default function OrderDrawerLayout({
  order,
  order_types,
  discount,
  handleSetOrderType,
  handleChangeOrderItemCount,
  handleDeleteOrderItem,
  handleAddOrderNotes,
  handleContinueToPayment,
}) {
  return (
    <I.StaticDrawer drawer={order.orderList.length > 0}>
      <I.StaticDrawerTitle>Order #{order.number}</I.StaticDrawerTitle>
      <O.DrawerOrderTypes>
        {order_types.map((type, id) => (
          <O.DrawerOrderType
            key={id}
            active={type === order.type}
            onClick={() => handleSetOrderType(type)}
          >
            {type}
          </O.DrawerOrderType>
        ))}
      </O.DrawerOrderTypes>
      <O.DrawerOrderItemsHeader>
        <span>item</span>
        <span>qty</span>
        <span>price</span>
      </O.DrawerOrderItemsHeader>
      <O.DrawerOrderList>
        {order.orderList.map((dish, id) => (
          <O.OrderedDishItem key={id}>
            <O.OrderedDishItemTitle>
              <img src={dish.cover} />
              <div>
                <p>{dish.title}</p>
                <span>${dish.price}</span>
              </div>
            </O.OrderedDishItemTitle>
            <O.OrderItemInput
              centered
              value={dish.count || ""}
              maxLength={2}
              onChange={(e) => handleChangeOrderItemCount(dish, e.target.value)}
              onBlur={(e) =>
                handleChangeOrderItemCount(
                  dish,
                  parseInt(e.target.value)
                    ? (parseInt(e.target.value) === 0
                        ? 1
                        : parseInt(e.target.value)) || 1
                    : 1
                )
              }
            />
            <O.OrderItemPrice>
              ${dish.price * (dish.count || 1)}
            </O.OrderItemPrice>
            <O.OrderItemInput
              placeholder="Order notes.."
              onChange={(e) => handleAddOrderNotes(e.target.value, dish)}
              value={dish.note || ""}
            />
            <O.OrderItemDelete onClick={() => handleDeleteOrderItem(dish)}>
              <Trash />
            </O.OrderItemDelete>
          </O.OrderedDishItem>
        ))}
      </O.DrawerOrderList>
      <>
        <O.DrawerOrderCostInfo>
          <div>
            <span>Discount</span>
            <b>${discount}</b>
          </div>
          <div>
            <span>Sub total</span>
            <b>
              $
              {order.orderList.length &&
                order.orderList
                  .map((order) => order.price * (order.count || 1))
                  .reduce((a, b) => a + b)
                  .toFixed(2)}
            </b>
          </div>
        </O.DrawerOrderCostInfo>
        <I.OrangeButton onClick={handleContinueToPayment}>
          Continue to Payment
        </I.OrangeButton>
      </>
    </I.StaticDrawer>
  );
}
