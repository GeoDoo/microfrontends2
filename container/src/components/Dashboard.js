import React, { useRef, useEffect } from "react";

import { mount as dashboardMount } from "dashboard/bootstrap";

export default ({ onSignIn }) => {
  const ref = useRef(null);

  useEffect(() => {
    dashboardMount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};
