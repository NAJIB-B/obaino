import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

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
                <div className="absolute flex flex-row items-center rounded-[80px] border border-darkGray sm:py-2 max-[400px]:px-1 px-2 sm:px-[12px] right-4 max-[500px]:right-1 gap-1 sm:gap-3 text-[13px] sm:text-[16px] max-[500px]:text-[9px]">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        width={20}
                        className="hidden sm:block"
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        width={12}
                        className="sm:hidden block"
                    ></FontAwesomeIcon>
                    <span>inquiry@obaino.com</span>
                </div>
            </div>
        </>
    )
}