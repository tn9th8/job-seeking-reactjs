import DataTable from "@/components/client/data-table";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { IResume, ISkill } from "@/types/backend";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import {
  ActionType,
  ProColumns,
  ProFormSelect,
} from "@ant-design/pro-components";
import {
  Button,
  Popconfirm,
  Select,
  Space,
  Tag,
  message,
  notification,
} from "antd";
import { useState, useRef } from "react";
import dayjs from "dayjs";
import { callDeleteResume } from "@/config/api";
import queryString from "query-string";
import { useNavigate } from "react-router-dom";
import { fetchResume } from "@/redux/slice/resumeSlide";
import ViewDetailResume from "@/components/admin/resume/view.resume";
import { ALL_PERMISSIONS } from "@/config/permissions";
import Access from "@/components/share/access";

const SkillPage = () => {
  const tableRef = useRef<ActionType>();

  const isFetching = useAppSelector((state) => state.skill.isFetching);
  const meta = useAppSelector((state) => state.skill.meta);
  const skills = useAppSelector((state) => state.skill.result);
  const dispatch = useAppDispatch();

  const [dataInit, setDataInit] = useState<ISkill | null>(null);
  const [openViewDetail, setOpenViewDetail] = useState<boolean>(false);

  const handleDeleteResume = async (_id: string | undefined) => {
    if (_id) {
      const res = await callDeleteResume(_id);
      if (res && res.data) {
        message.success("Xóa Resume thành công");
        reloadTable();
      } else {
        notification.error({
          message: "Có lỗi xảy ra",
          description: res.message,
        });
      }
    }
  };

  const reloadTable = () => {
    tableRef?.current?.reload();
  };

  const columns: ProColumns<ISkill>[] = [
    {
      title: "Id",
      dataIndex: "_id",
      width: 250,
      hideInSearch: true,
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      hideInSearch: true,
    },

    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      width: 200,
      sorter: true,
      render: (text, record, index, action) => {
        return <>{dayjs(record.createdAt).format("DD-MM-YYYY HH:mm:ss")}</>;
      },
      hideInSearch: true,
    },
    {
      title: "UpdatedAt",
      dataIndex: "updatedAt",
      width: 200,
      sorter: true,
      render: (text, record, index, action) => {
        return <>{dayjs(record.updatedAt).format("DD-MM-YYYY HH:mm:ss")}</>;
      },
      hideInSearch: true,
    },
    {
      title: "Actions",
      hideInSearch: true,
      width: 50,
      render: (_value, entity, _index, _action) => (
        <Space>
          <Access permission={ALL_PERMISSIONS.SKILLS.UPDATE} hideChildren>
            <EditOutlined
              style={{
                fontSize: 20,
                color: "#ffa500",
              }}
              type=""
              onClick={() => {
                // navigate(`/admin/job/upsert?id=${entity._id}`);
              }}
            />
          </Access>
          <Access permission={ALL_PERMISSIONS.SKILLS.DELETE} hideChildren>
            <Popconfirm
              placement="leftTop"
              title={"Xác nhận xóa skill"}
              description={"Bạn có chắc chắn muốn xóa skill này ?"}
              onConfirm={() => {}}
              // onConfirm={() => handleDeleteJob(entity._id)}
              okText="Xác nhận"
              cancelText="Hủy"
            >
              <span style={{ cursor: "pointer", margin: "0 10px" }}>
                <DeleteOutlined
                  style={{
                    fontSize: 20,
                    color: "#ff4d4f",
                  }}
                />
              </span>
            </Popconfirm>
          </Access>
        </Space>
      ),
    },
  ];

  const buildQuery = (params: any, sort: any, filter: any) => {
    const clone = { ...params };
    if (clone.name) clone.name = `/${clone.name}/i`;
    if (clone?.status?.length) {
      clone.status = clone.status.join(",");
    }

    let temp = queryString.stringify(clone);

    let sortBy = "";
    if (sort && sort.status) {
      sortBy = sort.status === "ascend" ? "sort=status" : "sort=-status";
    }

    if (sort && sort.createdAt) {
      sortBy =
        sort.createdAt === "ascend" ? "sort=createdAt" : "sort=-createdAt";
    }
    if (sort && sort.updatedAt) {
      sortBy =
        sort.updatedAt === "ascend" ? "sort=updatedAt" : "sort=-updatedAt";
    }

    //mặc định sort theo updatedAt
    if (Object.keys(sortBy).length === 0) {
      temp = `${temp}&sort=-updatedAt`;
    } else {
      temp = `${temp}&${sortBy}`;
    }
    // temp +=
    //   "&populate=companyId,jobId&fields=companyId._id, companyId.name, companyId.logo, jobId._id, jobId.name";
    return temp;
  };

  return (
    <div>
      <Access permission={ALL_PERMISSIONS.SKILLS.GET_PAGINATE}>
        <DataTable<ISkill>
          actionRef={tableRef}
          headerTitle="Danh sách Skills"
          rowKey="_id"
          loading={isFetching}
          columns={columns}
          dataSource={skills}
          request={async (params, sort, filter): Promise<any> => {
            const query = buildQuery(params, sort, filter);
            dispatch(fetchResume({ query }));
          }}
          scroll={{ x: true }}
          pagination={{
            current: meta.current,
            pageSize: meta.pageSize,
            showSizeChanger: true,
            total: meta.total,
            showTotal: (total, range) => {
              return (
                <div>
                  {" "}
                  {range[0]}-{range[1]} trên {total} rows
                </div>
              );
            },
          }}
          rowSelection={false}
          toolBarRender={(_action, _rows): any => {
            return <></>;
          }}
        />
      </Access>
      <ViewDetailResume
        open={openViewDetail}
        onClose={setOpenViewDetail}
        dataInit={dataInit}
        setDataInit={setDataInit}
        reloadTable={reloadTable}
      />
    </div>
  );
};

export default SkillPage;
