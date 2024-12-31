import { useState } from "react";
import EditServiceModal from "./editServiceModal";
import Image from "next/image";

import { useDeleteServiceMutation } from "../services/dashboard";
import LoadingPage from "./loadingPage";

const ServiceCardAdmin = ({service, index}) => {
	const [deleteService, {isLoading}] = useDeleteServiceMutation()
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	const handleDeleteService = async() => {
		try {

			const id = service._id

			const response = await deleteService(id).unwrap()

			console.log(response)
			
		} catch (error) {
			console.log(error)
		}
	}
	return ( 
		<>
		{isLoading ? <LoadingPage></LoadingPage> : ""}
		         <EditServiceModal
              isOpen={isModalOpen}
              closeModal={closeModal}
              data={{
                title: service.title,
                description: service.description,
				id: service._id
              }}
            ></EditServiceModal>

<div
		key={index}
		className="flex flex-col p-4 md:max-w-[430px] flex-shrink-0 border border-gray2  hover:border-black2 
          hover:bg-black2 hover:text-white rounded-[7px] max-[768px]:my-8"
	  >
		<div className="">
		  <h4 className="font-bold text-[22px] my-4">
			{service.title}
		  </h4>
		  <p className="text-[14px] my-3">
			{service.description}
		  </p>
		  <Image
			src={service.image}
			alt="image 2"
			width={100}
			height={100}
			className="w-[100%]"
		  ></Image>
		</div>
		<div className="flex flex-row justify-around mt-5">
		  <button className="p-3 px-5 rounded bg-green-400" onClick={openModal}>edit</button>
		  <button className="p-3 px-5 rounded bg-red-500" onClick={handleDeleteService}>delete</button>
		</div>
	  </div>
		</>
		
	 );
}
 
export default ServiceCardAdmin;