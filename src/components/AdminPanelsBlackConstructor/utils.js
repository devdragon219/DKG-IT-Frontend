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

function getAllLabels(data) {
  let labels = [];

  function extractLabels(items) {
    items.forEach((item) => {
      labels.push(item.label); // Add the label of the current item
      if (item?.children && item?.children?.length) {
        extractLabels(item.children); // Recursively extract labels from sub-items
      }
    });
  }

  extractLabels(data);
  return labels;
}

function findLabelByNodeId(data, nodeId) {
  for (let item of data) {
    if (item.key === nodeId) {
      return item.label;
    }

    if (item.children) {
      let label = findLabelByNodeId(item.children, nodeId);
      if (label) {
        return label;
      }
    }
  }

  return null;
}

function findIsGoogleFormByNodeId(data, nodeId) {
  for (let item of data) {
    if (item.nodeId === nodeId) {
      return item.isGoogleForm;
    }

    if (item.subItems) {
      const isGoogleFormInSubItems = findIsGoogleFormByNodeId(
        item.subItems,
        nodeId
      );
      if (isGoogleFormInSubItems) {
        return true;
      }
    }
  }

  return false;
}

export {
  getListItemID,
  getSubItemID,
  getAllLabels,
  findLabelByNodeId,
  findIsGoogleFormByNodeId,
};
