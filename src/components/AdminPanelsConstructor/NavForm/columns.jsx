/* eslint-disable jsx-a11y/anchor-is-valid */
import { Popconfirm } from "antd";

export const mainColumns = (
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
) => {
  const columns = [
    {
      key: "sort",
    },
    {
      title: "Logo",
      dataIndex: "logo",
      type: "select",
      editable: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      type: "string",
      editable: true,
    },
    {
      title: "Has sub-items",
      dataIndex: "hasSubItems",
      type: "boolean",
      editable: true,
    },
    {
      title: "Is Cards Section",
      dataIndex: "isCardsSection",
      type: "boolean",
      editable: true,
    },
    {
      title: "Link",
      dataIndex: "link",
      type: "string",
      editable: true,
    },
    {
      title: "Is Link",
      dataIndex: "isLink",
      type: "boolean",
      editable: true,
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a onClick={() => save(record.key)} style={{ marginRight: 8 }}>
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <a disabled={editingKey !== ""} onClick={() => edit(record)}>
              Edit
            </a>

            <a
              style={{ marginLeft: 8 }}
              onClick={() => {
                if (isChildNav) {
                  deleteSubRow(parentKey, record.key);
                } else {
                  deleteRow(record.key);
                }
              }}
            >
              Delete
            </a>
          </span>
        );
      },
    },
  ];

  if (isChildNav) {
    columns.splice(3, 1);
    columns.splice(1, 1);
  }

  return columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        isEditing: isEditing(record),
        editable: col.editable,
        type: col.type,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave,
        savedKey: savedKey,
        clearEditingKey: clearEditingKey,
      }),
    };
  });
};
