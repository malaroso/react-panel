import React from 'react'
import { useSidebar } from '../context/SidebarContext';
import SalesOverviewChart from '../components/StatisticsComponents/SalesOverviewChart';
import ChannelPerformance from '../components/StatisticsComponents/ChannelPerformance';
import RevenueChart from '../components/StatisticsComponents/RevenueChart';
import CustomerSegmentation from '../components/StatisticsComponents/CustomerSegmentation';

const Test = () => {
    const { isSidebarOpen } = useSidebar();

  return (
    <main className={`main containers ${isSidebarOpen ? 'left-pd' : ''}`} id="main">
      <SalesOverviewChart></SalesOverviewChart>
      <ChannelPerformance></ChannelPerformance>
      <RevenueChart></RevenueChart>
      <CustomerSegmentation></CustomerSegmentation>
      <div className="clear"></div>
    </main>
  )
}

export default Test
