import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiPhone } from "react-icons/fi";

export default function Logo() {
  return (
    <>
      <div className="flex items-center justify-center relative p-7">
        <Image
          src="/logo.svg"
          alt="logo"
          width={150}
          height={150}
          className="hidden sm:block"
        ></Image>
        <Image
          src="/logo.svg"
          alt="logo"
          width={115}
          height={115}
          className="sm:hidden block"
        ></Image>

        <div className="absolute flex flex-row items-center rounded-[80px]  border border-darkGray sm:py-2 max-[400px]:px-1 px-2 sm:px-[12px] right-4 max-[500px]:right-1 gap-3 sm:gap-3 text-[16px] max-[500px]:text-[13px]">
          <span className="hidden sm:block">Reach out to me</span>
          <Link href={"mailto:Info@therenaissancegentleman.com"} target="_blank">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-[20px]"
            />
          </Link>
          <Link href={"https://wa.me/+2348103291450"} target="_blank">
            <IoLogoWhatsapp
              color="#25D366"
              size={25}
			  target="_blank"
              className=""
            />
          </Link>
        </div>
      </div>
    </>
  );
}
