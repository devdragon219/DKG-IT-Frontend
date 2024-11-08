import React from "react";
import {
  Panel,
  useReactFlow,
  getRectOfNodes,
  getTransformForBounds,
} from "reactflow";
import { toPng } from "html-to-image";
import { Button } from "antd";

function downloadImage(dataUrl) {
  const a = document.createElement("a");
  console.log(a);
  a.setAttribute("download", "img.png");
  a.setAttribute("href", dataUrl);
  a.click();
}

const imageWidth = 1024;
const imageHeight = 768;

function DownloadButton({ color }) {
  const { getNodes } = useReactFlow();
  const onClick = () => {
    const nodesBounds = getRectOfNodes(getNodes());
    const transform = getTransformForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2
    );

    toPng(document.querySelector(".react-flow__viewport"), {
      backgroundColor: color ? color : "#fff",
      width: imageWidth,
      height: imageHeight,
      style: {
        width: imageWidth,
        height: imageHeight,
        transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
      },
    })
      .then(downloadImage)
      .catch((error) => {
        console.log(error, 7667764576);
      });
  };

  return (
    <Panel position="top-right">
      <Button onClick={onClick}>Download Image</Button>
    </Panel>
  );
}

export default DownloadButton;
