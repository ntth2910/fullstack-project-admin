"use client";
import { Footer } from "antd/es/layout/layout";
import React from "react";

const AdminFooter = () => {
  return (
    <>
      <Footer style={{ textAlign: "center" }}>
        NTTH ©{new Date().getFullYear()} Created by @NTTH
      </Footer>
    </>
  );
};

export default AdminFooter;
