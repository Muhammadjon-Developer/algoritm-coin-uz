import React, { useEffect, useState, createContext, useContext } from 'react';
import { mentors } from '../constants/data';

// Context yaratish
export const ThemeContext = createContext();
// Provider komponenti
export const ThemeProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    // localStorage dan darkMode-ni olish
    const savedMode = JSON.parse(localStorage.getItem('darkMode'));
    return savedMode || false;
  });

  useEffect(() => {
    // darkMode o'zgarishi bo'lganda localStorage ga saqlash
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  
  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const filteredData = mentors.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <ThemeContext.Provider value={{ darkMode, handleDarkMode, searchTerm, handleSearch, filteredData }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Komponentlarga murojaat
export const useTheme = () => useContext(ThemeContext);
