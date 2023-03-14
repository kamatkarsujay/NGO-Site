import { List, Typography } from "antd";
import { Layout, Menu, Table } from "antd";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footers } from "../components/Footers";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URI } from "../utils/helper";

const { Sider, Content } = Layout;

const ChildList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${BASE_URI}/children`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setData(res.data.children);
    };
    fetchData();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <Link to={`/childDetails/${text}`}>{text}</Link>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Schemes",
      dataIndex: "schemes",
      key: "schemes",
    },
  ];

  return (
    <>
      <Navbar />
      <Layout className="mt-2">
        <Sider
          width={250}
          style={{
            background: "#ffff",
          }}
        >
          <Menu
            mode="inline"
            style={{
              height: "100%",
              borderRight: 0,
            }}
            onClick={(item) => {
              navigate(item.key);
            }}
            defaultSelectedKeys={["/childlist"]}
            defaultOpenKeys={["/childlist"]}
            items={[
              {
                label: "Dashboard",
                icon: <AppstoreOutlined />,
                key: "/dashboard",
              },
              {
                label: "Child List",
                icon: <BarsOutlined />,
                key: "/childlist",
              },
            ]}
          ></Menu>
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 600,
              background: "#ffff",
            }}
          >
            <div className="lg:px-4">
              <Typography.Text className="text-xl">Child List</Typography.Text>
              <List className="py-4">
                <Table columns={columns} dataSource={data} />
              </List>
            </div>
          </Content>
        </Layout>
      </Layout>
      <Footers />
    </>
  );
};
export default ChildList;
