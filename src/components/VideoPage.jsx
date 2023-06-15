import { Button, Layout } from "antd";
import { Typography } from "antd";
import { useContext } from "react";
import { BucketContext } from "../contexts/bucketContext";
import VideoGrid from "./VideoGrid";
import { useParams } from "react-router-dom";
import { AddVideo } from "./AddVideo";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "50px",
};

const contentStyle = {
  minHeight: "85vh",
  padding: "0 50px",
};

const footerStyle = {
  width: "100%",
  textAlign: "center",
};

function VideoPage() {
  const { bucket } = useParams();
  const { getVideoByBucket, getBucketTitle } = useContext(BucketContext);
  const videos = getVideoByBucket(bucket);
  const bucketTitle = getBucketTitle(bucket);
  const { setVideos } = useContext(BucketContext);
  return (
    <Layout>
      <Header style={headerStyle}>
        <Title
          level={4}
          style={{
            color: "white",
          }}
        >
          VidLib
        </Title>
      </Header>
      <Content style={contentStyle}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Title level={2}>{bucketTitle} Videos</Title>
          <AddVideo />
        </div>
        <VideoGrid
          videos={videos.length === 0 ? null : videos}
          setVideos={setVideos}
        />
      </Content>
      <Footer style={footerStyle}>Made with ❤️ by Mansi</Footer>
    </Layout>
  );
}

export default VideoPage;
