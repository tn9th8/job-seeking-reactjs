import { Divider } from "antd";
import styles from "styles/client.module.scss";
import SearchClient from "@/components/client/search.client";
import JobCard from "@/components/client/card/job.card";
import CompanyCard from "@/components/client/card/company.card";
import { useState } from "react";

const HomePage = () => {
  const [skill, setSkill] = useState([]);
  const [location, setLocation] = useState([]);
  const [showCompany, setshowCompany] = useState<boolean>(true);
  return (
    <div className={`${styles["container"]} ${styles["home-section"]}`}>
      <div className="search-content" style={{ marginTop: 20 }}>
        <SearchClient
          setSkill={setSkill}
          setLocation={setLocation}
          skill={skill}
          location={location}
          setshowCompany={setshowCompany}
        />
      </div>
      <Divider />
      {showCompany && <CompanyCard />}
      <div style={{ margin: 50 }}></div>
      <Divider />
      <JobCard skill={skill} location={location} showPagination={true} />
    </div>
  );
};

export default HomePage;
