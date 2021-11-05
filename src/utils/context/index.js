import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(`AppContext is missing`);
  }

  return context;
}

export function AppProvider({ children }) {
  const [appContext, setAppContext] = useState([]);

  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      {children}
    </AppContext.Provider>
  );
}
