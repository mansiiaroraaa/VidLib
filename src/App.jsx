import { useState } from "react";
import { Button, Layout } from "antd";
import { Typography } from "antd";
import BucketGrid from "./components/BucketGrid";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const contentStyle = {
  display: "flex",
  minHeight: "85vh",
  padding: "0 50px",
};

const footerStyle = {
  width: "100%",
  textAlign: "center",
};

function App() {
  const [buckets, setBuckets] = useState([
    {
      title: "Animes",
      thumbnail:
        "https://images.squarespace-cdn.com/content/v1/5a5780226f4ca3aa2a6c9298/f73373ec-f2de-450d-b8e7-059a01acaf3c/image1.jpg?format=1000w",
      noOfVideos: 10,
    },
    {
      title: "Movies",
      thumbnail:
        "https://images.squarespace-cdn.com/content/v1/5a5780226f4ca3aa2a6c9298/f73373ec-f2de-450d-b8e7-059a01acaf3c/image1.jpg?format=1000w",
      noOfVideos: 10,
    },
    {
      title: "TV Shows",
      thumbnail:
        "https://images.squarespace-cdn.com/content/v1/5a5780226f4ca3aa2a6c9298/f73373ec-f2de-450d-b8e7-059a01acaf3c/image1.jpg?format=1000w",
      noOfVideos: 10,
    },
  ]);
  return (
    <Layout>
      <Header style={headerStyle}>
        <Title
          level={4}
          style={{
            color: "white",
          }}
        >
          Convin Assignmenmt
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
            <Button shape="circle">+</Button>
          </div>
          {buckets ? (
            <BucketGrid buckets={buckets} setBuckets={setBuckets} />
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Title level={4}>No buckets found</Title>
            </div>
          )}
        </div>
      </Content>
      <Footer style={footerStyle}>Made with ❤️ by Mansi</Footer>
    </Layout>
  );
}

export default App;
