import Image from "next/image";

import AddServiceModal from "./addServiceModal";
import ServiceCardAdmin from "./serviceCardAdmin";
import { useState } from "react";


const ServicesAdmin = ({services}) => {

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

  return (
    <div className="mt-[9rem]">
      <div className="flex flex-col lg:flex-row justify-between my-4 lg:items-center">
        <div className="lg:w-[50%]">
          <h2 className="font-bold text-[30px] sm:text-[50px] max-[768px]:mb-6">
            My Services
          </h2>
		  <AddServiceModal isOpen={isModalOpen} closeModal={closeModal}></AddServiceModal>
		  <button className="px-5 py-2 sm:py-3 gap-2 bg-black text-white w-auto rounded-[6px] my-4 sm:text-[16px] text-[14px]" onClick={openModal}>Add service</button>
        </div>

        <div className="flex justify-end lg:w-[50%] max-[768px]:mt-6">
          <p className="text-gray3 text-[16px]">
            Professional writing, ghostwriting, and editing services to bring
            your stories and ideas to life. Let’s create something extraordinary
            together!
          </p>
        </div>
      </div>
      <div className=" md:inline-flex gap-5 my-6 overflow-auto service-scrollbar pb-6">
        {services.map((service, index) =>  <ServiceCardAdmin key={index} service={service} index={index}></ServiceCardAdmin>)}
      </div>
    </div>
  );
};

export default ServicesAdmin;
