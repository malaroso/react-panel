import React from 'react';
import { useSidebar } from '../context/SidebarContext';
import BoxInfo from '../components/StatisticsComponents/BoxInfo';
import LineChart from '../components/StatisticsComponents/LineChart';


const Statistics = () => {
  const { isSidebarOpen } = useSidebar();
  const visitorData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Visitors',
        data: [30, 50, 40, 70, 90, 100],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const revenueData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue',
        data: [200, 400, 300, 500, 700, 900],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Visitors Statistics',
      },
    },
  };

  return (
    <main className={`main containers ${isSidebarOpen ? 'left-pd' : ''}`} id="main">
      <div className="head-title">
        <div className="left">
          <h1>Statistics</h1>
          <ul className="breadcrumb">
            <li>
              <a href="!#">Statistics</a>
            </li>
            <li><i className="ri-arrow-right-s-line"></i></li>
            <li>
              <a className="active" href="!#">Home</a>
            </li>
          </ul>
        </div>

      </div>

      <ul className="box-info">
        <BoxInfo
          iconClass="ri-user-line"
          backgroundClass="light-blue"
          colorClass="blue"
          title="New Users"
          value="1,245"
        />
        <BoxInfo
          iconClass="ri-shopping-bag-line"
          backgroundClass="light-yellow"
          colorClass="yellow"
          title="Sales"
          value="$12,450"
        />
        <BoxInfo
          iconClass="ri-eye-line"
          backgroundClass="light-orange"
          colorClass="orange"
          title="Page Views"
          value="23,645"
        />
      </ul>

      <div className="chart-container">
        <div className="charts">
          <LineChart data={visitorData} options={options} />
        </div>
        <div className="charts">
          <LineChart data={revenueData} options={options}/>
        </div>
      </div>
      <div className="clear"></div>
    </main>
  );
};

export default Statistics;
