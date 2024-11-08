import React, { useMemo, useRef, useState } from "react";
import { Tabs } from "antd";
import { v4 as uuidv4 } from "uuid";

import diagrams from "../dataCallbacks";
import { useParams } from "react-router-dom";

const SpreadsheetTabs = ({
  data,
  selectedKey,
  setSelectedKey,
  setData,
  setDataSettings,
  setCustomizeSettings,
  dataSettings,
  customizeSettings,
}) => {
  const { diagramType } = useParams();
  const initialItems = [
    {
      label: "Tab 1",
      key: "1",
    },
    {
      label: "Tab 2",
      key: "2",
    },
    {
      label: "Tab 3",
      key: "3",
    },
  ];
  const config = diagrams[diagramType].data;

  const memoItems = useMemo(() => {
    const keys = Object.keys(data);

    return keys.map((key, index) => {
      return {
        label: `Tab ${index + 1}`,
        key,
        closable: index !== 0,
      };
    });
  }, [data]);

  const [items, setItems] = useState(initialItems);

  const onChange = (newActiveKey) => {
    setSelectedKey(newActiveKey);
  };

  const add = () => {
    const newActiveKey = `${uuidv4()}-${Object.keys(data).length + 1}`;

    const firstKey = Object.keys(config.data)[0];
    const newData = { ...data, [newActiveKey]: config.data[firstKey] };
    const newDataSettings = {
      ...dataSettings,
      [newActiveKey]: config.dataSettings[firstKey],
    };
    const newCustomizeConfig = {
      ...customizeSettings,
      [newActiveKey]: config.customizeSettings[firstKey],
    };

    setData(newData);
    setDataSettings(newDataSettings);
    setCustomizeSettings(newCustomizeConfig);
    setSelectedKey(newActiveKey);
  };

  const remove = (targetKey) => {
    let newActiveKey = selectedKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setSelectedKey(newActiveKey);
  };
  const onEdit = (targetKey, action) => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };
  return (
    <Tabs
      type="editable-card"
      onChange={onChange}
      activeKey={selectedKey}
      onEdit={onEdit}
      items={memoItems}
    />
  );
};
export default SpreadsheetTabs;
