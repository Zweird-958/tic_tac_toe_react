import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LinesProvider } from "./context/LinesContext";
import { PlayerProvider } from "./context/PlayerContext";
import { WinProvider } from "./context/WinContext";
import { DrawProvider } from "./context/DrawContext";
import { MovesProvider } from "./context/MovesContext";
import { WinningElementProviderTest } from "./context/WinningElementsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DrawProvider>
      <WinProvider>
        <PlayerProvider>
          <MovesProvider>
            <WinningElementProviderTest>
              <LinesProvider>
                <App />
              </LinesProvider>
            </WinningElementProviderTest>
          </MovesProvider>
        </PlayerProvider>
      </WinProvider>
    </DrawProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
