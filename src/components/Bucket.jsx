import { Card } from "antd";
import { useState, useContext } from "react";
import { BucketContext } from "../contexts/bucketContext";
import { DeleteOutlined, LinkOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Meta } = Card;

function Bucket({ title, thumbnail, noOfVideos, bucketId }) {
  const { setBuckets, buckets, setVideos, videos } = useContext(BucketContext);
  return (
    <Card
      hoverable
      style={{ 
        width: "100%",
        maxWidth: "300px",
       }}
      size="small"
      actions={[
        <Link to={`/bucket/${bucketId}`}>
          <LinkOutlined />
        </Link>,

        <DeleteOutlined
          onClick={() => {
            setBuckets((buckets) =>
              buckets.filter((bucket) => bucket.bucketId !== bucketId)
            );
            setVideos(
              videos.map((video) => {
                if (video.bucketId === bucketId) {
                  return { ...video, bucketId: 0, bucket: "Unorganised" };
                }
                return video;
              })
            );
          }}
        />,
      ]}
    >
      <Link to={`/bucket/${bucketId}`}>
        <div
          style={{
            height: "175px",
            width: "100%",
            backgroundImage: `url(${thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        />

        <Meta title={title} />
      </Link>
    </Card>
  );
}

export default Bucket;
