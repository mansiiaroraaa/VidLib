import React, { useState, createContext } from "react";

export const BucketContext = createContext({
  buckets: [],
  setBuckets: () => {},
  videos: [],
  setVideos: () => {},
  getVideoByBucket: () => {},
  getBucketTitle: () => {},
});

export const BucketProvider = ({ children }) => {
  const [buckets, setBuckets] = useState([
    {
      bucketId: 1,
      title: "Animes",
      thumbnail:
        "https://images.squarespace-cdn.com/content/v1/5a5780226f4ca3aa2a6c9298/f73373ec-f2de-450d-b8e7-059a01acaf3c/image1.jpg?format=1000w",
    },
    {
      bucketId: 2,
      title: "TV Shows",
      thumbnail:
        "https://www.rollingstone.com/wp-content/uploads/2018/06/rolling-stone-100-best-tv-shows-of-all-time-c76cdd0b-2e04-4769-84c1-0faab178ddbf.jpg",
    },
    {
      bucketId: 3,
      title: "Movies",
      thumbnail:
        "https://hips.hearstapps.com/hmg-prod/images/classic-movies-1661199935.jpg?crop=1.00xw:0.503xh;0,0.247xh&resize=1200:*",
    },
  ]);

  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Road to Naruto",
      thumbnail:
        "https://occ.a.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABdHD1HkgJlpwWwlaGj5daDBH5-PhxwsQKCPhcG3UbVL8HOv723d318Wmr8dXWTw5cQyt0AZvWitvOIHnrjqbLQ1ULYxtjr9AoK9S.jpg?r=fdf",
      bucket: "Animes",
      bucketId: 1,
      url: "https://www.youtube.com/embed/QczGoCmX-pI",
    },
    {
      id: 2,
      title: "Rick and Morty",
      thumbnail:
        "https://images.cinemaexpress.com/uploads/user/imagelibrary/2022/10/10/original/Rick_and_morty.jpg",
      bucket: "TV Shows",
      bucketId: 2,
      url: "https://www.youtube.com/embed/jerFRSQW9g8",
    },
    {
      id: 3,
      title: "Breaking Bad",
      thumbnail:
        "https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=960&h=540",
      bucket: "TV Shows",
      bucketId: 2,
      url: "https://www.youtube.com/embed/HhesaQXLuRY",
    },
    {
      id: 4,
      title: "The Dark Knight",
      thumbnail:
        "https://streamondemandathome.com/wp-content/uploads/2021/01/darknightrises.jpg",
      bucket: "Unorganised",
      url: "https://www.youtube.com/embed/EXeTwQWrcwY",
      bucketId: 0,
    },
  ]);

  const getBucketTitle = (bucketId) => {
    return buckets.find((bucket) => bucket.bucketId.toString() === bucketId)
      .title;
  };

  const getVideoByBucket = (bucket) => {
    return videos.filter((video) => video.bucketId.toString() === bucket);
  };

  return (
    <BucketContext.Provider
      value={{
        buckets,
        setBuckets,
        videos,
        setVideos,
        getVideoByBucket,
        getBucketTitle,
      }}
    >
      {children}
    </BucketContext.Provider>
  );
};
