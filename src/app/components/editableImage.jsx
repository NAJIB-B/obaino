import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import { useState } from "react";

import UpdateImageModal from "./UpdateImageModal";

const EditableImage = ({src, name}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	return ( 
		<>
		<UpdateImageModal isOpen={isModalOpen} closeModal={closeModal} name={name}></UpdateImageModal>
		<div className="relative w-full h-full" onClick={openModal}>
		<Image
			src={src}
			alt="video"
			width={100}
			height={100}
			className="rounded-tl-[20px] rounded-tr-[20px] w-[100%] h-[100%]"
		  ></Image>
		   <div className="absolute inset-0 bg-gray-800 bg-opacity-60 backdrop-blur-md flex flex-col justify-center items-center text-white">
				<div className="text-4xl mb-4">
				<FontAwesomeIcon icon={faCloudArrowUp} width={20} className="hidden sm:block"></FontAwesomeIcon>
				</div>
				<div className="text-lg">
					Change image
				</div>
			</div>
		</div>
		</>

	 );
}
 
export default EditableImage;