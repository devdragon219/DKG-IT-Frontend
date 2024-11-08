const getBorderIndex = (rowIndex, steps, rows) => {
  // if (steps[0] === rowIndex) {
  //   return false;
  // }

  if (rows.length - 1 === rowIndex) {
    return false;
  }

  if (steps.includes(rowIndex)) {
    return true;
  }

  return false;
};

const getRows = (startNumCols = 0, numRows, images) => {
  const rows = [];

  let startNumRowss = numRows;
  let dataLengths = images.length;

  for (startNumRowss; dataLengths > 0; ) {
    dataLengths = dataLengths - startNumRowss;

    ++startNumRowss;
  }
  numRows = startNumRowss - numRows;

  let start = 0;
  let numCols = startNumCols;
  let allItems = images.length;
  for (let i = 0; allItems > 0; i++) {
    let row = [];

    for (let j = 0; j < numCols; j++) {
      if (images[start + j]) {
        row.push(images[start + j]);
      }
    }

    if (row?.length && rows[i - 1]?.length >= row?.length) {
      if (row?.length <= rows?.length) {
        let temp = [...row];
        let index = i - 1;
        for (let i = row?.length; i > 0; i--) {
          let diff = rows[index]?.length - temp?.length;
          let rest = rows[index].slice(-diff - 1);
          const tempor = rows[index].slice(diff + 1);
          rows[index] = [...rest, ...temp];
          index--;
          temp = tempor;
        }
      } else if (row.length >= rows[0].length) {
        let done = false;

        for (let i = rows.length - 1; i >= 0; i--) {
          if (row?.length >= rows[i]?.length && !done) {
            done = true;
            rows.splice(i + 1, 0, row);
          }
        }
      } else {
        if (rows[0].length - row.length > 2) {
          rows.forEach((el) => {
            let popped = el.pop();
            row.push(popped);
          });
          rows.unshift(row);
        } else {
          rows.unshift(row);
        }
      }
    } else {
      rows.push(row);
    }

    allItems -= numCols;

    start += numCols;
    ++numCols;
  }

  return { rows, lastItemLength: rows?.[rows?.length - 1]?.length };
};

let getWidth = (row, index, rows, numRows) => {
  const numColsBottomRow = rows?.[rows?.length - 1]?.length;

  if (numRows > numColsBottomRow) {
    const diff = numRows - numColsBottomRow;
    return 12 / (numRows + (row.length - index - 1 + diff));
  }
  const diff = numColsBottomRow - numRows;
  return 12 / (numRows + (row.length - index - 1 + diff));
};

export { getBorderIndex, getRows, getWidth };
