import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

export default function ImageList(props) {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
}
