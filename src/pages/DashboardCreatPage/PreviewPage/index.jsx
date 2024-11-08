import React from "react";

import DashboardConstructorNoCode from "../../../components/DashboardConstructorNoCode";

const PreviewPage = ({
  setLayouts,
  setPagesData,
  jsonData,
  setSelectedPage,
}) => {
  return (
    <>
      <DashboardConstructorNoCode
        isEditMode={true}
        setSelectedPage={setSelectedPage}
        setLayouts={setLayouts}
        setPagesData={setPagesData}
        data={jsonData}
      />
    </>
  );
};
export default PreviewPage;
