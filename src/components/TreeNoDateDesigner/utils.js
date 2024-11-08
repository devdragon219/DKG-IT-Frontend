function addFutureClass(obj, year) {
  if (
    obj.attributes &&
    obj.attributes.year &&
    parseInt(obj.attributes.year) > parseInt(year)
  ) {
    obj.classes = "future";
  }
  if (obj.children && obj.children.length > 0) {
    let allFuture = true;
    for (let i = 0; i < obj.children.length; i++) {
      addFutureClass(obj.children[i], year);
      if (!obj.children[i].classes || obj.children[i].classes !== "future") {
        allFuture = false;
      }
    }
    if (allFuture) {
      obj.classes = "future";
    }
  }
  return obj;
}

function transform(data) {
  const result = { name: "Start", children: [] };

  function processNode(node, parent) {
    const keys = Object.keys(node);
    const name = keys[0];
    const children = node[name];
    const newNode = {
      name,
      children: [],
    };
    parent.children.push(newNode);

    if (typeof children === "object") {
      for (const key in children) {
        processNode({ [key]: children[key] }, newNode);
      }
    } else {
      newNode.attributes = { year: children };
    }
  }

  processNode(data, result);

  return result?.children?.[0];
}

function getUniqueYears(obj) {
  let allYears = [];

  // eslint-disable-next-line no-unused-vars
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && !Array.isArray(value)) {
      allYears = allYears.concat(getUniqueYears(value));
    } else if (!isNaN(parseInt(value))) {
      allYears.push(parseInt(value));
    }
  }

  return [...new Set(allYears)].sort();
}

function getTreeData(year, obj) {
  return addFutureClass(transform(obj), year);
}

export { getTreeData, getUniqueYears };
