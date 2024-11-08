function chunkArray(myArray, chunk_size) {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    const myChunk = myArray.slice(index, index + chunk_size);
    if (myChunk.length < chunk_size) {
      const diff = chunk_size - myChunk.length;
      for (let i = 0; i < diff; i++) {
        myChunk.push({});
      }
    }
    tempArray.push(myChunk);
  }

  return tempArray;
}

export { chunkArray };
