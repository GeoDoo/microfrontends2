import React, { lazy, Suspense, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Progress from "./components/Progress";

const Marketing = lazy(() => import("./components/Marketing"));
const Auth = lazy(() => import("./components/Auth"));

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
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
            <Route path="/" component={Marketing} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
