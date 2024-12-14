"use client"
import Image from "next/image";
import { useState, useEffect } from "react";



const Top = ({topLeftImage, topRightImage, topCenterImg1, topCenterImg2, video}) => {


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
      />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 my-4">
              <Image
			src={topLeftImage}
                alt="image 1"
                width={100}
                height={100}
                className=" w-full lg:w-[40%] object-cover"
              ></Image>

              <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-[20%] items-end max-[600px]:flex-col">
                <Image
                  src={topCenterImg1}
                  alt="image 2"
                  width={100}
                  height={100}
                  className="w-[100%]"
                ></Image>
                <Image
                  src={topCenterImg2}
                  alt="image 3"
                  width={100}
                  height={100}
                  className="w-[100%]"
                ></Image>
              </div>

              <Image
                src={topRightImage}
                alt="image 4"
                width={100}
                height={100}
                className=" w-full lg:w-[40%]"
              ></Image>
            </div>
          </div>
		</>
	 );
}
 
export default Top;