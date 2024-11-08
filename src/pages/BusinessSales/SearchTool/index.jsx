import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import { NAMES } from "../../../constants/names";
import { LINKS_CONSTS } from "../../../constants/links";

import "./SearchField.css";

const SearchTool = () => {
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    const filteredOptions = Object.entries(NAMES)
      .filter((item) => LINKS_CONSTS.hasOwnProperty(item[0]))
      .filter(([_key, val]) => val.toLowerCase().includes(value.toLowerCase()))
      .map(([key, val]) => ({ value: val, key }));

    setOptions(filteredOptions);
  };

  const onSelect = (value) => {
    const key = Object.keys(NAMES).find((key) => NAMES[key] === value);

    if (LINKS_CONSTS?.[key]?.link) {
      window.open(LINKS_CONSTS?.[key].link, "_blank");
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
