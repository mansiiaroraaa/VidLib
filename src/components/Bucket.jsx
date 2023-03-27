import { Card } from "antd";

const { Meta } = Card;

function Bucket({ title, thumbnail, noOfVideos }) {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={title} src={thumbnail} />}
      size="small"
    >
      <Meta
        title={title}
        description={
          <div>
            <span>{noOfVideos}</span>
            <span> Videos</span>
          </div>
        }
      />
    </Card>
  );
}

export default Bucket;
