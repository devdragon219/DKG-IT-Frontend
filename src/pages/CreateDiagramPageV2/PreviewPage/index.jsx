import React, { Suspense, useEffect, useState } from "react";

import { CircularProgress } from "@mui/material";
import {
  onCheckIsExternalRoute,
  onCheckIsInternalRoute,
} from "../../../constants/routes";
import IFrame from "../../CreateDiagramPage/Iframe";

const PreviewPage = ({
  jsonData,
  path,
  diagramType,
  setLiveData,
  isEditMode,
  isPreviewMode,
}) => {
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
      {isInternalRoute && SelectedComponent && (
        <Suspense fallback={<CircularProgress />}>
          <SelectedComponent
            key={`${path}`}
            data={jsonData}
            isEditMode={isEditMode}
            isNewMode={true}
            setLiveData={setLiveData}
            isPreviewMode={isPreviewMode}
          />
        </Suspense>
      )}

      {isExternalRoute && (
        <div key={JSON.stringify(jsonData)}>
          <IFrame
            data={jsonData}
            type={diagramType}
            isEditMode={true}
            isNewMode={true}
            setLiveData={setLiveData}
          />
        </div>
      )}
    </>
  );
};
export default PreviewPage;
