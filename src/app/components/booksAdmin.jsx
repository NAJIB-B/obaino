import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import AddBookModal from "./addBookModal";

import Image from "next/image";
import BookCardAdmin from "./bookCardAdmin";


const BooksAdmin = ({books}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	return ( 
		<div className="my-8">
		 <h2 className="sm:text-center text-black2 text-[30px] sm:text-[40px] md:text-[50px] font-bold my-5">
                A featured collection of books
              </h2>
			  <AddBookModal isOpen={isModalOpen} closeModal={closeModal}></AddBookModal>
			  <div className="flex justify-center">
			  <button className="px-5 py-2 sm:py-3 gap-2 bg-black text-white w-auto rounded-[6px] my-4 sm:text-[16px] text-[14px] m-auto" onClick={openModal}>Add Book</button>
      
			  </div>
		 


			  {books.map((book, index) => <BookCardAdmin key={index} book={book} index={index}></BookCardAdmin>)}
		</div>
	 );
}
 
export default BooksAdmin;