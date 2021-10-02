import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DashboardLayout from './index.layout';

export default function Dashboard() {
  const [isAllOrderedVisible, setAllOrderedVisible] = useState(false);
  const { mostOrdered, infoCards, orderReport, mostOrderedChart } = useSelector(
    (state) => state.dashboard
  );
  return (
    <DashboardLayout
      mostOrderedChart={mostOrderedChart}
      orderReport={orderReport}
      infoCards={infoCards}
      mostOrdered={mostOrdered}
      isAllOrderedVisible={isAllOrderedVisible}
      setAllOrderedVisible={setAllOrderedVisible}
    />
  );
}
