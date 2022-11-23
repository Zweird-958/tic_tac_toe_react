import { createContext, useState } from "react";

export const WinContext = createContext();

export const WinProvider = ({ children }) => {
  const [win, setWin] = useState(false);

  const toggleWin = (value) => {
    setWin(value);
  };

  return (
    <WinContext.Provider value={{ win, toggleWin }}>
      {children}
    </WinContext.Provider>
  );
};
