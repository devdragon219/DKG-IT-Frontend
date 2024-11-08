import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    width: "calc(100vw / 5.6)",
    height: "calc(100vw / 4.9)",
    backgroundColor: "#e3e3d5",
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  },
  containerMain: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 30,
    padding: 30,
  },
});

const Hexagon = ({
  hexagoneId,
  hexagonTexts,
  colors,
  centerHexagonTextRotation,
  isCenter = false,
  handleClick,
}) => {
  const classes = useStyles();

  let hexSize = window.innerWidth / 51.3;

  useEffect(() => {
    const size = isCenter ? hexSize * 1.5 : hexSize;
    const dx = (size * 3) / 2;
    const dy = size * Math.sqrt(3);

    const radius = isCenter ? 2 : 3;
    const diameter = 2 * radius;

    const canvas = document.createElement("canvas");

    const container = document.getElementById(hexagoneId);

    const width = (canvas.width = diameter * dx);
    const height = (canvas.height = diameter * dy);
    const context = canvas.getContext("2d");
    container.appendChild(canvas);

    field(width / 2, dy);

    function field(cx, cy) {
      const hexagonSpacingX = 2;
      const hexagonSpacingY = 2;
      let textIndex = 0;
      let count = 0;
      for (let i = 1 - radius; i < radius; i++) {
        const j = Math.abs(i);
        const x = cx + i * dx + i * hexagonSpacingX;
        const y = cy + (j * dy) / 2 + (j * hexagonSpacingY) / 2;
        const k = diameter - j - 1;

        for (let i = 0; i < k; i++) {
          hexagon(
            x,
            y + i * dy + i * hexagonSpacingY,
            size,
            (isCenter && k === 3 && i === 1) || (k === 5 && i === 2)
              ? "white"
              : isCenter
              ? colors[count]
              : colors[0],
            hexagonTexts[textIndex].text,
            hexagonTexts[textIndex].id,
            (isCenter && k === 3 && i === 1) || (k === 5 && i === 2)
              ? "black"
              : "white"
          );
          count++;
          textIndex = (textIndex + 1) % hexagonTexts.length;
        }
      }
      count = 0;
    }
    function hexagon(x, y, size, hexagonColor, text, id, colorName) {
      const hexagonCenterX = x;
      const hexagonCenterY = y;
      context.beginPath();
      context.moveTo(x + size, y);

      for (let i = 1; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        context.lineTo(x + Math.cos(angle) * size, y + Math.sin(angle) * size);
      }

      context.closePath();
      context.fillStyle = hexagonColor;
      context.fill();

      // handle text wrapping
      const lineHeight = 11;
      const maxLineWidth = size * 2 - 8;
      const words = text.split(" ");
      let line = "";
      const wrappedLines = [];

      for (const word of words) {
        const testLine = line ? line + " " + word : word;
        const testWidth = context.measureText(testLine).width;

        if (testWidth > maxLineWidth) {
          wrappedLines.push(line);
          line = word;
        } else {
          line = testLine;
        }
      }

      wrappedLines.push(line);

      // Reverse the lines to render in the correct order
      wrappedLines.reverse();

      // Define the rotation angle
      const rotationAngle = isCenter ? centerHexagonTextRotation : 0;

      console.log(centerHexagonTextRotation);

      // Draw wrapped text
      context.fillStyle = colorName;
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.font = "0.55vw Arial";
      const divTag = document.createElement("div");
      divTag.setAttribute("id", id);
      divTag.style.cursor = "pointer";
      for (let i = 0; i < wrappedLines.length; i++) {
        const text = wrappedLines[i];
        const yOffset =
          ((wrappedLines.length - 1) * lineHeight) / 2 - i * lineHeight;
        const span = document.createElement("span");
        span.style.position = "absolute";
        span.style.left = `${hexagonCenterX}px`;
        span.style.top = `${hexagonCenterY + yOffset}px`;
        span.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;
        span.style.fontSize = "0.55vw";
        span.style.fontFamily = "Arial";
        span.style.color = colorName;
        span.innerHTML = text;
        divTag.appendChild(span);
      }
      divTag.addEventListener("click", (event) => {
        event.stopPropagation();
        handleClick(id);
      });
      container.appendChild(divTag);
    }
  }, []);

  return <div id={hexagoneId} className={classes.wrapper}></div>;
};

export default Hexagon;
