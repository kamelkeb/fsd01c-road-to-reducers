import "./App.css";
import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { CentralPanel } from "./components/CentralPanel";
import { Provider as PrimaryColorProvider } from "./contexts/PrimaryColorContext";
import { Provider as PositionProvider } from "./contexts/DirectionContext";
import { GamePanel } from "./components/GamePanel";

function App() {
  return (
    <PrimaryColorProvider className="App">
      <PositionProvider>
        <Header></Header>
        <CentralPanel></CentralPanel>
        <GamePanel></GamePanel>
        <Footer></Footer>
      </PositionProvider>
    </PrimaryColorProvider>
  );
}

export default App;
