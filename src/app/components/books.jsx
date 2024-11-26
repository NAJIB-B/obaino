import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

const Books = () => {
	return ( 
		<div className="my-8">
		 <h2 className="sm:text-center text-black2 text-[30px] sm:text-[40px] md:text-[50px] font-bold my-5">
                A featured collection of books
              </h2>

              <div className="flex flex-col lg:flex-row text-black2 gap-4 items-center my-4">
                <div className="lg:w-[30%]">
                  <Image
                    src="/book1.svg"
                    alt="image 2"
                    width={100}
                    height={100}
                    className="w-[100%]"
                  ></Image>
                </div>
                <div className="lg:w-[70%] max-[768px]:px-4">
                  <h3 className="font-bold text-[28px] my-4">
                    Unlocking Your Potential Power
                  </h3>
                  <p className="text-[18px] my-4">By Obinna Ogadah </p>
                  <p className="text-[16px] text-gray3 md:w-[70%] my-4">
                    Obinna grew up as an exceptionally curious and precocious
                    person with a lot of life privileges. As an articulate
                    Attorney, Writer, Speaker, Trainer, and Coach, his life
                    purpose is to leave an enduring legacy of openness,
                    happiness, and love, using his body, voice, and mental
                    acuity as the tools. And in this guide, he offers a bit of
                    himself to the readers.
                  </p>

                  <button className="flex flex-row items-center px-5 py-2 sm:py-3 gap-2 bg-black text-white w-auto rounded-[6px] my-4 sm:text-[16px] text-[14px]">
                    <p> buy the book</p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      width={20}
					  className="sm:block hidden"
                    ></FontAwesomeIcon>
					                    <FontAwesomeIcon
                      icon={faArrowRight}
                      width={15}
					  className="sm:hidden block"
                    ></FontAwesomeIcon>
                  </button>

                  <div className="flex flex-row gap-3">
                    <FontAwesomeIcon
                      icon={faDownload}
                      width={20}
                    ></FontAwesomeIcon>
                    <p className="text-gray4 sm:text-[16px] text-[14px]">
                      <span className="text-black2 font-bold underline">
                        Purchase & Download E-book
                      </span>{" "}
                      (PDF) (12mb)
                    </p>
                  </div>
                </div>
              </div>
		</div>
	 );
}
 
export default Books;