import React from "react";

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div
        className="dndnode parent"
        onDragStart={(event) => onDragStart(event, "parent-node")}
        draggable
      >
        Parent Node
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "custom-start")}
        draggable
      >
        Start Node
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "custom-middle")}
        draggable
      >
        Middle Node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "custom-end")}
        draggable
      >
        End Node
      </div>
    </aside>
  );
};
