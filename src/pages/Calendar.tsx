import React from 'react';
import { useSidebar } from '../context/SidebarContext';

const Calendar = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <main className={`main containers ${isSidebarOpen ? 'left-pd' : ''}`} id="main">
      <div className="head-title">
        <div className="left">
          <h1>Calendar</h1>
          <ul className="breadcrumb">
            <li>
              <a href="!#">Calendar</a>
            </li>
            <li><i className="ri-arrow-right-s-line"></i></li>
            <li>
              <a className="active" href="!#">Home</a>
            </li>
          </ul>
        </div>

      </div>

    </main>
  );
};

export default Calendar;
