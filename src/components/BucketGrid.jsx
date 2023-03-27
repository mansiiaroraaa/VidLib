import { Col, Divider, Row } from "antd";
import Bucket from "./Bucket";
import { useState } from "react";

function BucketGrid({ buckets, setBuckets }) {
  return (
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
              title={bucket.title}
              thumbnail={bucket.thumbnail}
              noOfVideos={bucket.noOfVideos}
            />
          </Col>
        ))}
      </Row>
      <Divider width={"100%"} />
    </div>
  );
}

export default BucketGrid;
