import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import ListMentoresComponent from "./components/ListMentoresComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={<ListMentoresComponent></ListMentoresComponent>}
            ></Route>
            <Route
              path="/mentores"
              element={<ListMentoresComponent></ListMentoresComponent>}
            ></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
