import { IUser } from "@/types/backend";
import { Badge, Descriptions, Drawer, Space } from "antd";
import dayjs from "dayjs";

interface IProps {
  onClose: (v: boolean) => void;
  open: boolean;
  dataInit?: any;
  setDataInit: (v: any) => void;
}
const ViewDetailSubscriber = (props: IProps) => {
  const { open, dataInit, onClose, setDataInit } = props;
  return (
    <>
      <Drawer
        title="Thông Tin Subscriber"
        placement="right"
        onClose={() => {
          onClose(false);
          setDataInit(null);
        }}
        open={open}
        width={"40vw"}
        maskClosable={true}
        destroyOnClose
      >
        <Descriptions title="" bordered column={2} layout="vertical">
          <Descriptions.Item label="Tên hiển thị">
            {dataInit?.user.name}
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            {dataInit?.user.email}
          </Descriptions.Item>

          <Descriptions.Item label="Skill Subscriber" span={2}>
            <Space size={[80, 30]} wrap>
              {dataInit?.skills.map((item: any) => (
                // eslint-disable-next-line react/no-array-index-key
                <Badge status="success" text={<>{item.name}</>} />
              ))}
            </Space>
          </Descriptions.Item>

          <Descriptions.Item label="Ngày tạo">
            {dataInit && dataInit.createdAt
              ? dayjs(dataInit.createdAt).format("DD-MM-YYYY HH:mm:ss")
              : ""}
          </Descriptions.Item>
          <Descriptions.Item label="Ngày sửa">
            {dataInit && dataInit.updatedAt
              ? dayjs(dataInit.updatedAt).format("DD-MM-YYYY HH:mm:ss")
              : ""}
          </Descriptions.Item>
        </Descriptions>
      </Drawer>
    </>
  );
};

export default ViewDetailSubscriber;
