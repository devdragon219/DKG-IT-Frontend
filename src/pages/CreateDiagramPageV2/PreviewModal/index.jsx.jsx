import React from "react";
import { Modal } from "antd";

import PreviewPage from "../PreviewPage";

export function PreviewModal({
  isVisible,
  setIsVisible,
  setLiveData,
  path,
  jsonData,
  diagramType,
}) {
  const hideModal = () => setIsVisible(false);

  return (
    <div>
      <Modal
        title={"Preview Mode"}
        destroyOnClose={true}
        open={isVisible}
        onOk={hideModal}
        onCancel={hideModal}
        width="100vw" // Set width to 100% of the viewport width
        centered
        bodyStyle={{
          height: "80vh", // Set body height to 100% of the viewport height
        }}
      >
        <PreviewPage
          setLiveData={setLiveData}
          path={path}
          jsonData={jsonData}
          diagramType={diagramType}
          isEditMode={false}
          isPreviewMode={true}
        />
      </Modal>
    </div>
  );
}
