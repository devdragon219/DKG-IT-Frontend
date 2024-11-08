// PasswordPage.js

import React, { useState } from "react";
import { Form, Input, Button, Alert } from "antd";

const PasswordPage = ({ onPasswordSubmit }) => {
  const [form] = Form.useForm();
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handlePasswordSubmit = () => {
    const password = form.getFieldValue("password");

    if (password === "DKG2024DS4") {
      onPasswordSubmit(true);
    } else {
      setIncorrectPassword(true);
      form.resetFields();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>Guest Area</h2>
      <Form form={form} onFinish={handlePasswordSubmit}>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please enter the password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {incorrectPassword && (
          <Form.Item>
            <Alert
              message="Incorrect password. Please try again."
              type="error"
              showIcon
            />
          </Form.Item>
        )}

        <Form.Item style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PasswordPage;
