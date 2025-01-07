import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// Tema durumu için context tipi
interface ThemeContextProps {
  selectedTheme: 'light' | 'dark';
  toggleTheme: () => void;
  selectedIcon: string; 
}

// Başlangıç değerleri
export const ThemeContext = createContext<ThemeContextProps>({
  selectedTheme: 'light',
  toggleTheme: () => {},
  selectedIcon: 'ri-moon-fill', 
});


export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>(
    () => localStorage.getItem('selectedTheme') === 'dark' ? 'dark' : 'light'
  );
  const [selectedIcon, setSelectedIcon] = useState<string>('ri-moon-fill');

  // Tema açma-kapama işlevi
  const toggleTheme = () => {
    const newTheme = selectedTheme === 'light' ? 'dark' : 'light';
    const newIcon = newTheme === 'dark' ? 'ri-sun-fill' : 'ri-moon-fill';

    setSelectedTheme(newTheme);
    setSelectedIcon(newIcon);
    localStorage.setItem('selectedTheme', newTheme); 


    document.body.classList[newTheme === 'dark' ? 'add' : 'remove']('dark-theme');

    const themeButton = document.getElementById('theme-button');
    if (themeButton) {
      themeButton.classList[newIcon === 'ri-sun-fill' ? 'add' : 'remove']('ri-sun-fill');
    }
  };

  useEffect(() => {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
  }, [selectedTheme]);

  return (
    <ThemeContext.Provider value={{ selectedTheme, toggleTheme, selectedIcon }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Tema context'ini kullanmak için hook
export const useTheme = () => useContext(ThemeContext);
