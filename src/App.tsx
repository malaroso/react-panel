import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';
import Dashboard from './pages/Dashboard';
import { SidebarProvider } from './context/SidebarContext';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Statistics from './pages/Statistics';
import NotFound from './pages/NotFound';
import Calendar from './pages/Calendar';
import Wallet from './pages/Wallet';
import Settings from './pages/Settings';
import Message from './pages/Inbox';
import Roles from './pages/Roles';
import Users from './pages/Users';
import './index.css'
import Test from './pages/Test';
import Login from './pages/Login';


const AppContent = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Sidebar />}
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/message" element={<Message />} />
        <Route path="/users" element={<Users />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/components" element={<Test />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <SidebarProvider>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </SidebarProvider>
    </Router>


  );
};

export default App;
