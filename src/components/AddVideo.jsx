import React, { useState, useEffect, useContext } from "react";
import { Modal, Input, Select, Button } from "antd";
import { BucketContext } from "../contexts/bucketContext";

export const AddVideo = () => {
  const [openModal, setOpenModal] = useState(false);
  const [videoInput, setVideoInput] = useState({
    title: "",
    url: "",
    thumbnail: "",
    bucket: "",
    bucketId: "",
  });
  useEffect(() => {
    console.log(videoInput);
  }, [videoInput]);

  const { buckets, setVideos, videos, getBucketTitle } =
    useContext(BucketContext);

  return (
    <>
      <Modal
        centered
        title="Add a Video"
        open={openModal}
        onOk={() => {
          setOpenModal(false);
          setVideos([...videos, videoInput]);
        }}
        onCancel={() => setOpenModal(false)}
      >
        <Input
          placeholder="Video Title"
          value={videoInput.title}
          onChange={(e) => {
            setVideoInput({ ...videoInput, title: e.target.value });
          }}
          style={{ marginBottom: "10px" }}
        />
        <Input
          placeholder="Video URL"
          value={videoInput.url}
          onChange={(e) => {
            setVideoInput({ ...videoInput, url: e.target.value });
          }}
          style={{ marginBottom: "10px" }}
        />
        <Input
          placeholder="Video Thumbnail"
          value={videoInput.thumbnail}
          onChange={(e) => {
            setVideoInput({ ...videoInput, thumbnail: e.target.value });
          }}
          style={{ marginBottom: "10px" }}
        />
        <Select
          placeholder="Select a Bucket"
          onChange={(value) => {
            setVideoInput({
              ...videoInput,
              bucket: value === "0" ? "Unorganised" : getBucketTitle(value),
              bucketId: value,
            });
          }}
          style={{ width: "100%", marginBottom: "10px" }}
          options={[
            {
              value: "0",
              label: "Unorganised",
            },
            ...buckets.map((bucket) => {
              return {
                value: bucket.bucketId.toString(),
                label: bucket.title,
              };
            }),
          ]}
        />
      </Modal>
      <Button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Add a Video
      </Button>
    </>
  );
};
