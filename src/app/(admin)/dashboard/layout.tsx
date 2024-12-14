import React, { Children } from "react";
import { Layout, theme } from "antd";
import AdminSideBar from "@/components/layout/admin.sidebar";
import AdminHeader from "@/components/layout/admin.header";
import AdminFooter from "@/components/layout/admin.footer";
import AdminContent from "@/components/layout/admin.content";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <Layout>
      <AdminSideBar />
      <Layout>
        <AdminHeader />
        <AdminContent>{children}</AdminContent>
        <AdminFooter />
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
