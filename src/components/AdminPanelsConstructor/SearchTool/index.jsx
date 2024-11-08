import React, { useState, useEffect } from "react";
import { AutoComplete, Input } from "antd";

import "./SearchField.css";

const SearchTool = ({ contentData }) => {
  const [options, setOptions] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    setData(contentData);
  }, [contentData]);

  const handleSearch = (value) => {
    // Flatten the nested structure of contentData to get all items with a data array
    const flattenedData = Object.values(contentData).flatMap((items) =>
      items.flatMap((item) => {
        if (Array.isArray(item.data)) {
          return item.data.map((dataItem) => ({
            value: dataItem.name,
            link: dataItem.demo,
          }));
        }
        return [];
      })
    );

    // Filter options based on search input value
    const filteredOptions = flattenedData.filter((option) =>
      option.value.toLowerCase().includes(value.toLowerCase())
    );

    setOptions(filteredOptions);
  };

  const onSelect = (value) => {
    const selectedOption = options.find((option) => option.value === value);
    if (selectedOption?.link) {
      window.open(selectedOption.link, "_blank");
    }
  };

  return (
    <AutoComplete
      popupMatchSelectWidth={252}
      style={{ width: 300, marginRight: "50px" }}
      size="large"
      options={options}
      onSearch={handleSearch}
      onSelect={onSelect}
    >
      <Input.Search size="large" placeholder="Search..." enterButton />
    </AutoComplete>
  );
};

export default SearchTool;
