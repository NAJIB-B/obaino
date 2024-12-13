import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { useDeleteBookMutation } from "../services/dashboard";
import LoadingPage from "./loadingPage";
import Image from "next/image";
import EditBookModal from "./editBookModal";

const BookCardAdmin = ({book, index}) => {
	const [deleteBook, {isLoading}] = useDeleteBookMutation()
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const handleDeleteBook = async()=> {
		try {
			const id = book._id

			const response = await deleteBook(id).unwrap()
			console.log("book deleted", response)
			
		} catch (error) {
			console.log(error)
		}
	}
	return ( 
		<>
		{isLoading ? <LoadingPage></LoadingPage> : ""}
<EditBookModal  isOpen={isModalOpen}
              closeModal={closeModal}
              data={{
                title: book.title,
				link: book.link,
                description: book.description,
				id: book._id
              }}></EditBookModal>

		<div className="flex flex-col lg:flex-row text-black2 gap-4 items-center my-4">
		<div className="lg:w-[30%]">
		  <Image
			src={book.image}
			alt="image 2"
			width={100}
			height={100}
			className="w-[100%]"
		  ></Image>
		</div>
		<div className="lg:w-[70%] max-[768px]:px-4">
		  <h3 className="font-bold text-[28px] my-4">
			{book.title}
		  </h3>
		  <p className="text-[18px] my-4">By Obinna Ogadah </p>
		  <p className="text-[16px] text-gray3 md:w-[70%] my-4">
			  {book.description}
		  </p>

		  <button className="flex flex-row items-center px-5 py-2 sm:py-3 gap-2 bg-black text-white w-auto rounded-[6px] my-4 sm:text-[16px] text-[14px]" onClick={openModal}>
			<p> edit book</p>
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

	<button className="flex flex-row items-center px-5 py-2 sm:py-3 gap-2 bg-red-500 text-white w-auto rounded-[6px] my-4 sm:text-[16px] text-[14px]" onClick={handleDeleteBook}>
			<p> delete book</p>
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
		</>
		
	 );
}
 
export default BookCardAdmin;