import React, { useState, useEffect, useCallback } from "react";
import { Layout, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import RGL, { WidthProvider } from "react-grid-layout";
import ImageToBase64Converter from "./ImageToBase64Converter";
import AddHeaderDataModal from "../Modals/AddHeaderDataModal";
import AddDataSection from "./AddDataSection";
import LazyComponent from "../LazyComponent";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 as uuidv4 } from "uuid";
import "./Header.css";

const ReactGridLayout = WidthProvider(RGL);

const { Header } = Layout;

const HeaderConstructor = ({
  isEditMode,
  logoBase64,
  setLogoBase64,
  headerData,
  setHeaderData,
}) => {
  const [visible, setVisible] = useState(false);

  const [layout, setLayout] = useState([]);
  const [editData, setEditData] = useState(null);
  const [isCardComponentOpen, setIsCardComponentOpen] = useState(false);

  useEffect(() => {
    if (headerData.length > 0) {
      setLayout(headerData);
    }
  }, [headerData]);

  const setNewLayout = (newLayout) => {
    const newLayouts = newLayout.map((el, index) => {
      if (layout?.[index]) {
        const { data, type } = layout[index];
        return { ...el, data, type };
      }

      return { ...el };
    });

    setLayout(newLayouts);

    setHeaderData(newLayouts);
  };

  const addItem = useCallback(
    (type, data) => {
      let maxY = -1;
      layout.forEach((item) => {
        const bottomY = item.y + item.h;
        if (bottomY > maxY) {
          maxY = bottomY;
        }
      });

      const newItem = {
        x: 0,
        y: maxY,
        w: 2,
        h: 2,
        i: uuidv4(),
        data: data,
        type: type,
      };

      setLayout([...layout, newItem]);
      setHeaderData([...layout, newItem]);
    },
    [layout]
  );

  const editItem = useCallback(
    (key, data) => {
      const newLayout = JSON.parse(JSON.stringify(layout));
      const editIndex = newLayout.findIndex((el) => el?.i === key);
      newLayout[editIndex].data = data;

      setLayout(newLayout);
      setHeaderData(newLayout);
      setEditData(null);
    },
    [layout]
  );

  const deleteItem = useCallback(
    (key) => {
      const newLayout = JSON.parse(JSON.stringify(layout));
      const editIndex = newLayout.findIndex((el) => el?.i === key);

      newLayout.splice(editIndex, 1);

      setLayout(newLayout);
      setHeaderData(newLayout);
    },
    [layout]
  );

  const openDialog = useCallback(
    (type) => {
      if (type === "HeaderButtonComponent") {
        setIsCardComponentOpen(true);
      }
    },
    [layout]
  );

  const openEditDialog = useCallback(
    (type, key) => {
      const data = layout.find((el) => el?.i === key)?.data;
      setEditData({
        data,
        key,
      });

      if (type === "HeaderButtonComponent") {
        setIsCardComponentOpen(true);
      }
    },
    [layout]
  );

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <AddHeaderDataModal
        isCardComponentOpen={isCardComponentOpen}
        setIsCardComponentOpen={setIsCardComponentOpen}
        addItem={addItem}
        editData={editData}
        editItem={editItem}
        setEditData={setEditData}
      />
      <Header className="header">
        <div className="logo">
          <ImageToBase64Converter
            isEditMode={isEditMode}
            logoBase64={logoBase64}
            setLogoBase64={setLogoBase64}
          />
        </div>
        <div className="desktop-menu">
          <ReactGridLayout
            layout={layout}
            rowHeight={50}
            isDraggable={isEditMode}
            isResizable={isEditMode}
            onLayoutChange={setNewLayout}
            compactType={null}
          >
            {layout?.map((item) => {
              const key = item.i;
              return (
                <div
                  style={{
                    background: "none",
                    boxShadow: "none",
                    border: "none",
                    padding: 0,
                    margin: "0 8px",
                  }}
                  key={`${key}`}
                  data-grid={{ ...item }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <LazyComponent componentName={item.type} data={item.data} />
                  </div>
                  {isEditMode ? (
                    <>
                      <RemoveButton
                        onClick={() => {
                          deleteItem(item.i);
                        }}
                      />
                      <EditButton
                        onClick={() => {
                          openEditDialog(item.type, item.i, item?.itemConfig);
                        }}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </ReactGridLayout>
        </div>
        <div className="menu-button">
          <Button
            type="primary"
            onClick={showDrawer}
            icon={<MenuOutlined />}
            size="large"
          />
        </div>
        <Drawer title="Menu" placement="right" onClose={onClose} open={visible}>
          <div className="mobile-menu">
            {headerData.map((item, index) => (
              <Button key={index} className="menu-item" size="large" block>
                {item.name}
              </Button>
            ))}
          </div>
        </Drawer>
      </Header>
      {isEditMode ? <AddDataSection openDialog={openDialog} /> : <></>}
    </div>
  );
};

const EditButton = ({ onClick }) => (
  <Tooltip title="Edit" onClick={onClick}>
    <IconButton
      sx={{
        position: "absolute",
        bottom: "5px",
        left: "5px",
        zIndex: 1000,
        background: "white",
      }}
    >
      <EditIcon
        style={{
          fontSize: "10px",
        }}
      />
    </IconButton>
  </Tooltip>
);

const RemoveButton = ({ onClick }) => (
  <Tooltip title="Remove" onClick={onClick}>
    <IconButton
      sx={{
        position: "absolute",
        bottom: "5px",
        left: "45px",
        zIndex: 1000,
        background: "white",
      }}
    >
      <DeleteIcon
        style={{
          fontSize: "10px",
        }}
      />
    </IconButton>
  </Tooltip>
);

export default HeaderConstructor;
