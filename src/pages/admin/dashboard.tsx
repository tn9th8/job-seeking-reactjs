import { Card, Col, Row, Statistic } from "antd";
import CountUp from "react-countup";
import Page from "../dashboard/Page";
import DemoPie from "../dashboard/DemoPie";
import { useEffect, useState } from "react";
import { callFetchPie, callFetchSummary } from "@/config/api";

const DashboardPage = () => {
  const [dataCardDashBoard, setdataCardDashBoard] = useState<any>();
  const [dataPie, setdataPie] = useState<any>();
  const formatter = (value: number | string) => {
    return <CountUp end={Number(value)} separator="," />;
  };
  const fetchDashBoardData = async () => {
    const res = await callFetchSummary();
    if (res && res.data) {
      setdataCardDashBoard(res.data);
    }
  };
  const fetchDashBoardDataPie = async () => {
    const res = await callFetchPie();
    if (res && res.data) {
      const newData = res.data.map((item: any) => {
        return { type: item.name, value: item.number };
      });
      setdataPie(newData);
    }
  };
  useEffect(() => {
    fetchDashBoardData();
    fetchDashBoardDataPie();
    return () => {};
  }, []);

  return (
    <Row gutter={[20, 20]}>
      <Col span={24} md={8}>
        <Card title={dataCardDashBoard?.jobsHiring?.message} bordered={false}>
          <Statistic
            title="Số Lượng"
            value={dataCardDashBoard?.jobsHiring?.number}
            formatter={formatter}
          />
        </Card>
      </Col>
      <Col span={24} md={8}>
        <Card title={dataCardDashBoard?.jobsToday.message} bordered={false}>
          <Statistic
            title="Số Lượng"
            value={dataCardDashBoard?.jobsToday?.number}
            formatter={formatter}
          />
        </Card>
      </Col>
      <Col span={24} md={8}>
        <Card title={dataCardDashBoard?.resumesMonth.message} bordered={false}>
          <Statistic
            title="Số Lượng"
            value={dataCardDashBoard?.resumesMonth?.number}
            formatter={formatter}
          />
        </Card>
      </Col>
      <Row gutter={[20, 20]}>
        <Col>
          <Page />
        </Col>
        <Col>
          <DemoPie data={dataPie} />
        </Col>
      </Row>
    </Row>
  );
};

export default DashboardPage;
