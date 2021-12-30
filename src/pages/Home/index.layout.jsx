import { format } from 'date-fns';
import React from 'react';
import * as I from '../../index.styled';
import * as H from './index.styled';
import { Select } from 'antd';
import { ReactComponent as Arrow } from '../../assets/arrow-ios-down.svg';
import OrderDrawer from './../../components/OrderDrawer/index';
import DishCard from '../../components/DIshCard/DishCard';

export default function HomeLayout({
  menuTabs,
  orderTypes,
  dishes,
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
            <p>{format(new Date(), 'EEEE, d MMM yyyy')}</p>
          </I.PageTitle>
          <H.HomeSearch placeholder="Search for food, coffe, etc.." />
        </I.PageHeader>
        <H.HomeNav line={activeTabLine}>
          {menuTabs.map((tab, id) => (
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
            {orderTypes.map((type, id) => (
              <Select.Option key={id} value={type}>
                {type}
              </Select.Option>
            ))}
          </Select>
        </H.HomeContentHeader>
        <H.HomeContentDishes drawer={order.orderList.length > 0}>
          {dishes
            .filter((dish) => dish.category === menuTabs[activeTab])
            .map((dish, id) => (
              <DishCard dish={dish} id={id} handleSetOrder={handleSetOrder} />
            ))}
        </H.HomeContentDishes>
      </div>
      <OrderDrawer
        order={order}
        setOrder={setOrder}
        orderTypes={orderTypes}
        discount={discount}
        handleSetOrderType={handleSetOrderType}
      />
    </I.MainContainer>
  );
}
