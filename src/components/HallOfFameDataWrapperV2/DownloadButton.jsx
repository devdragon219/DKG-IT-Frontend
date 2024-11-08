import React from "react";

import { toPng } from "html-to-image";
import { Button } from "@mui/material";

function downloadImage(dataUrl, button) {
  const a = document.createElement("a");

  a.setAttribute("download", "img.png");
  a.setAttribute("href", dataUrl);
  a.click();

  button.style.display = "block";
}

function DownloadButton() {
  const onClick = () => {
    const button = document.querySelector(".fit-screen-button");

    button.style.display = "none";
    toPng(document.querySelector(".hall-of-famev2"), {}).then((dataUrl) => {
      downloadImage(dataUrl, button);
    });
    //
  };

  return (
    <Button onClick={onClick} size="normal" color="primary" variant="contained">
      Download Image
    </Button>
  );
}

export default DownloadButton;
