import React, { useState } from "react";
import { Upload, message, Button } from "antd";
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import API from "../../../API";



// import "./styles.css";

const FileUploadComponent = ({ onChange }) => {
  const [loading, setIsloading] = useState(false);
  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append("files", file);

    try {
      const response = await API.uploadFile({ data: formData });
      onChange(response);
      setIsloading(false);
      message.success(`${response[0].name} uploaded successfully.`);
    } catch (error) {
      setIsloading(false);
      // const data = [
      //   {
      //     url: "https://dkvtools.blob.core.windows.net/it-tools/files/A6C583B4-489C-4B44-A93C-D6DB9C6932BB.JPG",
      //     id: "c3a4b2a7-d5e3-4ca1-8ed4-582d9b5e1c10",
      //     name: "A6C583B4-489C-4B44-A93C-D6DB9C6932BB.JPG",
      //   },
      // ];
      // onChange(data);
      console.error(error); // Error handling
      message.error("Upload failed.");
    }
  };

  // This function is called before upload. It's used here to prevent the default upload behavior and to upload the file immediately.
  const beforeUpload = (file) => {
    setIsloading(true);
    handleUpload(file);
    return false;
  };

  return (
    <div>
      <Upload beforeUpload={beforeUpload} showUploadList={false}>
        <Button
          disabled={loading}
          icon={loading ? <LoadingOutlined /> : <UploadOutlined />}
        >
          Select File
        </Button>
      </Upload>
    </div>
  );
};

export default FileUploadComponent;
