/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect, useCallback } from "react";
import { Table, Button, Input, Form, Modal } from "antd";

const AddTitleDataModal = ({
  isTitleContentSectionModalOpen,
  setIsTitleContentSectionModalOpen,
  dataSource,
  setDataSource,
  setEditData,
}) => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (dataSource?.key) {
      setData(dataSource.data);
      setTitle(dataSource.title);
    }
  }, [dataSource]);

  return (
    <>
      <Modal
        title="Add Title"
        width={1000}
        open={isTitleContentSectionModalOpen}
        footer={[
          <Button
            key="back"
            onClick={() => {
              setEditData(null);
              setData([]);
              setTitle("");
              setIsTitleContentSectionModalOpen(false);
            }}
          >
            Cancel
          </Button>,
          <Button
            type="primary"
            onClick={() => {
              setDataSource({ data, title });
              setIsTitleContentSectionModalOpen(false);
              setData([]);
              setTitle("");
            }}
          >
            Submit
          </Button>,
        ]}
        centered
      >
        <div
          style={{
            marginBottom: "10px",
          }}
        >
          <span>Title:</span>
          <Input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
      </Modal>
    </>
  );
};

export default AddTitleDataModal;
