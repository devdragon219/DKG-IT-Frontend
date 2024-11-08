/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect, useCallback } from "react";
import { Table, Button, Input, Form, Modal } from "antd";
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
  }, [dataIndex]);

  if (editable) {
    childNode = isEditing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        valuePropName={type === "boolean" ? "checked" : undefined}
      >
        <Input
          onChange={(e) => {
            const value = e.target.value;
            form.setFieldsValue({ [dataIndex]: value });
          }}
        />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24, maxWidth: "90px" }}
      >
        {form.getFieldValue()[dataIndex]}
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

const AddSectionToolForm = ({
  dataSource,
  setDataSource,
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
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setDataSource(newData);
    setEditingKey("");
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

  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setDataSource((previous) => {
        const activeIndex = previous.findIndex((i) => i.key === active.id);
        const overIndex = previous.findIndex((i) => i.key === over?.id);
        return arrayMove(previous, activeIndex, overIndex);
      });
    }
  };

  const addMenuItem = useCallback(() => {
    setDataSource([
      ...dataSource,
      {
        key: uuidv4(),
        name: "",
      },
    ]);
  }, [dataSource]);

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
              clearEditingKey
            )}
            dataSource={dataSource}
            pagination={false}
            summary={() => (
              <Table.Summary fixed={"bottom"}>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={4}></Table.Summary.Cell>
                  <Table.Summary.Cell index={4}></Table.Summary.Cell>
                  <Table.Summary.Cell index={10} className={classes.buttonCell}>
                    <Button onClick={addMenuItem}>+ ADD ITEM</Button>
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

const AddPageToolModal = ({
  isAddSectionToolModalOpen,
  setIsAddSectionToolModalOpen,
  dataSource,
  setDataSource,
}) => {
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState("");

  useEffect(() => {
    setData(dataSource);
  }, [dataSource]);

  return (
    <>
      <Modal
        title="Add Page"
        width={1000}
        open={isAddSectionToolModalOpen}
        footer={[
          <Button
            key="back"
            onClick={() => {
              setData([]);
              setIsAddSectionToolModalOpen(false);
            }}
          >
            Cancel
          </Button>,
          <Button
            type="primary"
            disabled={editingKey}
            onClick={() => {
              setDataSource(data);
              setIsAddSectionToolModalOpen(false);
              setData([]);
            }}
          >
            Submit
          </Button>,
        ]}
        centered
      >
        <AddSectionToolForm
          dataSource={data}
          setDataSource={setData}
          editingKey={editingKey}
          setEditingKey={setEditingKey}
        />
      </Modal>
    </>
  );
};

export default AddPageToolModal;
