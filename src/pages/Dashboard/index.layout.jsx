import { format } from 'date-fns';
import React from 'react';
import * as I from '../../index.styled';
import * as D from './index.styled';
import { most_ordered } from '../../constants/dashboard';
import { info_card } from '../../constants/dashboard';
import { order_report } from '../../constants/dashboard';
import { ReactComponent as Cursor } from '../../assets/dashboard/Cursor.svg';
import { ReactComponent as OptionFilter } from '../../assets/dashboard/Option.svg';
import { Select } from 'antd';
const { Option } = Select;
export default function DashboardLayout({
  isAllOrderedVisible,
  setAllOrderedVisible,
}) {
  return (
    <I.MainContainer>
      <D.DashboardContainer>
        <D.DashboardLeftSection>
          <I.PageHeader bordered>
            <I.PageTitle>
              <h2>Dashboard</h2>
              <p>{format(new Date(), 'EEEE, d MMM yyyy')}</p>
            </I.PageTitle>
          </I.PageHeader>
          <D.DashboardLeftScrollContainer>
            {info_card.map((card, id) => (
              <D.DashboardInfoCard key={id}>
                <D.InfoCardPercent positive={card.percent > 0}>
                  <img src={card.cover} />
                  {card.percent > 0 && '+'}
                  {card.percent}%
                  <span>
                    <Cursor />
                  </span>
                </D.InfoCardPercent>
                <h1>
                  {id === 0 && '$'}
                  {card.totalcount}
                </h1>
                <h2>{card.text}</h2>
              </D.DashboardInfoCard>
            ))}
            <D.DashboardOrderReport>
              <D.OrderReportTitle>
                Order Report
                <Select
                  defaultValue="Filter Order"
                  className="filter-button"
                  suffixIcon={<OptionFilter />}
                >
                  <Option value="Date">Date</Option>
                  <Option value="TotalPayment">Total Payment</Option>
                  <Option value="Status">Status</Option>
                </Select>
              </D.OrderReportTitle>

              <D.OrderReportContentTitle>
                <p>Customer</p>
                <p>Data</p>
                <p>Total Payment</p>
                <p>Status</p>
              </D.OrderReportContentTitle>
              {order_report.map((item, id) => (
                <D.OrderReportitem status={item.status}>
                  <D.OrderReportitemName>
                    <img src={item.cover} alt="" />
                    <span>{item.name}</span>
                  </D.OrderReportitemName>
                  <p>{format(item.date, 'd.MM.yyyy H:mm')}</p>
                  <p>${item.payment}</p>
                  <p>{item.status}</p>
                </D.OrderReportitem>
              ))}
            </D.DashboardOrderReport>
          </D.DashboardLeftScrollContainer>
        </D.DashboardLeftSection>
        <D.DashboardRightSection>
          <D.DashboardMostOrdered>
            <D.MostOrderedTitle>
              Most ordered
              <Select
                defaultValue="Today"
                className="filter-button"
                suffixIcon={<OptionFilter />}
              >
                <Option value="Today">Today</Option>
                <Option value="Week">Week</Option>
                <Option value="Month">Month</Option>
                <Option value="All time">All time</Option>
              </Select>
            </D.MostOrderedTitle>
            <D.MostOrderedContent>
              {most_ordered
                .slice(0, isAllOrderedVisible ? most_ordered.length : 3)
                .map((meal, id) => (
                  <D.MostOrderedItem key={id}>
                    <img src={meal.cover} />
                    <D.MostOrderedItemText>
                      <h1>{meal.title}</h1>
                      <p>{meal.ordered} dishes ordered</p>
                    </D.MostOrderedItemText>
                  </D.MostOrderedItem>
                ))}
            </D.MostOrderedContent>
            <D.MostOrderedBtn
              onClick={() => setAllOrderedVisible(!isAllOrderedVisible)}
            >
              {isAllOrderedVisible ? 'Hide' : 'View all'}
            </D.MostOrderedBtn>
          </D.DashboardMostOrdered>
          <D.DashboardMostTypeOrder>
            <D.MostTypeOrderTitle>Most Type of Order
            <Select
                defaultValue="Today"
                className="filter-button"
                suffixIcon={<OptionFilter />}
              >
                <Option value="Today">Today</Option>
                <Option value="Week">Week</Option>
                <Option value="Month">Month</Option>
                <Option value="All time">All time</Option>
              </Select>
            </D.MostTypeOrderTitle>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            impedit, optio ad voluptatem quaerat consequuntur quia tempora
            magnam rem tempore vitae voluptate facere illo ea dolor dignissimos
            hic expedita. Deserunt sunt atque iste nihil enim consequuntur iure
            labore corporis, aliquid molestias aliquam. Reiciendis tempora nulla
            accusamus similique voluptas accusantium hic sapiente sunt? Ducimus
            eaque magni quam incidunt corrupti amet quasi. Maiores molestiae
            nihil nam odit autem perspiciatis quia in cupiditate harum magni!
            Debitis nisi quo ipsam, nulla, placeat excepturi laboriosam in quis
            velit quod deleniti ducimus labore iure expedita. Neque, optio!
            Maxime qui deleniti autem ut, voluptatum debitis sequi consectetur?
          </D.DashboardMostTypeOrder>
        </D.DashboardRightSection>
      </D.DashboardContainer>
    </I.MainContainer>
  );
}
