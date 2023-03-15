import { useEffect, useState } from "react";
import { Form, Input, Button, Select, Layout, Menu, Typography } from "antd";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import { Footers } from "../components/Footers";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URI } from "../utils/helper";

const { Sider, Content } = Layout;

const AddSchemeForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingChild, setEditingChild] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${BASE_URI}/child/${params.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setData(res.data.child);
    };
    fetchData();
  }, [params.id]);

  const addSchemes = async () => {
    try {
      const res = await axios.put(
        `${BASE_URI}/admin/child/${params.id}`,
        {
          name: editingChild.name,
          age: editingChild.age,
          gender: editingChild.gender,
          schemes: editingChild.schemes,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (res.data) {
        alert("Scheme added successfully");
        setData(res.data.child);
        setIsEditing(false);
        window.location.reload(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteChild = async () => {
    await axios
      .delete(`${BASE_URI}/admin/child/${params.id}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        navigate("/adminSchoolList");
      })
      .catch((err) => console.log(err));
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
            defaultSelectedKeys={["/dashboardAdmin"]}
            defaultOpenKeys={["/dashboardAdmin"]}
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
            {isEditing ? (
              <div className="lg:flex">
                <Form
                  labelCol={{ span: 4 }}
                  className="w-full mt-12 pr-8 max-w-2xl"
                >
                  <Typography.Title className="lg:ml-80 ml-24">
                    Add Scheme
                  </Typography.Title>
                  <Form.Item name="fullName" label="Full Name">
                    <Input
                      placeholder="Enter child's name"
                      className="rounded-md border-1 border-gray-300"
                      defaultValue={editingChild.name}
                      onChange={(e) =>
                        setEditingChild((pre) => {
                          return { ...pre, name: e.target.value };
                        })
                      }
                    />
                  </Form.Item>
                  <Form.Item name="age" label="Age">
                    <Input
                      type="number"
                      placeholder="Enter child's age"
                      className="rounded-md border-1 border-gray-300"
                      defaultValue={editingChild.age}
                      onChange={(e) =>
                        setEditingChild((pre) => {
                          return { ...pre, age: e.target.value };
                        })
                      }
                    />
                  </Form.Item>
                  <Form.Item name="gender" label="Gender">
                    <Select
                      placeholder="Select child's gender"
                      onChange={(value) =>
                        setEditingChild((pre) => {
                          return { ...pre, gender: value };
                        })
                      }
                      defaultValue={editingChild.gender}
                    >
                      <Select.Option value="male">Male</Select.Option>
                      <Select.Option value="female">Female</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="schemes" label="Schemes">
                    <Select
                      placeholder="Select Schemes"
                      onChange={(value) =>
                        setEditingChild((pre) => {
                          return { ...pre, schemes: value };
                        })
                      }
                    >
                      <Select.Option value="Mid-Day Meal Scheme">
                        Mid-Day Meal Scheme
                      </Select.Option>
                      <Select.Option value="Bal Swachhta Abhiyan">
                        Bal Swachhta Abhiyan
                      </Select.Option>
                      <Select.Option value="ICDS Scheme">
                        ICDS Scheme
                      </Select.Option>
                      <Select.Option value="RGSEAG Scheme">
                        RGSEAG Scheme
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      className="lg:ml-96 ml-36 bg-purple-500 rounded-xl text-white font-bold"
                      htmlType="submit"
                      shape="round"
                      onClick={addSchemes}
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
            ) : (
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span className="tracking-wide">Child Details</span>
                </div>
                <table className="table-auto">
                  <tbody>
                    <tr>
                      <td className="px-8 py-4">Name</td>
                      <td>{data.name}</td>
                    </tr>
                    <tr>
                      <td className="px-8 py-4">Age</td>
                      <td>{data.age}</td>
                    </tr>
                    <tr>
                      <td className="px-8 py-4">Gender</td>
                      <td>{data.gender}</td>
                    </tr>
                    <tr>
                      <td className="px-8 py-4">Schemes</td>
                      {data.schemes !== " " ? (
                        <td>{data.schemes}</td>
                      ) : (
                        <td>Schemes haven't assigned yet</td>
                      )}
                    </tr>
                  </tbody>
                </table>
                <button
                  onClick={() => {
                    setIsEditing(true);
                    setEditingChild(data);
                  }}
                  className="bg-purple-500 text-white font-bold p-2 w-16 rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={deleteChild}
                  className="bg-red-500 text-white font-bold ml-2 p-2 w-16 rounded-lg"
                >
                  Delete
                </button>
              </div>
            )}
          </Content>
        </Layout>
      </Layout>
      <Footers />
    </>
  );
};
export default AddSchemeForm;
