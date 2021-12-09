import React from "react";
// import Header from "./Header";
import GameControl from "./GameControl";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
  return ( 
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route path="/game">
          <GameControl/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;