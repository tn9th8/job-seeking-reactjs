import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Table,
  Tabs,
  message,
  notification,
} from "antd";
import { isMobile } from "react-device-detect";
import type { TabsProps } from "antd";
import { IResume } from "@/types/backend";
import React, { useState, useEffect } from "react";
import {
  callFetchResumeByUser,
  callGetSubscriberSkills,
  callUpdateSubscriber,
} from "@/config/api";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  MonitorOutlined,
} from "@ant-design/icons";
import { SKILLS_LIST } from "@/config/utils";
import { useAppSelector } from "@/redux/hooks";

interface IProps {
  open: boolean;
  onClose: (v: boolean) => void;
}

const UserResume = (props: any) => {
  const [listCV, setListCV] = useState<IResume[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    const init = async () => {
      setIsFetching(true);
      const res = await callFetchResumeByUser();
      if (res && res.data) {
        setListCV(res.data as IResume[]);
      }
      setIsFetching(false);
    };
    init();
  }, []);

  const columns: ColumnsType<IResume> = [
    {
      title: "STT",
      key: "index",
      width: 50,
      align: "center",
      render: (text, record, index) => {
        return <>{index + 1}</>;
      },
    },
    {
      title: "Công Ty",
      dataIndex: ["companyId", "name"],
    },
    {
      title: "Vị trí",
      dataIndex: ["jobId", "name"],
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
    },
    {
      title: "Ngày rải CV",
      dataIndex: "createdAt",
      render(value, record, index) {
        return <>{dayjs(record.createdAt).format("DD-MM-YYYY HH:mm:ss")}</>;
      },
    },
    {
      title: "",
      dataIndex: "",
      render(value, record, index) {
        return (
          <a
            href={`${import.meta.env.VITE_BACKEND_URL}/images/resume/${
              record?.url
            }`}
            target="_blank"
          >
            Chi tiết
          </a>
        );
      },
    },
  ];

  return (
    <div>
      <Table<IResume>
        columns={columns}
        dataSource={listCV}
        loading={isFetching}
        pagination={false}
      />
    </div>
  );
};

const UserUpdateInfo = (props: any) => {
  return <div>//todo</div>;
};

const UserUpdatePassword = (props: any) => {
  const [form] = Form.useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const onFinish = () => {};
  return (
    <Form onFinish={onFinish} form={form}>
      <Row gutter={[20, 5]}>
        <Col span={24}>
          <Form.Item
            label={"Mật khẩu hiện tại"}
            name={"currentPass"}
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu hiện tại" },
            ]}
          >
            <Input.Password
              placeholder="Mật khẩu hiện tại"
              size="middle"
              style={{ width: "30%", float: "left" }}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label={"Mật khẩu mới"}
            name={"newPass"}
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu mới" }]}
          >
            <Input.Password
              placeholder="Mật khẩu mới"
              size="middle"
              style={{ width: "30%", float: "left" }}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Button onClick={() => form.submit()}>Cập nhật</Button>
        </Col>
      </Row>
    </Form>

    //   <Space direction="horizontal">
    //     <Input.Password
    //       placeholder="input password"
    //       visibilityToggle={{
    //         visible: passwordVisible,
    //         onVisibleChange: setPasswordVisible,
    //       }}
    //     />
    //     <Button
    //       style={{ width: 80 }}
    //       onClick={() => setPasswordVisible((prevState) => !prevState)}
    //     >
    //       {passwordVisible ? "Hide" : "Show"}
    //     </Button>
    //   </Space>
    // </Space>
  );
};

const JobByEmail = (props: any) => {
  const [form] = Form.useForm();
  const user = useAppSelector((state) => state.account.user);

  useEffect(() => {
    const init = async () => {
      const res = await callGetSubscriberSkills();
      if (res && res.data) {
        form.setFieldValue("skills", res.data.skills);
      }
    };
    init();
  }, []);

  const onFinish = async (values: any) => {
    const { skills } = values;
    const res = await callUpdateSubscriber({
      email: user.email,
      name: user.name,
      skills: skills ? skills : [],
    });
    if (res.data) {
      message.success("Cập nhật thông tin thành công");
    } else {
      notification.error({
        message: "Có lỗi xảy ra",
        description: res.message,
      });
    }
  };

  return (
    <>
      <Form onFinish={onFinish} form={form}>
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <Form.Item
              label={"Kỹ năng"}
              name={"skills"}
              rules={[
                { required: true, message: "Vui lòng chọn ít nhất 1 skill!" },
              ]}
            >
              <Select
                mode="multiple"
                allowClear
                showArrow={false}
                style={{ width: "100%" }}
                placeholder={
                  <>
                    <MonitorOutlined /> Tìm theo kỹ năng...
                  </>
                }
                optionLabelProp="label"
                options={SKILLS_LIST}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Button onClick={() => form.submit()}>Cập nhật</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

const ManageAccount = (props: IProps) => {
  const { open, onClose } = props;

  const onChange = (key: string) => {
    // console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "user-resume",
      label: `Rải CV`,
      children: <UserResume />,
    },
    {
      key: "email-by-skills",
      label: `Nhận Jobs qua Email`,
      children: <JobByEmail />,
    },
    {
      key: "user-update-info",
      label: `Cập nhật thông tin`,
      children: <UserUpdateInfo />,
    },
    {
      key: "user-password",
      label: `Thay đổi mật khẩu`,
      children: <UserUpdatePassword />,
    },
  ];

  return (
    <>
      <Modal
        title="Quản lý tài khoản"
        open={open}
        onCancel={() => onClose(false)}
        maskClosable={false}
        footer={null}
        destroyOnClose={true}
        width={isMobile ? "100%" : "1000px"}
      >
        <div style={{ minHeight: 400 }}>
          <Tabs
            defaultActiveKey="user-resume"
            items={items}
            onChange={onChange}
          />
        </div>
      </Modal>
    </>
  );
};

export default ManageAccount;
