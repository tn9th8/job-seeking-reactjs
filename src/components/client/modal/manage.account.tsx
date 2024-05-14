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
  callFetchCompany,
  callFetchResumeByUser,
  callGetSubscriberByUser,
  callGetUserInfor,
  callUpdateSubscriber,
  callUpdateUserInfor,
  callUpdateUserPassword,
} from "@/config/api";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  MonitorOutlined,
} from "@ant-design/icons";
import { useAppSelector } from "@/redux/hooks";
import {
  ProForm,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-components";
import { DebounceSelect } from "@/components/admin/user/debouce.select";
import { ICompanySelect } from "@/components/admin/user/modal.user";
import { add } from "lodash";
import { fetchListSkill } from "@/config/utils";

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
  const [companies, setCompanies] = useState<ICompanySelect[]>([]);
  const [roles, setRoles] = useState<ICompanySelect[]>([]);

  const [form] = Form.useForm();
  const isAuthenticated = useAppSelector(
    (state) => state.account.isAuthenticated
  );
  const onStart = async () => {
    if (isAuthenticated) {
      const res = await callGetUserInfor();
      if (res.data) {
        form.setFieldsValue({
          email: res.data.email,
          name: res.data.name,
          age: res.data.age,
          gender: res.data.gender,
          address: res.data.address,
        });
      }
    }
  };
  useEffect(() => {
    onStart();
  }, []);
  const onFinish = async (values: any) => {
    const { name, age, gender, address } = values;
    const res = await callUpdateUserInfor(name, age, gender, address);
    if (res.data) {
      message.success("Cập nhật thông tin thành công");
      onStart();
    } else {
      notification.error({
        message: "Có lỗi xảy ra",
        description: res.message,
      });
    }
  };
  return (
    <Form onFinish={onFinish} form={form}>
      <Row gutter={16}>
        <Col lg={12} md={12} sm={24} xs={24}>
          <ProFormText
            label="Email"
            name="email"
            disabled={true}
            rules={[
              { required: true, message: "Vui lòng không bỏ trống" },
              { type: "email", message: "Vui lòng nhập email hợp lệ" },
            ]}
            placeholder="Email"
          />
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <ProFormText
            label="Tên hiển thị"
            name="name"
            rules={[{ required: true, message: "Vui lòng không bỏ trống" }]}
            placeholder="Nhập tên hiển thị"
          />
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <ProFormDigit
            label="Tuổi"
            name="age"
            rules={[{ required: true, message: "Vui lòng không bỏ trống" }]}
            placeholder="Nhập nhập tuổi"
          />
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <ProFormSelect
            name="gender"
            label="Giới Tính"
            valueEnum={{
              MALE: "Nam",
              FEMALE: "Nữ",
              OTHER: "Khác",
            }}
            placeholder="Please select a gender"
            rules={[{ required: true, message: "Vui lòng chọn giới tính!" }]}
          />
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <ProFormText
            label="Địa chỉ"
            name="address"
            rules={[{ required: true, message: "Vui lòng không bỏ trống" }]}
            placeholder="Nhập địa chỉ"
          />
        </Col>
        <Col span={24}>
          <Button onClick={() => form.submit()}>Cập nhật</Button>
        </Col>
      </Row>
    </Form>
  );
};

const UserUpdatePassword = (props: any) => {
  const [form] = Form.useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const onFinish = async (values: any) => {
    const { currentPass, newPass } = values;
    const res = await callUpdateUserPassword(currentPass, newPass);

    if (res.data) {
      message.success("Cập nhật mật khẩu thành công");
      form.resetFields();
    } else {
      notification.error({
        message: "Có lỗi xảy ra",
        description: res.message,
      });
    }
  };
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
  );
};

const JobByEmail = (props: any) => {
  const [form] = Form.useForm();
  const user = useAppSelector((state) => state.account.user);
  const [listSkill, setListSkill] = useState<any>();
  const [skillSubscriber, setSkillSubscriber] = useState<any>();
  useEffect(() => {
    const init = async () => {
      const res = await callGetSubscriberByUser();
      if (res && res.data) {
        form.setFieldValue("skills", res.data.skills);
        const data: { _id: string; name: string }[] = res.data.skills as any;
        const transformedData = data.map((item) => {
          return {
            value: item._id,
            name: item.name,
          };
        });
        form.setFieldValue("skills", transformedData);
      }
    };
    init();
  }, []);

  const onFinish = async (values: any) => {
    const { skills } = values;
    const res = await callUpdateSubscriber({
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

  useEffect(() => {
    fetchListSkill().then((result) => {
      if (result) {
        const newResult = result.map((item) => {
          return {
            value: item.value,
            label: item.name,
          };
        });
        setListSkill(newResult);

        return newResult;
      }
      return result;
    });
    return () => {};
  }, []);
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
                options={listSkill}
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
