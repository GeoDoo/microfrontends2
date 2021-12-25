import React, { lazy, Suspense, useEffect, useState } from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import Header from "./components/Header";
import Progress from "./components/Progress";

const Marketing = lazy(() => import("./components/Marketing"));
const Auth = lazy(() => import("./components/Auth"));
const Dashboard = lazy(() => import("./components/Dashboard"));

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) history.push("/dashboard");
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <div>
        <Header
          onSignOut={() => setIsSignedIn(false)}
          isSignedIn={isSignedIn}
        />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <Auth onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/dashboard">
              {!isSignedIn && <Redirect to="/" />}
              <Dashboard />
            </Route>
            <Route path="/" component={Marketing} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};
