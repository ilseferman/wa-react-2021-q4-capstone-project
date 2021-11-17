import React, { createContext, useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext is missing');
  }

  return context;
}

const AppProvider = function ({ children }) {
  const [appContext, setAppContext] = useState([]);
  const value = useMemo(
    () => ({
      appContext,
      setAppContext
    }),
    [appContext]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default AppProvider;
