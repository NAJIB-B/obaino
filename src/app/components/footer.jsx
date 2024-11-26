import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faSquareInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return ( 
		<>
					  <div className="my-8 sm:ml-[10%]  sm:shadow-footerShadow p-5 pt-8 mt-12">
						<div className="flex flex-col-reverse sm:flex-col">
							<div>
							<h2 className="text-black4 font-bold text-[30px] sm:text-[35px] mb-8 sm:text-left text-center mt-8">Reach Out to me on</h2>
				<div className="flex flex-row items-center gap-8  sm:justify-normal justify-center">
					<FontAwesomeIcon icon={faFacebook} width={50} color="#1877F2"></FontAwesomeIcon>
					<FontAwesomeIcon icon={faSquareInstagram} width={50}></FontAwesomeIcon>
					<FontAwesomeIcon icon={faLinkedin} width={50} color="#0A66C2"></FontAwesomeIcon>
				</div>
							</div>
			
				<div className="flex justify-center sm:justify-end mt-8 sm:mr-10">
				<div className="flex flex-col ">
					<h2 className="text-black4 font-bold text-[30px] sm:text-[40px] mb-8">Subscribe to my mailing list</h2>
					<div className="flex flex-row">
					<input type="text" className="bg-gray6 outline-none	rounded-[7px] border-tr border-br border-tr-gray5 border-br-gray5 w-[75%] py-3 px-4" />
					<button className="bg-black text-white w-[25%] py-3 text-[25px]">Send</button>
					</div>
					
				</div>
				</div>
						</div>

				

			  </div>
		</>
	 );
}
 
export default Footer;