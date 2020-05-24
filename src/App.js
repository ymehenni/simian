import { Layout, Menu, Breadcrumb } from "antd";
import { ThemeProvider } from "antd-theme";
import { DayNightToggle } from "./components/DayNightToggle/DayNightToggle";
import styled from "styled-components";
import React from "react";

const { Header, Content, Footer } = Layout;

const App = () => {
  const [theme, setTheme] = React.useState({ name: "dark" });
  const pickTheme = (e) => {
    const theme = e.target.checked ? "default" : "dark";
    setTheme({ name: theme });
  };
  return (
    <ThemeProvider theme={theme} onChange={(value) => setTheme(value)}>
      <Layout className="layout">
        <Header title="Simian" subTitle="The Free World of Wacraft Simulator">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
            <DayNightToggle onToggle={pickTheme} />
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
