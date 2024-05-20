import { useState, useEffect } from "react";
import {
  CodeOutlined,
  ContactsOutlined,
  DashOutlined,
  HomeOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  RiseOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Drawer,
  Dropdown,
  Image,
  MenuProps,
  Space,
  message,
} from "antd";
import { Menu, ConfigProvider } from "antd";
import styles from "@/styles/client.module.scss";
import { isMobile } from "react-device-detect";
import { FaReact } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { callLogout } from "@/config/api";
import { setLogoutAction } from "@/redux/slice/accountSlide";
import ManageAccount from "./modal/manage.account";
import vi_VN from "antd/locale/vi_VN";
import Logo from "../../../public/Logo.png";

const Header = (props: any) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector(
    (state) => state.account.isAuthenticated
  );
  const user = useAppSelector((state) => state.account.user);
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const [current, setCurrent] = useState("home");
  const location = useLocation();

  const [openMangeAccount, setOpenManageAccount] = useState<boolean>(false);

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location]);

  const items: MenuProps["items"] = [
    {
      label: (
        <Link to={"/"} style={{ fontSize: "20px", fontFamily: "sans-serif" }}>
          Trang Chủ
        </Link>
      ),
      key: "/",
      icon: <HomeOutlined style={{ fontSize: "20px" }} />,
    },
    {
      label: (
        <Link
          to={"/job"}
          style={{ fontSize: "20px", fontFamily: "sans-serif" }}
        >
          Việc Làm IT
        </Link>
      ),
      key: "/job",
      icon: <CodeOutlined style={{ fontSize: "20px" }} />,
    },
    {
      label: (
        <Link
          to={"/company"}
          style={{ fontSize: "20px", fontFamily: "sans-serif" }}
        >
          Top Công ty IT
        </Link>
      ),
      key: "/company",
      icon: <RiseOutlined style={{ fontSize: "20px" }} />,
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  const handleLogout = async () => {
    const res = await callLogout();
    if (res && res.data) {
      dispatch(setLogoutAction({}));
      message.success("Đăng xuất thành công");
      navigate("/");
    }
  };

  const itemsDropdown = [
    {
      label: (
        <label
          style={{ cursor: "pointer" }}
          onClick={() => setOpenManageAccount(true)}
        >
          Quản lý tài khoản
        </label>
      ),
      key: "manage-account",
      icon: <ContactsOutlined />,
    },
    {
      label: <Link to={"/admin"}>Trang Quản Trị</Link>,
      key: "admin",
      icon: <DashOutlined />,
    },
    {
      label: (
        <label style={{ cursor: "pointer" }} onClick={() => handleLogout()}>
          Đăng xuất
        </label>
      ),
      key: "logout",
      icon: <LogoutOutlined />,
    },
  ];
  const itemsMobiles = [...items, ...itemsDropdown];

  return (
    <>
      <div className={styles["header-section"]}>
        <div className={styles["container"]}>
          {!isMobile ? (
            <div style={{ display: "flex", gap: 30 }}>
              <div className={styles["brand"]}>
                {/* <img
                  src={Logo}
                  alt="Newsletter"
                  style={{
                    width: "150px",
                    height: "auto",
                    marginBottom: "8px",
                  }}
                /> */}
                {/* <FaReact onClick={() => navigate("/")} title="Nhóm 16" /> */}
                <Image
                  width={105}
                  src={Logo}
                  style={{ marginLeft: "-12px", marginTop: "12px" }}
                />
              </div>
              <div className={styles["top-menu"]}>
                <ConfigProvider
                  locale={vi_VN}
                  theme={{
                    token: {
                      colorPrimary: "#fff",
                      colorBgContainer: "#FFFFFF00",
                      colorText: "#a7a7a7",
                    },
                  }}
                >
                  <Menu
                    // onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items}
                    style={{ width: "700px" }}
                  />
                </ConfigProvider>
                <div className={styles["extra"]}>
                  {isAuthenticated === false ? (
                    <Link
                      to={"/login"}
                      style={{ fontSize: "20px", fontFamily: "sans-serif" }}
                    >
                      Đăng Nhập/Đăng Ký
                    </Link>
                  ) : (
                    <Dropdown
                      menu={{ items: itemsDropdown }}
                      trigger={["click"]}
                    >
                      <Space style={{ cursor: "pointer" }}>
                        <span>Welcome {user?.name}</span>
                        <Avatar>
                          {" "}
                          {user?.name?.substring(0, 2)?.toUpperCase()}{" "}
                        </Avatar>
                      </Space>
                    </Dropdown>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className={styles["header-mobile"]}>
              <span>Your APP</span>
              <MenuFoldOutlined onClick={() => setOpenMobileMenu(true)} />
            </div>
          )}
        </div>
      </div>
      <Drawer
        title="Chức năng"
        placement="right"
        onClose={() => setOpenMobileMenu(false)}
        open={openMobileMenu}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="vertical"
          items={itemsMobiles}
        />
      </Drawer>
      <ManageAccount open={openMangeAccount} onClose={setOpenManageAccount} />
    </>
  );
};

export default Header;
