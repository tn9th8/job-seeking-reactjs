import { Button, Col, Form, Row, Select } from "antd";
import { EnvironmentOutlined, MonitorOutlined } from "@ant-design/icons";
import {
  LOCATION_LIST,
  changeEnumListSkill,
  fetchListSkill,
} from "@/config/utils";
import { ProForm } from "@ant-design/pro-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchClient = (props: any) => {
  const [listSkill, setListSkill] = useState<any>();
  const optionsLocations = LOCATION_LIST;
  const [form] = Form.useForm();
  const { setLocation, setSkill, skill, location, setshowCompany } = props;
  const navigate = useNavigate();
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
  const onFinish = async (values: any) => {
    setshowCompany(false);
    setLocation(form.getFieldValue(["location"]));
    setSkill(form.getFieldValue(["skills"]));
  };

  return (
    <ProForm
      form={form}
      onFinish={onFinish}
      submitter={{
        render: () => <></>,
      }}
    >
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <h2>Việc Làm IT Cho Developer "Chất"</h2>
        </Col>
        <Col span={24} md={16}>
          <ProForm.Item name="skills">
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
          </ProForm.Item>
        </Col>
        <Col span={12} md={4}>
          <ProForm.Item name="location">
            <Select
              mode="multiple"
              allowClear
              showArrow={false}
              style={{ width: "100%" }}
              placeholder={
                <>
                  <EnvironmentOutlined /> Địa điểm...
                </>
              }
              optionLabelProp="label"
              options={optionsLocations}
            />
          </ProForm.Item>
        </Col>
        <Col span={12} md={4}>
          <Button
            type="primary"
            onClick={() => {
              form.submit();
            }}
          >
            Search
          </Button>
        </Col>
      </Row>
    </ProForm>
  );
};
export default SearchClient;
