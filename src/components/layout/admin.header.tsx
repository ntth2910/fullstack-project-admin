"use client";
import { AdminContext } from "@/library/admin.context";
import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useContext } from "react";

const AdminHeader = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];

  const { collapseMenu, setCollapseMenu } = useContext(AdminContext)!;

  return (
    <Header
      style={{
        padding: 0,
        display: "flex",
        background: "#f5f5f5",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        type="text"
        icon={collapseMenu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapseMenu(!collapseMenu)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <Dropdown menu={{ items }}>
        <a
          onClick={(e) => e.preventDefault()}
          style={{
            color: "unset",
            lineHeight: "0 !important",
            marginRight: 20,
          }}
        >
          <Space>
            Welcome Admin
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </Header>
  );
};

export default AdminHeader;
