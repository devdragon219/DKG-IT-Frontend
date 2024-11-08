const getColLength = (data) => {
  const divider = Math.ceil(data.length / 20);

  return Math.round(data.length / divider);
};

function chunkArray(myArray, chunk_size) {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    const myChunk = myArray.slice(index, index + chunk_size);
    if (myChunk.length < chunk_size) {
      const diff = chunk_size - myChunk.length;
      for (let i = 0; i < diff; i++) {
        myChunk.push(undefined);
      }
    }
    tempArray.push(myChunk);
  }

  return tempArray;
}

const getFontSize = (dataLength) => {
  if (dataLength > 15) {
    return "1.5vw";
  }

  if (dataLength > 100) {
    return "1vw";
  }

  return "2vw";
};

export { getColLength, chunkArray, getFontSize };
