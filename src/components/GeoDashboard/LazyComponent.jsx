import { CircularProgress } from "@mui/material";
import React, { useState, Suspense, useEffect } from "react";

function LazyComponent({ componentName, data, selectedTheme }) {
  const [SelectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    setSelectedComponent(null);
    let Component;
    try {
      Component = React.lazy(() => import(`../${componentName}/${componentName}.jsx`));
    } catch (e) {
      Component = React.lazy(() => import(`../${componentName}/index.jsx`));
    }

    if (!Component) {
      console.error(`could not load ${componentName}. Please get in touch with IT Team`)
    }
    setSelectedComponent(Component);
  }, [componentName]);

  return (
    <>
      {SelectedComponent && (
        <Suspense fallback={<CircularProgress />}>
          <SelectedComponent
            key={`${componentName}`}
            data={data}
            selectedTheme={selectedTheme}
          />
        </Suspense>
      )}
    </>
  );
}

export default LazyComponent;
