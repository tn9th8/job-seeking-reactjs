import React from "react";
import Logo from "../../../public/Logo.png";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const section = [
  {
    title: "Về ITJob",
    item: [
      "Trang chủ",
      "Việc Làm IT",
      "Top Công Ty IT",
      "Liên hệ",
      "Câu hỏi thường gặp",
    ],
  },
  {
    title: "Chương trình",
    item: ["Chuyện IT", "Cuộc thi viết"],
  },
  {
    title: "Điều khoản chung",
    item: [
      "Quy định bảo mật",
      "Quy chế hoạt động",
      "Giải quyết khiếu nại",
      "Thỏa thuận sử dụng",
      "Thông cáo báo chí",
    ],
  },
  {
    title: "Liên hệ để đăng tin tuyển dụng",
    item: [
      "Hồ Chí Minh: (+84) 977 460 519",
      "Hà Nội: (+84) 983 131 351",
      "Email: love@itjob.com",
      "Gửi thông tin liên hệ",
    ],
  },
];

const items = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "https://www.twitter.com/",
  },
  {
    name: "Twitch",
    icon: FaTwitch,
    link: "https://www.twitch.com/",
  },
  {
    name: "Github",
    icon: FaGithub,
    link: "https://www.github.com/",
  },
];

const Footer = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          marginTop: "24px",
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 35%, rgba(121,9,9,1) 75%, rgba(255,0,0,1) 100%)",
          color: "#D1D5DB",
          padding: "24px 8px",
          borderTopLeftRadius: "50px",
        }}
      >
        <div
          style={{
            maxWidth: "1240px",
            margin: "auto 60px auto 60px",
            display: "flex",
            justifyContent: "flex-start",
            borderBottom: "2px solid #4B5563",
            padding: "8px 0",
            marginLeft: "60px",
          }}
        >
          {section.map((section, index) => (
            <div
              key={index}
              style={{
                flexBasis: "25%",
                minWidth: "200px",
                maxWidth: "300px",
                marginRight: "10px",
              }}
            >
              <h6
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  paddingTop: "8px",
                  fontSize: "12px",
                }}
              >
                {section.title}
              </h6>
              <ul>
                {section.item.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      paddingTop: "8px",
                      color: "#9CA3AF",
                      cursor: "pointer",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div
            style={{
              flexBasis: "25%",
              minWidth: "200px",
              maxWidth: "300px",
              paddingTop: "8px",
            }}
          >
            <img
              src={Logo}
              alt="Newsletter"
              style={{ width: "150px", height: "auto", marginBottom: "8px" }}
            />
            <p style={{ paddingTop: "16px", paddingBottom: "8px" }}>
              Ít nhưng mà chất.
            </p>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <input
                type="email"
                placeholder="Nhập địa chỉ email..."
                style={{
                  width: "100%",
                  padding: "8px",
                  marginRight: "8px",
                  borderRadius: "4px",
                  marginBottom: "8px",
                }}
              />
              <button
                style={{
                  padding: "8px",
                  marginBottom: "8px",
                  cursor: "pointer",
                  color: "#ffffff",
                  borderRadius: "10px",
                  background: "red",
                }}
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>

        {/* Copyright & Social Icons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "1240px",
            margin: "auto",
            padding: "16px 8px",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#9CA3AF",
          }}
        >
          <p style={{ paddingBottom: "16px" }}>
            2024 Nhóm 16. All rights reserved.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "300px",
              paddingTop: "16px",
              fontSize: "24px",
            }}
          >
            {items.map((x, index) => {
              const Icon = x.icon;
              return (
                <Icon
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => window.open(x.link, "_blank")}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
