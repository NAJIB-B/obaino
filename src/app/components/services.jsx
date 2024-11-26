import Image from "next/image";


const services = [1, 2, 3, 4, 5]
const Services = () => {
  return (
    <div className="mt-[9rem]">
      <div className="flex flex-col lg:flex-row justify-between my-4 lg:items-center">
		<div className="lg:w-[50%]">
		<h2 className="font-bold text-[30px] sm:text-[50px] max-[768px]:mb-6">My Services</h2>
		</div>
        
        <div className="flex justify-end lg:w-[50%] max-[768px]:mt-6">
          <p className="text-gray3 text-[16px]">
            Professional writing, ghostwriting, and editing services to bring
            your stories and ideas to life. Let’s create something extraordinary
            together!
          </p>
        </div>
      </div>
      <div className=" md:inline-flex gap-5 my-6 overflow-auto service-scrollbar">
		{services.map((service, index) => (
 <div key={index} className="flex flex-col p-4  md:max-w-[320px] flex-shrink-0 border border-gray2  hover:border-orange2 hover:bg-orange hover:text-white rounded-[7px] max-[768px]:my-8">
 <h4 className="font-bold text-[22px] my-4">Lighting Services</h4>
 <p className="text-[14px] my-3">
   Our expert advice on outdoor lighing will hwlp you to plan how to
   give your space a befitting look and is a a simple game changer
 </p>
 <Image
   src="/service1.svg"
   alt="image 2"
   width={100}
   height={100}
   className="w-[100%]"
 ></Image>
</div>

		))}
       
       
      </div>
    </div>
  );
};

export default Services;
