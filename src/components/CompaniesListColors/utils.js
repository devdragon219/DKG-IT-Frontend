const getBackgroundColor = (id, listData) => {
  const item = listData.find((item) => item.id === id);
  return item?.backgroundColor;
};

const getLabel = (id, listData) => {
  const item = listData.find((item) => item.id === id);
  return item?.label;
};

const getLink = (id, listData) => {
  const item = listData.find((item) => item.id === id);
  return item?.link;
};

export { getLabel, getLink, getBackgroundColor };
