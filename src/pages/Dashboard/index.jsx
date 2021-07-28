import React, { useState } from 'react';
import DashboardLayout from './index.layout';

export default function Dashboard() {
  const [isAllOrderedVisible, setAllOrderedVisible] = useState(false);
  return (
    <DashboardLayout
      isAllOrderedVisible={isAllOrderedVisible}
      setAllOrderedVisible={setAllOrderedVisible}
    />
  );
}
