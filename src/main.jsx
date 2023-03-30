import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BucketProvider } from "./contexts/bucketContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./globals.css";
import VideoPage from "./components/VideoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/bucket/:bucket",
    element: <VideoPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BucketProvider>
      <RouterProvider router={router} />
    </BucketProvider>
  </React.StrictMode>
);
