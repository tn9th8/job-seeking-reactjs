import { IUser } from "@/types/backend";
import { Badge, Descriptions, Drawer } from "antd";
import dayjs from "dayjs";

interface IProps {
  onClose: (v: boolean) => void;
  open: boolean;
  dataInit?: any;
  setDataInit: (v: any) => void;
}
const ViewDetailUser = (props: IProps) => {
  const { open, dataInit, onClose, setDataInit } = props;
  // console.log("🚀 ~ ViewDetailUser ~ dataInit:", dataInit);

  return (
    <>
      <Drawer
        title="Thông Tin User"
        placement="right"
        onClose={() => {
          onClose(false);
          // setDataInit(null);
        }}
        open={open}
        width={"40vw"}
        maskClosable={true}
        destroyOnClose
      >
        <Descriptions title="" bordered column={2} layout="vertical">
          <Descriptions.Item label="Tên hiển thị">
            {dataInit?.name}
          </Descriptions.Item>
          <Descriptions.Item label="Email">{dataInit?.email}</Descriptions.Item>

          <Descriptions.Item label="Giới Tính">
            {dataInit?.gender}
          </Descriptions.Item>
          <Descriptions.Item label="Tuổi">{dataInit?.age}</Descriptions.Item>

          <Descriptions.Item label="Vai trò">
            <Badge status="processing" text={<>{dataInit?.role.name}</>} />
          </Descriptions.Item>
          <Descriptions.Item label="Địa chỉ">
            {dataInit?.address}
          </Descriptions.Item>
          <Descriptions.Item label="Thông tin công ty" span={2}>
            Id: {dataInit?.company?._id ?? "-"}
            <br />
            Tên: {dataInit?.company?.name ?? "-"}
            <br />
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

export default ViewDetailUser;
