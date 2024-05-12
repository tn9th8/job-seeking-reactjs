import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IJob } from "@/types/backend";
import { callFetchJobById } from "@/config/api";
import styles from "styles/client.module.scss";
import parse from "html-react-parser";
import { Col, Divider, Row, Skeleton, Tag } from "antd";
import {
  DollarOutlined,
  EnvironmentOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import {
  changeEnumListSkill,
  fetchListSkill,
  getLocationName,
} from "@/config/utils";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ApplyModal from "@/components/client/modal/apply.modal";
dayjs.extend(relativeTime); // fix bug ngày

const ClientJobDetailPage = (props: any) => {
  const [jobDetail, setJobDetail] = useState<IJob | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  let location = useLocation();
  let params = new URLSearchParams(location.search);
  const id = params?.get("id"); // job id

  useEffect(() => {
    const init = async () => {
      if (id) {
        setIsLoading(true);
        const res = await callFetchJobById(id);
        if (res?.data) {
          setJobDetail(res.data);
        }
        setIsLoading(false);
      }
    };
    init();
  }, [id]);
  const [listSkill, setListSkill] = useState<any>();
  useEffect(() => {
    fetchListSkill().then((result) => {
      if (result) {
        const newResult = setListSkill(changeEnumListSkill(result as any));
        return newResult;
      }
      return result;
    });
    return () => {};
  }, []);

  return (
    <div className={`${styles["container"]} ${styles["detail-job-section"]}`}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Row gutter={[20, 20]}>
          {jobDetail && jobDetail._id && (
            <>
              <Col span={24} md={16}>
                <div className={styles["header"]}>{jobDetail.name}</div>
                <div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className={styles["btn-apply"]}
                  >
                    Apply Now
                  </button>
                </div>
                <Divider />
                <div className={styles["skills"]}>
                  {jobDetail?.skills?.map((item, index) => {
                    return (
                      <Tag key={`${index}-key`} color="gold">
                        {listSkill[item]}
                      </Tag>
                    );
                  })}
                </div>
                <div className={styles["salary"]}>
                  <DollarOutlined />
                  <span>
                    &nbsp;
                    {(jobDetail.salary + "")?.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ","
                    )}{" "}
                    đ
                  </span>
                </div>
                <div className={styles["location"]}>
                  <EnvironmentOutlined style={{ color: "#58aaab" }} />
                  &nbsp;{getLocationName(jobDetail.location)}
                </div>
                <div>
                  <HistoryOutlined />{" "}
                  {dayjs(jobDetail.updatedAt).format("DD-MM-YYYY HH:mm:ss")}
                </div>
                <Divider />
                {parse(jobDetail.description)}
              </Col>

              <Col span={24} md={8}>
                <div className={styles["company"]}>
                  <div>
                    <img
                      alt="example"
                      src={`${
                        import.meta.env.VITE_BACKEND_URL
                      }/images/company/${jobDetail.company?.logo}`}
                    />
                  </div>
                  <div>{jobDetail.company?.name}</div>
                </div>
              </Col>
            </>
          )}
        </Row>
      )}
      <ApplyModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        jobDetail={jobDetail}
      />
    </div>
  );
};
export default ClientJobDetailPage;
