"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

const Top = ({ topLeftImage, topRightImage, topCenterImg1, topCenterImg2, video }) => {
  return (
    <>
      <div>
        <div className="mt-5">
          <iframe
            width="100%"
            height="500px"
            src={video}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="obaino ted talk"
            className="rounded-t-3xl"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 my-4">
          <Image
            src={topLeftImage}
            alt="image 1"
            width={100}
            height={100}
            className=" w-full lg:w-[40%] object-cover rounded-b-3xl h-[393px]"
          ></Image>

          <div className="flex flex-row lg:flex-col gap-[1px] w-full lg:w-[20%] items-end max-[600px]:flex-col">
            <Image
              src='/obiano_1.png'
              alt="image 2"
              width={100}
              height={100}
              className="w-[100%] h-[200px]"
            ></Image>
            <Image
              src={topCenterImg2}
              alt="image 3"
              width={100}
              height={100}
              className="w-[100%] h-[200px] rounded-b-3xl"
            ></Image>
          </div>

          <Image
            src={topRightImage}
            alt="image 4"
            width={100}
            height={100}
            className=" w-full lg:w-[40%] object-cover rounded-b-3xl h-[393px]"
          ></Image>
        </div>
      </div>
    </>
  );
}

export default Top;