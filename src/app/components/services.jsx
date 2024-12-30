import Image from "next/image";

const Services = ({ services }) => {
  return (
    <div className="mt-[8rem]">
      <div className="flex flex-col lg:flex-row justify-between my-4 lg:items-center ">
        <div className="lg:w-[50%]">
          <h2 className="font-extrabold text-[30px] sm:text-[40px] md:text-[50px] max-[768px]:mb-6 font-productSans">My Services</h2>
        </div>

        <div className="flex justify-end lg:w-[50%] max-[768px]:mt-6">
          <p className="text-gray3 text-[16px] leading-6">
            Professional writing, ghostwriting, and editing services to bring
            your stories and ideas to life. Let’s create something extraordinary
            together!
          </p>
        </div>
      </div>
      <div className=" md:inline-flex gap-5 my-6 overflow-auto service-scrollbar pb-6 ">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col p-4 md:max-w-[430px] flex-shrink-0 border border-gray2  hover:border-black2 
          hover:bg-black2 hover:text-white rounded-[7px] max-[768px]:my-8">
            <h4 className="font-bold text-[22px] my-4">{service?.title}</h4>
            <p className="text-[14px] my-3">
              {service?.description}
            </p>
            <Image
              src={service?.image}
              alt="image 2"
              width={100}
              height={100}
              className="w-[100%] lg:h-[259px]"
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
