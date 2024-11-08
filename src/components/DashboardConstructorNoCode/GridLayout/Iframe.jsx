import React, { useEffect, useState } from "react";

export function Iframe({
  iFrameRef,
  selectedTool,
  editedItem,
  selectedToolItem,
}) {
  const [isDataSent, setisDataSent] = useState(false);

  useEffect(() => {
    if (editedItem === null) {
      setTimeout(() => {
        iFrameRef.current.contentWindow.postMessage(
          {
            type: "DASH_MODE",
          },
          "*"
        );
      }, [1000]);

      return;
    }

    if (editedItem.data && editedItem.type) {
      if (editedItem.type === selectedToolItem) {
        setTimeout(() => {
          iFrameRef.current.contentWindow.postMessage(
            {
              type: "DASH_EDIT_MODE",
              data: editedItem.data,
            },
            "*"
          );
        }, [1000]);
      } else {
        setTimeout(() => {
          iFrameRef.current.contentWindow.postMessage(
            {
              type: "DASH_MODE",
            },
            "*"
          );
        }, [1000]);
      }
    }

    setisDataSent(true);
  }, [iFrameRef, editedItem, selectedToolItem]);

  return (
    <iframe
      key={selectedToolItem}
      ref={iFrameRef}
      title="DashCreatorIftame"
      src={`/create-visualisation/${selectedToolItem}`}
      style={{ height: "100%", width: "100%", border: "none" }}
    />
  );
}
