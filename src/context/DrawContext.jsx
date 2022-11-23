import { createContext, useState } from "react";

export const DrawContext = createContext();

export const DrawProvider = ({ children }) => {
  const [draw, setDraw] = useState(false);

  const toggleDraw = (value) => {
    setDraw(value);
  };

  return (
    <DrawContext.Provider value={{ draw, toggleDraw }}>
      {children}
    </DrawContext.Provider>
  );
};
