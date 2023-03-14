import { Layout, Menu, Divider } from "antd";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footers } from "../components/Footers";
import ChildForm from "./ChildForm";
import { useEffect, useState } from "react";
import axios from "axios";

const { Sider, Content } = Layout;

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/api/v1/children", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setData(res.data.children);
    };
    fetchData();
  });
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
            defaultSelectedKeys={["/dashboard"]}
            defaultOpenKeys={["/dashboard"]}
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
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          Children
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          {data.length}
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                          <i class="fa-solid fa-children"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Divider />
            <ChildForm />
          </Content>
        </Layout>
      </Layout>
      <Footers />
    </>
  );
};
export default Dashboard;
