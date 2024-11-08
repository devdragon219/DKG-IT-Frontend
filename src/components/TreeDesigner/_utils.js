function filterByYear(year, obj) {
  if (obj.attributes && parseInt(obj.attributes.year) > year) {
    return null;
  }

  if (obj.children) {
    obj.children = obj.children
      .map((child) => filterByYear(year, child))
      .filter((child) => child !== null);
  }

  if (obj.children && obj.children.length === 0 && obj.attributes) {
    return parseInt(obj.attributes.year) <= year ? obj : null;
  }

  if (!obj.children && !obj.attributes) {
    return null;
  }

  return obj;
}

function deleteNodesWithoutAttributes(node) {
  if (!node.attributes && node.children.length === 0) {
    return null;
  } else if (node.children.length > 0) {
    node.children = node.children
      .map((child) => deleteNodesWithoutAttributes(child))
      .filter((child) => child !== null);
    if (node.attributes || node.children.length > 0) {
      return node;
    } else {
      return null;
    }
  } else {
    return node;
  }
}

function getDepth(tree) {
  if (!tree.children) {
    return 0;
  } else {
    let maxDepth = 0;
    for (let i = 0; i < tree.children.length; i++) {
      const depth = getDepth(tree.children[i]);
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    }
    return maxDepth + 1;
  }
}

function countNodes(tree) {
  if (!tree.children) {
    return 1;
  } else {
    let count = 1;
    for (let i = 0; i < tree.children.length; i++) {
      count += countNodes(tree.children[i]);
    }
    return count;
  }
}

export { getDepth, countNodes, filterByYear, deleteNodesWithoutAttributes };
