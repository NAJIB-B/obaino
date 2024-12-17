import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faSquareInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<>
			<div className="my-8 md:ml-[10%] md:-mr-[38px] sm:shadow-footerShadow px-7 pt-8 my-12 ">
				<div className="flex flex-col-reverse sm:flex-col gap-[40px]">
					<div className="">
						<h2 className="text-black4 font-bold text-[20px] md:text-[25px] mb-8 sm:text-left text-center mt-8">Reach out to me on</h2>
						<div className="flex gap-[45px] justify-center md:justify-start">
							<Link href={'/'}><Image src="/insta_logo.png" width={40} height={40} alt="Instagram" /></Link>
							<Link href={'/'}><Image src="/facebook_logo.png" width={40} height={40} alt="Facebook" /></Link>
							<Link href={'/'}><Image src="/linkedin_logo.png" width={40} height={40} alt="LinkedIn" /></Link>
						</div>
					</div>

					<div className="flex justify-center sm:justify-end mt-8 ">
						<div className="flex flex-col ">
							<h2 className="text-black4 font-bold text-[20px] md:text-[25px] mb-8">Subscribe to my mailing list</h2>
							<div className="flex flex-row">
								<input type="text" className="bg-gray6 outline-none	rounded-l-2xl border-tr border-br border-tr-gray5 border-br-gray5 w-[75%] py-3 px-4" />
								<button className="bg-black text-white w-[25%] py-3 text-[20px] rounded-r-2xl">Send</button>
							</div>

						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;