import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./routes/MainPage";
import ContactPage from "./routes/ContactPage";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/cain-react-portfolio/" component={MainPage} />
          <Route exact path="/cain-react-portfolio/contact" component={ContactPage} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;






