import { Button, Layout, Modal, Input, Select } from "antd";
import { Typography } from "antd";
import { useContext, useEffect } from "react";
import { BucketContext } from "./contexts/bucketContext";
import BucketGrid from "./components/BucketGrid";
import VideoGrid from "./components/VideoGrid";
import { AddBucket } from "./components/AddBucket";
import { useState } from "react";
import { AddVideo } from "./components/AddVideo";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const contentStyle = {
  minHeight: "85vh",
  padding: "0 50px",
};

const footerStyle = {
  width: "100%",
  textAlign: "center",
};

function App() {
  const { getVideoByBucket, buckets } = useContext(BucketContext);
  const newVideos = getVideoByBucket("0");
  return (
    <Layout>
      <Header style={headerStyle}>
        <Title
          level={4}
          style={{
            color: "white",
          }}
        >
          MY Video Buckets
        </Title>
      </Header>
      <Content style={contentStyle}>
        <div
          style={{
            width: "100%",
            padding: "50px 0px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Title level={2}>Buckets</Title>
            <AddBucket />
          </div>
          <BucketGrid />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Title level={2}>Unorganised Videos</Title>
          <AddVideo />
        </div>
        <VideoGrid videos={newVideos.length == 0 ? null : newVideos} />
      </Content>
      <Footer style={footerStyle}>Made with ❤️ by Mansi</Footer>
    </Layout>
  );
}

export default App;
