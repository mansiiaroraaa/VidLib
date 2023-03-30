import { Col, Divider, Row } from "antd";
import Bucket from "./Bucket";
import { useContext } from "react";
import { BucketContext } from "../contexts/bucketContext.jsx";

function BucketGrid() {
  const { buckets } = useContext(BucketContext);
  return buckets ? (
    <div
      style={{
        padding: "50px 50px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Row gutter={[16, 16]} justify={"center"} width={"100%"}>
        {buckets.map((bucket) => (
          <Col span={6}>
            <Bucket
              key={bucket.bucketId}
              bucketId={bucket.bucketId}
              title={bucket.title}
              thumbnail={bucket.thumbnail}
              noOfVideos={bucket.noOfVideos}
            />
          </Col>
        ))}
      </Row>
      <Divider width={"100%"} />
    </div>
  ) : (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h1>No buckets found</h1>
    </div>
  );
}

export default BucketGrid;
