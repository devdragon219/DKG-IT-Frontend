export const mainColumns = (
  isEditing,
  cancel,
  edit,
  deleteRow,
  save,
  editingKey,
  handleSave,
  savedKey,
  clearEditingKey
) => {
  const columns = [
    {
      key: "sort",
    },
    {
      title: "Name",
      dataIndex: "name",
      type: "string",
      editable: true,
    },
    {
      title: "Link",
      dataIndex: "link",
      type: "string",
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

            <a onClick={cancel}>Cancel</a>
          </span>
        ) : (
          <span>
            <a disabled={editingKey !== ""} onClick={() => edit(record)}>
              Edit
            </a>

            <a
              style={{ marginLeft: 8 }}
              onClick={() => {
                deleteRow(record.key);
              }}
            >
              Delete
            </a>
          </span>
        );
      },
    },
  ];

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
