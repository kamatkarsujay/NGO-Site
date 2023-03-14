import { Menu } from "antd";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Menu
        mode="inline"
        style={{
          height: "100%",
          borderRight: 0,
        }}
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/dashboard",
          },
          {
            label: "NGO List",
            icon: <BarsOutlined />,
            key: "/ngolist",
          },
          {
            label: "Child List",
            icon: <BarsOutlined />,
            key: "/childlist",
          },
        ]}
      ></Menu>
    </div>
  );
};
export default SideMenu;
