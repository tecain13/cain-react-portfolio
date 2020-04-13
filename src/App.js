import React from "react";
import MainPage from "./routes/MainPage";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;

