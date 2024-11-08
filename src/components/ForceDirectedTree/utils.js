function getDepth(tree) {
  if (!tree.children) {
    return 0;
  } else {
    let maxDepth = 1;
    for (let i = 0; i < tree.children.length; i++) {
      const depth = getDepth(tree.children[i]);
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    }
    return maxDepth + 1;
  }
}

export { getDepth };
