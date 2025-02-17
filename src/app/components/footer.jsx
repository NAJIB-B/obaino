"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import LoadingPage from "./loadingPage";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const addSubscriber = async() => {
	try {
		
		setEmail("")
		setLoading(true)

		let res = await axios.post('https://obaino-backend.onrender.com/email', {
			email: email,
		  })

		  setLoading(false)
		  toast.success('Email added successfully', {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			})
	} catch (error) {
		console.log(error.response.data.message);
         toast.error(error.response.data.message, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			});

	}
  }

  useEffect(() => {});
  return (
    <>
	{loading ? <LoadingPage></LoadingPage> : ""}
	   <ToastContainer />
      <div className="mt-16 -mx-5 md:-mx-10 xl:-mx-12 sm:shadow-footerShadow px-7 pt-8 py-16 ">
        <div className="flex flex-col-reverse sm:flex-col gap-[40px]">
          <div className="">
            <h2 className="text-black4 font-bold text-[20px] md:text-[25px] mb-8 sm:text-left text-center mt-8">
              Reach out to me on
            </h2>
            <div className="flex gap-[45px] justify-center md:justify-start">
              <Link
                href={"https://www.instagram.com/obinnatrg/"}
                target="_blank"
              >
                <Image
                  src="/insta_logo.png"
                  width={40}
                  height={40}
                  alt="Instagram"
                />
              </Link>
              <Link
                href={"https://www.facebook.com/obaino.ogadah/"}
                target="_blank"
              >
                <Image
                  src="/facebook_logo.png"
                  width={40}
                  height={40}
                  alt="Facebook"
                />
              </Link>
              <Link
                href={"http://linkedin.com/in/obinna-ogadah-6a5b20b0"}
                target="_blank"
              >
                <Image
                  src="/linkedin_logo.png"
                  width={40}
                  height={40}
                  alt="LinkedIn"
                />
              </Link>
              <Link href={"https://x.com/OgadahObinna"} target="_blank">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-[38px]"
                ></FontAwesomeIcon>
              </Link>
            </div>
          </div>

          <div className="flex justify-center sm:justify-end mt-8 ">
            <div className="flex flex-col ">
              <h2 className="text-black4 font-bold text-[20px] md:text-[32px] mb-8">
                Subscribe to my mailing list
              </h2>
              <div className="flex flex-row">
                <input
                  type="text"
                  value={email}
                  onChange={handleChange}
                  className="bg-gray6 outline-none	rounded-l-[7px] border-tr border-br border-tr-gray5 border-br-gray5 w-[75%] py-3 px-4"
                />
                <button className="bg-black text-white w-[25%] py-3 text-[20px] rounded-r-[7px]" onClick={addSubscriber}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
