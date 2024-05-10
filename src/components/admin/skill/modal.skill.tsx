import {
  ModalForm,
  ProForm,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-components";
import { Col, Form, Row, message, notification } from "antd";
import { isMobile } from "react-device-detect";
import { useState, useEffect } from "react";
import {
  callCreateSkill,
  callCreateUser,
  callFetchCompany,
  callFetchRole,
  callUpdateSkill,
  callUpdateUser,
} from "@/config/api";
import { ISkill, IUser } from "@/types/backend";

import { DebounceSelect } from "@/components/admin/user/debouce.select";

interface IProps {
  openModal: boolean;
  setOpenModal: (v: boolean) => void;
  dataInit?: ISkill | null;
  setDataInit: (v: any) => void;
  reloadTable: () => void;
}

const ModalSkill = (props: IProps) => {
  const { openModal, setOpenModal, reloadTable, dataInit, setDataInit } = props;
  const [skill, setSkill] = useState();
  const [form] = Form.useForm();

  const submitSkill = async (valuesForm: any) => {
    const { name, description } = valuesForm;
    if (!dataInit) {
      const res = await callCreateSkill(name, description);
      if (res.data) {
        message.success("Thêm mới skill thành công");
        handleReset();
        reloadTable();
      } else {
        notification.error({
          message: "Có lỗi xảy ra",
          description: res.message,
        });
      }
    } else {
      const res = await callUpdateSkill(name, description, dataInit._id);
      if (res.data) {
        message.success("Cập nhật skill thành công");
        handleReset();
        reloadTable();
      } else {
        notification.error({
          message: "Có lỗi xảy ra",
          description: res.message,
        });
      }
    }
  };

  const handleReset = async () => {
    form.resetFields();
    setDataInit(null);
    setOpenModal(false);
  };

  return (
    <>
      <ModalForm
        title={<>{dataInit?._id ? "Cập nhật Skill" : "Tạo mới Skill"}</>}
        open={openModal}
        modalProps={{
          onCancel: () => {
            handleReset();
          },
          afterClose: () => handleReset(),
          destroyOnClose: true,
          width: isMobile ? "100%" : 900,
          keyboard: false,
          maskClosable: false,
          okText: <>{dataInit?._id ? "Cập nhật" : "Tạo mới"}</>,
          cancelText: "Hủy",
        }}
        scrollToFirstError={true}
        preserve={false}
        form={form}
        onFinish={submitSkill}
        initialValues={dataInit?._id ? dataInit : {}}
      >
        <Row gutter={16}>
          <Col lg={6} md={6} sm={24} xs={24}>
            <ProFormText
              label="Name"
              name="name"
              rules={[{ required: true, message: "Vui lòng không bỏ trống" }]}
              placeholder="Nhập Tên Skill"
            />
          </Col>

          <Col lg={18} md={18} sm={24} xs={24}>
            <ProFormText
              label="Mô tả Skill"
              name="description"
              rules={[{ required: true, message: "Vui lòng không bỏ trống" }]}
              placeholder="Nhập mô tả Skill"
            />
          </Col>
        </Row>
      </ModalForm>
    </>
  );
};

export default ModalSkill;
