import React, { createContext, useState, ReactNode, useContext } from 'react';

interface SidebarContextProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}


export const SidebarContext = createContext<SidebarContextProps>({
  isSidebarOpen: false,
  toggleSidebar: () => {},
});


export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => {
    const savedState = localStorage.getItem('isSidebarOpen');
    return savedState === 'true'; 
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => {
      const newState = !prevState;
      localStorage.setItem('isSidebarOpen', newState.toString()); 
      return newState;
    });
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
