import React from "react";
import Navbar from "./components/navbar";
import FirstPage from "./components/FirstPage";
import { SecondPage } from "./components/SecondPage";
import { Cards } from "./components/Cards";

function App() {
  return (
    <div>
      <Navbar />
      <FirstPage />
      <SecondPage />
      <Cards />
    </div>
  );
}

export default App;
