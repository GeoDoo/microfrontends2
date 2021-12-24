import React, { useRef, useEffect } from "react";
import { mount as marketingMount } from "marketing/bootstrap";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    marketingMount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};
