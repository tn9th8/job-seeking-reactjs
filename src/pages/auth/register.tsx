import {
  Button,
  Divider,
  Form,
  Input,
  Row,
  Select,
  message,
  notification,
} from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { callRegister } from "config/api";
import styles from "styles/auth.module.scss";
import { IUser } from "@/types/backend";
import video_bg from "../../../public/video_bg.mp4";
const { Option } = Select;

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);

  const onFinish = async (values: IUser) => {
    const { name, email, password, age, gender, address } = values;
    setIsSubmit(true);
    const res = await callRegister(
      name,
      email,
      password as string,
      +age,
      gender,
      address
    );
    setIsSubmit(false);
    if (res?.data?._id) {
      message.success("Đăng ký tài khoản thành công!");
      navigate("/login");
    } else {
      notification.error({
        message: "Có lỗi xảy ra",
        description:
          res.message && Array.isArray(res.message)
            ? res.message[0]
            : res.message,
        duration: 5,
      });
    }
  };

  return (
    <div className={styles["register-page"]}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          zIndex: "-1",
          top: "0",
          left: "0",
          width: "100%",
          height: "160vh",
          objectFit: "cover",
        }}
      >
        <source src={video_bg} type="video/mp4" />
      </video>
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.wrapper}>
            <div className={styles.heading}>
              <h2
                className={`${styles.text} ${styles["text-large"]}`}
                style={{ textAlign: "center" }}
              >
                {" "}
                Đăng Ký Tài Khoản{" "}
              </h2>
              <Divider />
            </div>
            <Form<IUser>
              name="basic"
              // style={{ maxWidth: 600, margin: '0 auto' }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                labelCol={{ span: 24 }} //whole column
                label={
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Họ tên
                  </span>
                }
                name="name"
                rules={[
                  { required: true, message: "Họ tên không được để trống!" },
                ]}
              >
                <Input style={{ borderRadius: "20px", padding: "10px 11px" }} />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 24 }} //whole column
                label={
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Email
                  </span>
                }
                name="email"
                rules={[
                  { required: true, message: "Email không được để trống!" },
                ]}
              >
                <Input
                  type="email"
                  style={{ borderRadius: "20px", padding: "10px 11px" }}
                />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 24 }} //whole column
                label={
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Mật khẩu
                  </span>
                }
                name="password"
                rules={[
                  { required: true, message: "Mật khẩu không được để trống!" },
                ]}
              >
                <Input.Password
                  style={{ borderRadius: "20px", padding: "10px 11px" }}
                />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }} //whole column
                label={
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Tuổi
                  </span>
                }
                name="age"
                rules={[
                  { required: true, message: "Tuổi không được để trống!" },
                ]}
              >
                <Input
                  type="number"
                  style={{ borderRadius: "20px", padding: "10px 11px" }}
                />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 24 }} //whole column
                name="gender"
                label={
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Giới tính
                  </span>
                }
                rules={[
                  { required: true, message: "Giới tính không được để trống!" },
                ]}
              >
                <Select
                  // placeholder="Select a option and change input text above"
                  // onChange={onGenderChange}
                  allowClear
                  style={{ height: "40px" }}
                >
                  <Option value="male">Nam</Option>
                  <Option value="female">Nữ</Option>
                  <Option value="other">Khác</Option>
                </Select>
              </Form.Item>

              <Form.Item
                labelCol={{ span: 24 }} //whole column
                label={
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Địa chỉ
                  </span>
                }
                name="address"
                rules={[
                  { required: true, message: "Địa chỉ không được để trống!" },
                ]}
              >
                <Input style={{ borderRadius: "20px", padding: "10px 11px" }} />
              </Form.Item>

              <Form.Item
              // wrapperCol={{ offset: 6, span: 16 }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={isSubmit}
                  style={{ borderRadius: "20px", padding: "4px 200px" }}
                >
                  Đăng ký
                </Button>
              </Form.Item>
              <Divider style={{ color: "white" }}> Or </Divider>
              <p className="text text-normal" style={{ color: "white" }}>
                {" "}
                Đã có tài khoản ?
                <span>
                  <Link to="/login"> Đăng Nhập </Link>
                </span>
              </p>
            </Form>
          </section>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
