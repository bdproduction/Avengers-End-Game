import React, { Component } from "react";
import AvengerOptions from "./components/avengerOptions/avengerOptions.component";
import Battle from "./components/battle/battle.component";
import Result from "./components/result/result.component";
import Archive from "./components/archive/archive.component";
import { BrowserRouter as Router, Route  } from "react-router-dom";

const App = () => (
  <Router>
      <div>
          <Route exact path="/" component={AvengerOptions} />
          <Route exact path="/battle" component={Battle} />
          <Route exact path="/result/:id" component={Result} />
          <Route exact path="/archive" component={Archive} />
      </div>
  </Router>
);
export default App;