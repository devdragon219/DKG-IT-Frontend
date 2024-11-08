function createBrickData(
  cardTitle,
  cardSubTitle1,
  cardSubTitle2,
  logos,
  modalDescription,
  numCols
) {
  const bricksData = [];
  let brickIndex = 0;

  for (let row = 0; brickIndex < cardTitle.length; row++) {
    const isOffsetRow = row % 2 === 1;
    const colsInRow = isOffsetRow ? numCols - 1 : numCols;

    for (let col = 0; col < colsInRow; col++) {
      if (cardTitle?.[brickIndex]) {
        bricksData.push({
          name: cardTitle[brickIndex],
          field: cardSubTitle1[brickIndex],
          country: cardSubTitle2[brickIndex],
          logo: logos[brickIndex],
          description: modalDescription[brickIndex],
          row: row,
          col: col,
        });

        brickIndex++;
      }
    }
  }

  return bricksData;
}

function csvToJson(csv) {
  const lines = csv.split("\n");
  const headers = lines[0].split(",").map((header) => header.trim());
  const result = headers.reduce(
    (acc, header) => ({ ...acc, [header]: [] }),
    {}
  );

  lines.slice(1).forEach((line) => {
    let currentField = "";
    let insideQuotes = false;
    const row = [];
    let startNewField = true;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === '"' && (i === 0 || line[i - 1] !== '"')) {
        insideQuotes = !insideQuotes;
        if (!insideQuotes && startNewField) {
          row.push(currentField);
          currentField = "";
          startNewField = false;
        }
        continue;
      }

      if (char === "," && !insideQuotes) {
        if (!startNewField) {
          row.push(currentField);
          currentField = "";
        }
        startNewField = true;
      } else {
        currentField += char;
        startNewField = false;
      }

      if (i === line.length - 1) {
        row.push(currentField);
      }
    }

    row.forEach((value, index) => {
      if (headers[index]) {
        result[headers[index]].push(value.replace(/""/g, '"').trim());
      }
    });
  });

  return result;
}

export { csvToJson, createBrickData };
