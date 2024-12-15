"use client";
import { theme } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";

interface AdminContentProps {
  children: React.ReactNode;
}

const AdminContent = ({ children }: AdminContentProps) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        style={{
          padding: 24,
          minHeight: "calc(100vh - 152px)",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default AdminContent;
