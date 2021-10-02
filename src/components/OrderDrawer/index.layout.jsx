import React from "react";
import * as I from "../../index.styled";
import * as O from "./index.styled";
import { ReactComponent as Trash } from "../../assets/Trash.svg";
import { ReactComponent as CreditCard } from "../../assets/Card.svg";
import { ReactComponent as Paypal } from "../../assets/Paypal.svg";
import { ReactComponent as Cash } from "../../assets/Wallet.svg";
import { DatePicker, Drawer } from "antd";

export default function OrderDrawerLayout({
  order,
  orderTypes,
  discount,
  handleSetOrderType,
  handleChangeOrderItemCount,
  handleDeleteOrderItem,
  handleAddOrderNotes,
  handleContinueToPayment,
  isPaymentAvailable,
  setPaymentAvailable,
  handleCloseDrawer,
  payment,
  handleChangePaymentType,
  handleChangePaymentInfo,
  handleSubmitPayment,
}) {
  return (
    <I.StaticDrawer drawer={order.orderList.length > 0}>
      <Drawer
        placement="right"
        onClose={() => setPaymentAvailable(false)}
        closable={false}
        visible={isPaymentAvailable}
        width={I.PxToVw(440)}
      >
        <I.StaticDrawerTitle bordered>Payment</I.StaticDrawerTitle>
        <I.DrawerCloseButton onClick={() => setPaymentAvailable(false)} />
        <O.PaymentMethods>
          <div>
            <input
              type="radio"
              name="payment_method"
              id="card"
              onChange={(e) => handleChangePaymentType(e.target.id)}
            />
            <label htmlFor="card">
              <CreditCard />
              <span>creadit card</span>
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="payment_method"
              id="paypal"
              onChange={(e) => handleChangePaymentType(e.target.id)}
            />
            <label htmlFor="paypal">
              <Paypal />
              <span>paypal</span>
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="payment_method"
              id="cash"
              onChange={(e) => handleChangePaymentType(e.target.id)}
            />
            <label htmlFor="cash">
              <Cash />
              <span>cash</span>
            </label>
          </div>
        </O.PaymentMethods>
        <O.PaymentInfo>
          {payment.type === "card" && (
            <>
              <I.InputGroup>
                <label htmlFor="name">Cardholder name</label>
                <I.GrayInput
                  placeholder="John Doe"
                  id="name"
                  value={payment.name || ""}
                  onChange={handleChangePaymentInfo}
                />
              </I.InputGroup>
              <I.InputGroup>
                <label htmlFor="card_number">Card number</label>
                <I.GrayInput
                  placeholder="0000 0000 0000 0000"
                  id="card_number"
                  onChange={handleChangePaymentInfo}
                  value={payment.card_number || ""}
                  maxLength={19}
                />
              </I.InputGroup>
              <I.InputGroupRow>
                <I.InputGroup>
                  <label htmlFor="date">Expiration date</label>
                  <DatePicker
                    onChange={handleChangePaymentInfo}
                    id="date"
                    format={"MM/YY"}
                    showToday={false}
                    allowClear={false}
                    picker="month"
                  />
                </I.InputGroup>
                <I.InputGroup>
                  <label htmlFor="cvv">CVV</label>
                  <I.GrayInput
                    placeholder="CVV"
                    type="password"
                    id="cvv"
                    maxLength={3}
                    value={payment.cvv || ""}
                    onChange={handleChangePaymentInfo}
                  />
                </I.InputGroup>
              </I.InputGroupRow>
              {order.type === "delivery" && (
                <I.InputGroup>
                  <label htmlFor="address">Delivery address</label>
                  <I.GrayInput
                    id="address"
                    value={payment.address || ""}
                    placeholder="Address.."
                    onChange={handleChangePaymentInfo}
                  />
                </I.InputGroup>
              )}
            </>
          )}
          {payment.type === "paypal" && (
            <O.PaymentText>Not available now</O.PaymentText>
          )}
          {payment.type === "cash" && (
            <O.PaymentText>You will be charged in cash</O.PaymentText>
          )}
        </O.PaymentInfo>
        <I.OrangeButton
          disabled={payment.type === "paypal"}
          onClick={handleSubmitPayment}
        >
          Confirm Payment
        </I.OrangeButton>
      </Drawer>
      <I.DrawerCloseButton onClick={handleCloseDrawer} />
      <I.StaticDrawerTitle>Order #{order.number}</I.StaticDrawerTitle>
      <O.DrawerOrderTypes>
        {orderTypes.map((type, id) => (
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
            <I.GrayInput
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
            <I.GrayInput
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
          {order.type === "delivery" && (
            <div>
              <span>Delivery</span>
              <b>
                $
                {order.orderList.length &&
                order.orderList
                  .map((order) => order.price * (order.count || 1))
                  .reduce((a, b) => a + b)
                  .toFixed(2) > 25
                  ? 0
                  : 5}
              </b>
            </div>
          )}
          <div>
            <span>Discount</span>
            <b>${discount}</b>
          </div>
          <div>
            <span>Sub total</span>
            <b>
              $
              {order.orderList.length &&
                (order.type === "delivery"
                  ? (
                      parseFloat(
                        order.orderList
                          .map((order) => order.price * (order.count || 1))
                          .reduce((a, b) => a + b)
                      ) +
                      (parseFloat(
                        order.orderList
                          .map((order) => order.price * (order.count || 1))
                          .reduce((a, b) => a + b)
                      ) > 25
                        ? 0
                        : 5)
                    ).toFixed(2)
                  : parseFloat(
                      order.orderList
                        .map((order) => order.price * (order.count || 1))
                        .reduce((a, b) => a + b)
                    ).toFixed(2))}
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
