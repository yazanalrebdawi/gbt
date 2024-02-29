import React from "react";
import {
  Header,
  Footer,
  Blog,
  WhatGbt,
  Features,
  Possibility,
} from "./containers/exportContainers";
import { Cta, Navbar, Brand } from "./components/exportComponents";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGbt />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};
export default App;
