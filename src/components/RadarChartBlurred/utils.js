export function transformData(data1) {
  const transformedData = data1.labels.map((label, index) => {
    const newData = { subject: label };

    data1.datasets.forEach((dataset) => {
      newData[dataset.legend] = Number(dataset.data[index]);
    });

    return newData;
  });

  return transformedData;
}

export function findMaxNumber(data) {
  let maxNumber = 0; // Start with the lowest possible number

  // Iterate through each dataset
  data.datasets.forEach((dataset) => {
    // Iterate through each number in the dataset
    dataset.data.forEach((num) => {
      // Update maxNumber if a larger number is found
      if (num > maxNumber) {
        maxNumber = num;
      }
    });
  });

  return maxNumber;
}
