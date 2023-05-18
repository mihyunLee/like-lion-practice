import React from "react";

export default function ImageItem({ item }) {
  return (
    <>
      <figure key={item.id}>
        <img
          src={item.download_url}
          alt=""
          style={{ width: 400, height: 300 }}
        />
        <figcaption style={{ marginBottom: 30 }}>
          작가: {item.author}
        </figcaption>
      </figure>
    </>
  );
}
