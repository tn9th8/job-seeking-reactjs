import React, { useEffect, useState } from "react";
import { Line } from "@ant-design/charts";
import { callFetchOpenJobList } from "@/config/api";

const Page: React.FC = () => {
  const [openJobs, setOpenJobs] = useState([]);

  const config = {
    data: openJobs,
    height: 400,
    xField: "position",
    yField: "value",
  };

  async function fetchOpenJobList() {
    const response = await callFetchOpenJobList()
    if (response && response?.data) {
      setOpenJobs(response?.data)
    }
  }

  useEffect(() => {
    fetchOpenJobList()
  }, [])

  return (
    <>
      <div style={{ backgroundColor: "white", borderRadius: "40px" }}>
        {" "}
        <Line {...config} title={"Thống kê các vị trí tuyển dụng"} />
      </div>
    </>
  );
};
export default Page;
