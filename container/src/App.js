import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Progress from "./components/Progress";

const Marketing = lazy(() => import("./components/Marketing"));
const Auth = lazy(() => import("./components/Auth"));

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/" component={Marketing} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
