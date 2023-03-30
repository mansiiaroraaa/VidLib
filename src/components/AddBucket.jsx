import { Button, Modal, Input } from "antd";
import { useContext, useState } from "react";
import { BucketContext } from "../contexts/bucketContext";

export const AddBucket = () => {
  const { buckets, setBuckets } = useContext(BucketContext);
  const [newBucket, setNewBucket] = useState({
    id: buckets.length + 1,
    title: "",
    thumbnail: "",
    noOfVideos: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button shape="circle" onClick={() => setIsModalOpen(true)}>
        +
      </Button>
      <Modal
        title="Add a Bucket"
        open={isModalOpen}
        onOk={() => {
          setBuckets([...buckets, newBucket]);
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        style={{ display: "flex", flexDirection: "column", padding: "10px" }}
      >
        <Input
          placeholder="Bucket Title"
          value={newBucket.title}
          onChange={(e) => {
            setNewBucket({ ...newBucket, title: e.target.value });
          }}
          style={{ marginBottom: "10px" }}
        />
        <Input
          placeholder="Bucket Thumbnail"
          value={newBucket.thumbnail}
          onChange={(e) => {
            setNewBucket({ ...newBucket, thumbnail: e.target.value });
          }}
        />
      </Modal>
    </>
  );
};
