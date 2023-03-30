import React, { useState, useEffect, useContext } from "react";
import { Modal, Input, Select, Button } from "antd";
import { BucketContext } from "../contexts/bucketContext";
import { EditOutlined } from "@ant-design/icons";

export const EditVideo = ({ title, url, thumbnail, bucketId, videoId }) => {
  const [openModal, setOpenModal] = useState(false);
  const [videoInput, setVideoInput] = useState({
    title: title,
    url: url,
    thumbnail: thumbnail,
    bucket: "",
    bucketId: bucketId,
  });

  const { buckets, setVideos, videos, getBucketTitle } =
    useContext(BucketContext);
  return (
    <>
      <Modal
        centered
        title="Edit a Video"
        open={openModal}
        onOk={() => {
          setOpenModal(false);
          setVideos(
            videos.map((video) => {
              if (video.id === videoId) {
                return videoInput;
              }
              return video;
            })
          );
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
          defaultValue={{
            value: bucketId.toString(),
            label:
              bucketId.toString() === "0"
                ? "Unorganised"
                : getBucketTitle(bucketId.toString()),
          }}
          onChange={(value) => {
            setVideoInput({
              ...videoInput,
              bucket:
                value.toString() === "0"
                  ? "Unorganised"
                  : getBucketTitle(value),
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
      <EditOutlined
        onClick={() => {
          setOpenModal(true);
        }}
      ></EditOutlined>
    </>
  );
};
