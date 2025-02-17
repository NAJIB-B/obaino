import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Books = ({ books }) => {
	return (
		<div className="my-8">
			<h2 className=" text-black2 text-[30px] sm:text-[40px] md:text-[50px] font-extrabold my-5">
				A featured collection of books
			</h2>
			<div className="md:inline-flex gap-5 my-6 overflow-auto service-scrollbar">
				{books.map((book, index) => (
					<div className="flex flex-col lg:flex-row text-black2 md:max-w-full flex-shrink-0 gap-[40px] items-center my-4" key={index}>
						<div className="w-full lg:w-[30%]">
							<Image
								src={book.image}
								alt="image 2"
								width={100}
								height={100}
								className="w-[100%] lg:-ml-5"
							></Image>
						</div>
						<div className="lg:w-[70%] lg:-ml-5">
							<h3 className="font-bold text-[28px] my-4 capitalize">
								{book.title}
							</h3>
							<p className="text-[18px] my-4">By Obinna Ogadah </p>
							<p className="text-[16px] text-gray3 w-[90%] my-4">
								{book.description}
							</p>

							<button className="flex flex-row items-center px-5 py-2 sm:py-3 gap-2 bg-black text-white w-auto rounded-[6px] my-4 sm:text-[16px] text-[14px]">
								<p> Buy the book</p>
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
				))}
			</div>
		</div>
	);
}

export default Books;