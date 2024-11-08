import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, Select } from "antd";
import { Iframe } from "./Iframe";
import { TOOLS } from "./constants";
import { getName } from "../../../constants/names";

export function AddToolModal({
  isVisible,
  setIsVisible,
  editedItem,
  selectedTool,
}) {
  const iFrameRef = useRef(null);
  const hideModal = () => setIsVisible(false);
  const [selectedToolItem, setSelectedToolItem] = useState("universalBar");

  const handleSave = () => {
    iFrameRef.current.contentWindow.postMessage(
      {
        type: "SAVE_MESSAGE",
      },
      "*"
    );
    setTimeout(() => {
      setIsVisible(false);
    }, [1000]);
  };

  useEffect(() => {
    if (editedItem?.type) {
      setSelectedToolItem(editedItem.type);
    } else {
      setSelectedToolItem("universalBar");
    }
  }, [editedItem]);

  return (
    <div>
      <Modal
        title={
          <Select
            style={{
              width: 320,
            }}
            value={selectedToolItem}
            onChange={(value) => {
              setSelectedToolItem(value);
            }}
            options={TOOLS.map((tool) => {
              return {
                value: tool,
                label: getName(tool),
              };
            })}
          />
        }
        destroyOnClose={true}
        open={isVisible}
        onOk={handleSave}
        onCancel={hideModal}
        width="100vw" // Set width to 100% of the viewport width
        centered
        bodyStyle={{
          height: "80vh", // Set body height to 100% of the viewport height
        }}
      >
        {isVisible ? (
          <Iframe
            iFrameRef={iFrameRef}
            selectedTool={selectedTool}
            selectedToolItem={selectedToolItem}
            editedItem={editedItem}
          />
        ) : (
          <></>
        )}
      </Modal>
    </div>
  );
}
