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
import { callForgotPassword, callRegister } from "config/api";
import styles from "styles/auth.module.scss";
import { IUser } from "@/types/backend";
const { Option } = Select;

const ForgotAccountPage = () => {
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);

  const onFinish = async (values: IUser) => {
    const { email } = values;
    setIsSubmit(true);
    const res = await callForgotPassword(email);
    // await callRegister(
    //   name,
    //   email,
    //   password as string,
    //   +age,
    //   gender,
    //   address
    // );
    setIsSubmit(false);
    if (res?.data) {
      message.success(
        "Thay đổi mật khẩu thành công. Vui lòng đăng nhập Email để biết mật khẩu!"
      );
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
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.wrapper}>
            <div className={styles.heading}>
              <h2 className={`${styles.text} ${styles["text-large"]}`}>
                {" "}
                Quên mật khẩu{" "}
              </h2>
              <Divider />
            </div>
            <Form<IUser>
              name="basic"
              style={{ maxWidth: 600, margin: "0 auto" }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                labelCol={{ span: 24 }} //whole column
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Email không được để trống!" },
                ]}
              >
                <Input type="email" />
              </Form.Item>

              <Form.Item
              // wrapperCol={{ offset: 6, span: 16 }}
              >
                <Button type="primary" htmlType="submit" loading={isSubmit}>
                  Quên mật khẩu
                </Button>
              </Form.Item>
              <Divider> Or </Divider>
              <p className="text text-normal">
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

export default ForgotAccountPage;
