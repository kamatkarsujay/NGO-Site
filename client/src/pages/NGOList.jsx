import { Typography } from "antd";
import { Layout, Menu, Table, List } from "antd";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footers } from "../components/Footers";
import { useState, useEffect } from "react";
import axios from "axios";

const { Sider, Content } = Layout;

const NGOList = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser.user);
    }

    const fetchAdminData = async () => {
      const res = await axios.get("http://localhost:5000/api/v1/admin/users", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setData(res.data.users);
    };

    if (user.role === "admin") {
      fetchAdminData();
    }
  }, [user]);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <Link to={`/ngoDetails/${text}`}>{text}</Link>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
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
            defaultSelectedKeys={["/ngolist"]}
            defaultOpenKeys={["/ngolist"]}
            items={[
              {
                label: "Dashboard",
                icon: <AppstoreOutlined />,
                key: "/dashboardAdmin",
              },
              {
                label: "NGO List",
                icon: <BarsOutlined />,
                key: "/ngolist",
              },
              {
                label: "Child List",
                icon: <BarsOutlined />,
                key: "/adminChildList",
              },
              {
                label: "School List",
                icon: <BarsOutlined />,
                key: "/adminSchoolList",
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
              <Typography.Text className="text-xl">NGO List</Typography.Text>
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
export default NGOList;
