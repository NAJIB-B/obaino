import Image from "next/image";


const Top = () => {
	return ( 
		<>
		<div>
            <div className="mt-5">
              <Image
                src="/video.svg"
                alt="video"
                width={100}
                height={100}
                className="rounded-tl-[20px] rounded-tr-[20px] w-[100%] h-[100%]"
              ></Image>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 my-4">
              <Image
                src="/image1.svg"
                alt="image 1"
                width={100}
                height={100}
                className=" w-full lg:w-[40%] object-cover"
              ></Image>

              <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-[20%] items-end max-[600px]:flex-col">
                <Image
                  src="/image2.svg"
                  alt="image 2"
                  width={100}
                  height={100}
                  className="w-[100%]"
                ></Image>
                <Image
                  src="/image3.svg"
                  alt="image 3"
                  width={100}
                  height={100}
                  className="w-[100%]"
                ></Image>
              </div>

              <Image
                src="/image4.svg"
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