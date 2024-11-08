const getListItemID = (items) => {
  if (items.length === 0) {
    return `0`;
  }
  return `${Math.floor(Math.random() * 1000)}`;
};

const getSubItemID = (items, parentID) => {
  if (items.length === 0) {
    return `${parentID}-0`;
  }
  const prevIdArray = items[items.length - 1].nodeId.split("-");

  return `${parentID}-${Number(prevIdArray[1]) + 1}`;
};

export { getListItemID, getSubItemID };
