"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { faUpload, faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import EditableImage from "./editableImage";
import EditVideoModal from "./editVideoModal";


const TopAdmin = ({topLeftImage, topRightImage, topCenterImg1, topCenterImg2, video}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);


	return ( 	
		<>
<EditVideoModal closeModal={closeModal} isOpen={isModalOpen}></EditVideoModal>
		<div>
            <div className="mt-5">
			<div className="relative w-full h-full" onClick={openModal}>
			<iframe
        width="100%"
		height="500px"
        src={video}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="obaino ted talk"
      />
			   <div className="absolute inset-0 bg-gray-800 bg-opacity-60 backdrop-blur-md flex flex-col justify-center items-center text-white">
					<div className="text-4xl mb-4">
					<FontAwesomeIcon icon={faCloudArrowUp} width={20} className="hidden sm:block"></FontAwesomeIcon>
					</div>
					<div className="text-lg">
						Change video link
					</div>
				</div>
			</div>
             
            </div>
            <div className="flex flex-col lg:flex-row gap-4 my-4">

				<div className="lg:w-[40%]">
					<EditableImage src={topLeftImage} name={"topLeftImage"}></EditableImage>
				</div>
			


              <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-[20%] items-end max-[600px]:flex-col">
			  <EditableImage src={topCenterImg1} name={"topCenterImg1"}></EditableImage>
			  <EditableImage src={topCenterImg2} name={"topCenterImg2"}></EditableImage>

              </div>
			  <div className="lg:w-[40%]">
					<EditableImage src={topRightImage} name={"topRightImage"}></EditableImage>
				</div>

            </div>
          </div>
		</>
	 );
}
 
export default TopAdmin;