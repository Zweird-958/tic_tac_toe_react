import { createContext, useState } from "react";

export const WinningElementContextTest = createContext();

const init = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

export const WinningElementProviderTest = ({ children }) => {
  const [winningElement, setWinningElements] = useState(init);

  const copyLines = () => {
    const newLines = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];

    for (let i = 0; i < winningElement.length; i++) {
      for (let j = 0; j < winningElement[i].length; j++) {
        newLines[i][j] = winningElement[i][j];
      }
    }
    return newLines;
  };

  const addElements = (items) => {
    const newLines = copyLines();

    items.map(element => {

      newLines[element[0]][element[1]] = "true";
    })



    setWinningElements(newLines);
  };

  const resetElements = () => {
    setWinningElements(init);
  };

  return (
    <WinningElementContextTest.Provider
      value={{ winningElement, addElements, resetElements }}
    >
      {children}
    </WinningElementContextTest.Provider>
  );
};
