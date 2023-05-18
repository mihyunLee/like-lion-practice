import React from "react";
import ImageItem from "./ImageItem";

export default function ImageList({ imageList }) {
  return (
    <div>
      {imageList &&
        imageList.map((item) => <ImageItem key={item.id} item={item} />)}
    </div>
  );
}
