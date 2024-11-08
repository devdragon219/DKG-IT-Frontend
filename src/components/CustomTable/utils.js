function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function adjustColorTransparency(number, minValue, maxValue, color) {
  number = Math.max(Math.min(number, maxValue), minValue);
  const normalizedValue = (number - minValue) / (maxValue - minValue);

  let adjustedAlpha = 1.3 - normalizedValue;
  const rgbaRegex = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/;
  const [, red, green, blue] = color.match(rgbaRegex);
  if (isNaN(adjustedAlpha)) {
    adjustedAlpha = 1;
  }

  const adjustedColor = `rgba(${red}, ${green}, ${blue}, ${adjustedAlpha})`;

  return adjustedColor;
}

function findMinMaxValues(data) {
  const result = {};

  for (const key in data[0]) {
    result[key] = [];
  }

  for (const item of data) {
    for (const key in item) {
      const value = item[key];

      if (result[key][0] === undefined || value < result[key][0]) {
        result[key][0] = value;
      }

      if (result[key][1] === undefined || value > result[key][1]) {
        result[key][1] = value;
      }
    }
  }

  return result;
}

export { getComparator, stableSort, adjustColorTransparency, findMinMaxValues };
