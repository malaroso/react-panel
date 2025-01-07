import React from 'react';
import { useSidebar } from '../context/SidebarContext';
import Profile from '../components/settings/Profile';
import Notifications from '../components/settings/Notifications';
import Security from '../components/settings/Security';
import ConnectedAccounts from '../components/settings/ConnectedAccounts';
import DangerZone from '../components/settings/DangerZone';

const Settings = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <main className={`main containers ${isSidebarOpen ? 'left-pd' : ''}`} id="main">
      <div className="head-title">
        <div className="left">
          <h1>Settings</h1>
          <ul className="breadcrumb">
            <li>
              <a href="!#">Settings</a>
            </li>
            <li><i className="ri-arrow-right-s-line"></i></li>
            <li>
              <a className="active" href="!#">Home</a>
            </li>
          </ul>
        </div>
      </div>

			<main className='max-w-6xl mx-auto py-6 px-4 lg:px-8'>
				<Profile />
				<Notifications />
				<Security />
				<ConnectedAccounts />
				<DangerZone />
			</main>
    </main>
  );
};

export default Settings;
