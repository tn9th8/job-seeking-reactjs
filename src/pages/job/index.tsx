import SearchClient from "@/components/client/search.client";
import { Col, Divider, Row } from "antd";
import styles from "styles/client.module.scss";
import JobCard from "@/components/client/card/job.card";
import { useState } from "react";

const ClientJobPage = (props: any) => {
  const [skill, setSkill] = useState([]);
  const [location, setLocation] = useState([]);
  const [showCompany, setshowCompany] = useState<boolean>(true);
  return (
    <div className={styles["container"]} style={{ marginTop: 20 }}>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <SearchClient
            setSkill={setSkill}
            setLocation={setLocation}
            skill={skill}
            location={location}
            setshowCompany={setshowCompany}
          />
        </Col>
        <Divider />

        <Col span={24}>
          <JobCard showPagination={true} skill={skill} location={location} />
        </Col>
      </Row>
    </div>
  );
};

export default ClientJobPage;
