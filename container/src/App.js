import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Marketing from "./components/Marketing";
import Auth from "./components/Auth";
import Header from "./components/Header";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/" component={Marketing} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
