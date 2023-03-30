import { Card, Modal } from "antd";
import { useState, useContext } from "react";
import { BucketContext } from "../contexts/bucketContext";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { EditVideo } from "./EditVideo";
const { Meta } = Card;

function VideoCard({ title, thumbnail, bucket, url, videoId, bucketId }) {
  const [viewVideo, setViewVideo] = useState(false);
  const { setVideos } = useContext(BucketContext);
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      size="small"
      actions={[
        <EyeOutlined onClick={() => setViewVideo(true)} />,
        <DeleteOutlined
          onClick={() => {
            setVideos((videos) =>
              videos.filter((video) => video.id !== videoId)
            );
          }}
        />,
        <EditVideo
          title={title}
          url={url}
          thumbnail={thumbnail}
          bucketId={bucketId}
          videoId={videoId}
        />,
      ]}
    >
      <Modal
        centered
        title={title}
        open={viewVideo}
        onOk={() => setViewVideo(false)}
        onCancel={() => setViewVideo(false)}
        footer={null}
      >
        <iframe width="100%" height="315" src={url}></iframe>
      </Modal>

      <div onClick={() => setViewVideo(true)}>
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
        <Meta
          title={title}
          description={
            <div>
              <span>From the {bucket} Bucket</span>
            </div>
          }
        />
      </div>
    </Card>
  );
}

export default VideoCard;
