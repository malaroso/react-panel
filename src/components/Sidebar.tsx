import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';
import { useTheme } from '../context/ThemeContext';

const Sidebar = () => {

    const { isSidebarOpen } = useSidebar();
    const { toggleTheme, selectedIcon } = useTheme();
    const location = useLocation();

    return (
        <nav className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`} id="sidebar">
            <div className="sidebar__container">
                <div className="sidebar__user">
                    <div className="sidebar__img">
                        <img src="assets/avatars/300-8.jpg" alt="" />
                    </div>

                    <div className="sidebar__info">
                        <h4>Mala rosso</h4>
                        <span>malatgar@example.com</span>
                    </div>
                </div>

                <div className="sidebar__content">
                    <div>
                        <h3 className="sidebar__title">Manage</h3>

                        <div className="sidebar__list">
                            <Link to="/" className={`sidebar__link ${location.pathname === '/' ? 'active-link' : ''}`}>
                                <i className="ri-pie-chart-line"></i>
                                <span>Dashboard</span>
                            </Link>

                            <Link to="/wallet" className={`sidebar__link ${location.pathname === '/wallet' ? 'active-link' : ''}`}>
                                <i className="ri-wallet-line"></i>
                                <span>My Wallet</span>
                            </Link>
{/* 
                            <Link to="/calendar" className={`sidebar__link ${location.pathname === '/calendar' ? 'active-link' : ''}`}>
                                <i className="ri-calendar-2-line"></i>
                                <span>Calendar</span>
                            </Link> */}

                            <Link to="/statistics" className={`sidebar__link ${location.pathname === '/statistics' ? 'active-link' : ''}`}>
                                <i className="ri-bar-chart-line"></i>
                                <span>Statistics</span>
                            </Link>

                            <Link to="/message" className={`sidebar__link ${location.pathname === '/message' ? 'active-link' : ''}`}>
                                <i className="ri-mail-line"></i>
                                <span>Inbox</span>
                            </Link>
                            
                            <Link to="/components" className={`sidebar__link ${location.pathname === '/components' ? 'active-link' : ''}`}>
                                <i className="ri-a-b"></i>
                                <span>Components</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="sidebar__title">Users</h3>
                        <div className="sidebar__list">
                            <Link to="/users" className={`sidebar__link ${location.pathname === '/users' ? 'active-link' : ''}`}>
                                <i className="ri-group-line"></i>
                                <span>Users</span>
                            </Link>

                            <Link to="/roles" className={`sidebar__link ${location.pathname === '/roles' ? 'active-link' : ''}`}>
                                <i className="ri-user-settings-line"></i>
                                <span>Roles</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="sidebar__title">Settings</h3>
                        <div className="sidebar__list">
                            <Link to="/settings" className={`sidebar__link ${location.pathname === '/settings' ? 'active-link' : ''}`}>
                                <i className="ri-settings-line"></i>
                                <span>Settings</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="sidebar__actions">
                    <button onClick={toggleTheme}>
                        <i className={`${selectedIcon} sidebar__link sidebar__theme`} id="theme-button">
                            <span>Theme</span>
                        </i>
                    </button>
                    <button className="sidebar__link">
                        <i className="ri-logout-box-line"></i>
                        <span>Log Out</span>
                    </button>
                </div>
            </div>
        </nav>

    );
};

export default Sidebar;
