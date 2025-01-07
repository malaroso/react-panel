import React from 'react';
import { useSidebar } from '../context/SidebarContext';
import Boxes from '../components/Boxes';
import Table from '../components/Tables/HomepageTable';
import ToDo from '../components/ToDo';


const Dashboard = () => {
    const { isSidebarOpen } = useSidebar();

  return (
    <main className={`main containers ${isSidebarOpen ? 'left-pd' : ''}`} id="main">
      <div className="head-title">
        <div className="left">
          <h1>Dashboard</h1>
          <ul className="breadcrumb">
            <li>
              <a href="!#">Dashboard</a>
            </li>
            <li><i className="ri-arrow-right-s-line"></i></li>
            <li>
              <a className="active" href="!#">Home</a>
            </li>
          </ul>
        </div>
        <a href="!#" className="btn-download">
          <i className="ri-arrow-down-double-fill"></i>
          <span className="text">Download PDF</span>
        </a>
      </div>

      <Boxes></Boxes>

      <div className="table-data">
        <Table></Table>
        <ToDo></ToDo>
      </div>

      <div className="clear"></div>
    </main>

  );
};

export default Dashboard;
