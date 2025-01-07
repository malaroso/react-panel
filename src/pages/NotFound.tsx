import { useSidebar } from '../context/SidebarContext';
import { useTheme } from '../context/ThemeContext';

const NotFound = () => {

    const {isSidebarOpen} = useSidebar();
    const {selectedTheme} = useTheme();

    // console.log(selectedTheme);

  return (
    <main className={`main containers ${isSidebarOpen ? 'left-pd' : ''}`} id="main">
        <div className="not-found">
        <h1 className='errorImage'>
          {selectedTheme === 'dark' ? <img src="assets/auth/404-error-dark.png" alt="" /> : <img src="assets/auth/404-error.png" alt="" />}
          
        </h1>
        <h2 className='textColor'>Sayfa Bulunamadı</h2>
        <p className='textColor'>Aradığınız sayfa mevcut değil. Lütfen doğru bir bağlantı girdiğinizden emin olun.</p>
        </div>
    </main>

  );
};

export default NotFound;
