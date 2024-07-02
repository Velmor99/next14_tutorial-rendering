import { serverSideFunction } from "@/utils/server-utils";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "@/components/imageSlider";
import { clientSideFunction } from "@/utils/client-utils";

export default function ServerRoutePage() {
  console.log("server route rendered");
  // const result = clientSideFunction(); // an error
  const settings = {
    dots: true,
  };
  return (
    <div>
      <ImageSlider />
      {/*<p>{result}</p>*/}
    </div>
  );
}
