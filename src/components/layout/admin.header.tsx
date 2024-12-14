"use client";
import { theme } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";

const AdminHeader = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return <Header style={{ padding: 0, background: colorBgContainer }} />;
};

export default AdminHeader;
