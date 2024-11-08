/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect, useCallback } from "react";
import { Table, Button, Input, Checkbox, Form } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { makeStyles } from "@mui/styles";
import { v4 as uuidv4 } from "uuid";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { mainColumns } from "./columns";
import IconSelect from "./IconSelect";
import IconByName from "../IconByName";

const useStyles = makeStyles({
  buttonCell: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

const EditableContext = React.createContext(null);

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  type,
  isEditing,
  savedKey,
  clearEditingKey,
  ...restProps
}) => {
  const form = useContext(EditableContext);

  const inputRef = React.useRef(null);

  let childNode = children;

  useEffect(() => {
    if (savedKey && savedKey === record?.key) {
      const values = form.getFieldValue();
      handleSave({ ...record, ...values });
      clearEditingKey();
    }
  }, [savedKey, form]);

  useEffect(() => {
    if (dataIndex) {
      form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    }
  }, []);

  const isLinkChecked = form.getFieldValue()?.isLink;
  const isCardsSectionChecked = form.getFieldValue()?.isCardsSection;
  const hasSubItemsChecked = form.getFieldValue()?.hasSubItems;

  const isDisabled = (field) => {
    if (field === "isLink") {
      return isCardsSectionChecked || hasSubItemsChecked;
    } else {
      return isLinkChecked;
    }
  };

  if (editable) {
    childNode = isEditing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        valuePropName={type === "boolean" ? "checked" : undefined}
      >
        {type === "boolean" ? (
          <Checkbox
            ref={inputRef}
            onChange={(e) => {
              const value = e.target.checked;
              form.setFieldsValue({ [dataIndex]: value });
            }}
            disabled={isDisabled(dataIndex)}
          />
        ) : type === "select" ? (
          <IconSelect
            onChange={(data) => {
              form.setFieldsValue({ [dataIndex]: data });
            }}
          />
        ) : (
          <Input
            ref={inputRef}
            value={record[dataIndex]}
            onChange={(e) => {
              const value = e.target.value;
              form.setFieldsValue({ [dataIndex]: value });
            }}
          />
        )}
      </Form.Item>
    ) : (
      <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }}>
        {type === "boolean" ? (
          <Checkbox checked={form.getFieldValue()[dataIndex]} disabled={true} />
        ) : type === "select" ? (
          <IconByName iconName={form.getFieldValue()[dataIndex]} />
        ) : (
          form.getFieldValue()[dataIndex]
        )}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const EditableRow = ({ children, ...props }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props["data-row-key"],
  });

  const [form] = Form.useForm();

  const style = {
    ...props.style,
    transform: CSS.Transform.toString(
      transform && {
        ...transform,
        scaleY: 1,
      }
    ),
    transition,
    ...(isDragging ? { position: "relative", zIndex: 9999 } : {}),
  };

  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} ref={setNodeRef} style={style} {...attributes}>
          {React.Children.map(children, (child) => {
            if (child.key === "sort") {
              return React.cloneElement(child, {
                children: (
                  <MenuOutlined
                    ref={setActivatorNodeRef}
                    style={{
                      touchAction: "none",
                      cursor: "move",
                    }}
                    {...listeners}
                  />
                ),
              });
            }
            return child;
          })}
        </tr>
      </EditableContext.Provider>
    </Form>
  );
};

const NavForm = ({
  dataSource,
  setDataSource,
  isChildNav = false,
  parentKey,
  parentData,
  editingKey,
  setEditingKey,
}) => {
  const classes = useStyles();
  const [savedKey, setSavedKey] = useState(null);

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    setEditingKey(record.key);
  };

  const handleSave = (row) => {
    if (isChildNav) {
      setDataSource((prevDataSource) => {
        const updateSubItem = (items, parentKey, row) => {
          for (const item of items) {
            if (item.key === parentKey) {
              const index = item.subItems.findIndex(
                (subItem) => subItem.key === row.key
              );
              if (index > -1) {
                item.subItems[index] = { ...item.subItems[index], ...row };
              }
              return;
            }
            if (item.subItems) {
              updateSubItem(item.subItems, parentKey, row);
            }
          }
        };

        const newData = [...prevDataSource];
        updateSubItem(newData, parentKey, row);
        return newData;
      });
    } else {
      const newData = [...dataSource];
      const index = newData.findIndex((item) => row.key === item.key);
      const item = newData[index];
      newData.splice(index, 1, { ...item, ...row });
      setDataSource(newData);
      setEditingKey("");
    }
  };

  const clearEditingKey = () => {
    setSavedKey(null);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = (key) => {
    setEditingKey("");
    setSavedKey(key);
  };

  const deleteRow = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const deleteSubRow = (parentKey, subItemKey) => {
    setDataSource((prevDataSource) => {
      const deleteSubItem = (items, parentKey, subItemKey) => {
        for (const item of items) {
          if (item.key === parentKey) {
            item.subItems = item.subItems.filter(
              (subItem) => subItem.key !== subItemKey
            );
            return;
          }
          if (item.subItems) {
            deleteSubItem(item.subItems, parentKey, subItemKey);
          }
        }
      };

      const newData = [...prevDataSource];
      deleteSubItem(newData, parentKey, subItemKey);
      return newData;
    });
  };

  const onDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) {
      return;
    }

    setDataSource((prevDataSource) => {
      const findItemAndParent = (items, key, parent = null) => {
        for (const item of items) {
          if (item.key === key) {
            return { item, parent };
          }
          if (item.subItems) {
            const result = findItemAndParent(item.subItems, key, item);
            if (result) {
              return result;
            }
          }
        }
        return null;
      };

      const { item: draggedItem, parent: draggedParent } =
        findItemAndParent(prevDataSource, active.id) || {};

      const { item: overItem, parent: overParent } =
        findItemAndParent(prevDataSource, over.id) || {};

      if (!draggedItem || !overItem) {
        return prevDataSource;
      }

      if (draggedParent === overParent) {
        const items = draggedParent ? draggedParent.subItems : prevDataSource;
        const activeIndex = items.findIndex((i) => i.key === active.id);
        const overIndex = items.findIndex((i) => i.key === over.id);

        const newItems = arrayMove(items, activeIndex, overIndex);
        if (draggedParent) {
          draggedParent.subItems = newItems;
        } else {
          return newItems;
        }
      } else {
        // Handle moving items between different parents or between top-level and sub-items
        // This part can be quite complex, depending on how you want to handle these cases.
        // You might want to prevent moving items between different levels or handle it in a specific way.
      }

      return [...prevDataSource];
    });
  };

  const addMenuItem = useCallback(() => {
    setDataSource([
      ...dataSource,
      {
        key: uuidv4(),
        name: "",
        hasSubItems: false,
        isCardsSection: false,
        isParent: true,
        subItems: [],
        link: "",
        isLink: false,
      },
    ]);
  }, [dataSource]);

  const addSubMenuItem = useCallback(() => {
    parentData.forEach((element) => {
      if (element?.key === parentKey) {
        element.subItems = [
          ...element.subItems,
          {
            key: uuidv4(),
            name: "",
            isCardsSection: false,
            isParent: true,
            link: "",
            isLink: false,
          },
        ];
      }
    });

    setDataSource([...parentData]);
  }, [dataSource, parentData, parentKey]);

  return (
    <div>
      <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
        <SortableContext
          items={dataSource.map((i) => i.key)}
          strategy={verticalListSortingStrategy}
        >
          <Table
            components={{
              body: {
                row: EditableRow,
                cell: EditableCell,
              },
            }}
            rowKey="key"
            columns={mainColumns(
              isEditing,
              cancel,
              edit,
              deleteRow,
              save,
              editingKey,
              handleSave,
              savedKey,
              clearEditingKey,
              deleteSubRow,
              parentKey,
              isChildNav
            )}
            dataSource={dataSource}
            pagination={false}
            expandable={{
              expandedRowRender: (record) => {
                return (
                  <div>
                    <NavForm
                      isChildNav={true}
                      parentKey={record.key}
                      dataSource={record.subItems}
                      parentData={dataSource}
                      setDataSource={setDataSource}
                      editingKey={editingKey}
                      setEditingKey={setEditingKey}
                    />
                  </div>
                );
              },
              rowExpandable: (record) => record.hasSubItems === true,
            }}
            summary={() => (
              <Table.Summary fixed={"bottom"}>
                <Table.Summary.Row>
                  {isChildNav ? (
                    <></>
                  ) : (
                    <>
                      <Table.Summary.Cell index={4}></Table.Summary.Cell>
                      <Table.Summary.Cell index={4}></Table.Summary.Cell>
                    </>
                  )}

                  <Table.Summary.Cell index={4}></Table.Summary.Cell>
                  <Table.Summary.Cell index={4}></Table.Summary.Cell>
                  <Table.Summary.Cell index={4}></Table.Summary.Cell>
                  <Table.Summary.Cell index={4}></Table.Summary.Cell>
                  <Table.Summary.Cell index={4}></Table.Summary.Cell>
                  <Table.Summary.Cell index={4}></Table.Summary.Cell>
                  <Table.Summary.Cell index={10} className={classes.buttonCell}>
                    <Button onClick={isChildNav ? addSubMenuItem : addMenuItem}>
                      + ADD ITEM
                    </Button>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            )}
          />
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default NavForm;
