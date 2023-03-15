import { Typography } from "antd";
import { Layout, Menu, Form, Input, Button } from "antd";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footers } from "../components/Footers";
import { useState } from "react";
import axios from "axios";
import { BASE_URI } from "../utils/helper";

const { Sider, Content } = Layout;

const AddSchool = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [schemes, setSchemes] = useState("");

  const addSchool = async () => {
    try {
      const res = await axios.post(
        `${BASE_URI}/admin/addSchool`,
        {
          name,
          schemes,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (res.data) {
        alert("School added successfully");
        navigate("/adminSchoolList");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            defaultSelectedKeys={["/adminSchoolList"]}
            defaultOpenKeys={["/adminSchoolList"]}
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
            <div className="lg:flex">
              <Form
                labelCol={{ span: 4 }}
                className="w-full mt-12 pr-8 max-w-2xl"
              >
                <Typography.Title className="lg:ml-80 ml-24">
                  Add Child
                </Typography.Title>
                <Form.Item name="fullName" label="Full Name">
                  <Input
                    placeholder="Enter child's name"
                    className="rounded-md border-1 border-gray-300"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item name="age" label="Age">
                  <Input
                    type="number"
                    placeholder="Enter child's age"
                    className="rounded-md border-1 border-gray-300"
                    value={schemes}
                    onChange={(e) => setSchemes(e.target.value)}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    className="lg:ml-96 ml-36 bg-purple-500 rounded-xl text-white font-bold"
                    type="primary"
                    htmlType="submit"
                    onClick={addSchool}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
              <div className="hidden relative w-1/2 lg:flex items-center justify-center">
                <img
                  src={require("../assets/img/c873eb3d-af24-43c0-befe-6cae7c55520a.avif")}
                  alt="Child Labour"
                  className="rounded-3xl"
                />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
      <Footers />
    </>
  );
};
export default AddSchool;
