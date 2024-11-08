import { CircularProgress } from "@mui/material";
import React, { useState, Suspense, useEffect } from "react";

import ToolIframe from "./ToolIframe";
import {
  onCheckIsExternalRoute,
  onCheckIsInternalRoute,
} from "../../../constants/routes";

function LazyComponent({ path, data, diagramType }) {
  const [SelectedComponent, setSelectedComponent] = useState(null);

  const isExternalRoute = onCheckIsExternalRoute(diagramType);
  const isInternalRoute = onCheckIsInternalRoute(diagramType);

  useEffect(() => {
    if (isInternalRoute) {
      setSelectedComponent(null);
      let Component;

      try {
        Component = React.lazy(() =>
          import(`../../../components/${path}/index.jsx`)
        );
      } catch (e) {
        console.log(e);
      }

      if (!Component) {
        console.error("could not load", path);
      }
      setSelectedComponent(Component);
    }
  }, [path, isInternalRoute]);

  return (
    <>
      {isExternalRoute && (
        <div
          key={JSON.stringify(data)}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <ToolIframe data={data} type={diagramType} />
        </div>
      )}

      {isInternalRoute && SelectedComponent && (
        <Suspense fallback={<CircularProgress />}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SelectedComponent
              key={`${path}`}
              data={data}
              geoDashboard={true}
            />
          </div>
        </Suspense>
      )}
    </>
  );
}

export default LazyComponent;
