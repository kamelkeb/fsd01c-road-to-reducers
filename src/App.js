import "./App.css";
import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { CentralPanel } from "./components/CentralPanel";
import { Provider as PrimaryColorProvider } from "./contexts/PrimaryColorContext";

function App() {
  return (
    <PrimaryColorProvider className="App">
      <Header></Header>
      <CentralPanel></CentralPanel>
      <Footer></Footer>
    </PrimaryColorProvider>
  );
}

export default App;
