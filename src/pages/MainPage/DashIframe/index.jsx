import React, { useEffect, useRef, useState } from "react";

const DashIframe = () => {
  const iframeRef = useRef(null);
  const [height, setHeight] = useState("950px");

  useEffect(() => {
    window.onmessage = function (e) {
      console.log(e.data.type);
      if (e.data.type === "height") {
        setHeight(`${e.data.height + 30}px`);
      }
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      style={{
        width: "100%",
        height: height,
        margin: "auto",
      }}
      title="Dashboard"
      src="https://tools.dkv.global/product/geoDashboardV2DAA"
      frameBorder="0"
    />
  );
};

export default DashIframe;
