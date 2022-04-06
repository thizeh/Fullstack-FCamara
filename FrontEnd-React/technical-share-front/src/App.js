import "./App.css";
import React from "react";
import ListMentoresComponent from "./components/ListMentoresComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <ListMentoresComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
