"use client";
import { getCookie, deleteCookie } from "cookies-next/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import ServicesAdmin from "../components/servicesAdmin";
import TopAdmin from "../components/topAdmin";
import BooksAdmin from "../components/booksAdmin";
import About from "../components/about";
import Nav from "../components/nav";
import LoadingPage from "../components/loadingPage";

import { useGetPortfolioQuery } from "../services/dashboard";

const Admin = () => {
  const router = useRouter();
  let token;
  useLayoutEffect(() => {
    token = getCookie("token");
    if (!token) {
      console.log("found the cookie", token);
      router.push("/login");
    }
  }, []);

  const logout = () => {
    deleteCookie("token");
    router.push("/login");
  };

  const { data, isLoading, isError, isFetching } = useGetPortfolioQuery();

  return (
    <>
      {isLoading ? <LoadingPage></LoadingPage> : ""}
      {isFetching ? <LoadingPage></LoadingPage> : ""}
      <div className="shadow-headerShadow fixed w-full top-0 z-10 left-0 bg-white font-productSans">
        <div className="bg-white">
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
          <div className="flex justify-center flex-col items-center shadow-black">
            <div className="flex items-center">
              <Image src="/star.svg" alt="stars" width={20} height={30}></Image>
              <span>An Intro</span>
            </div>
            <h1 className="max-[400px]:text-[25px] text-[30px] sm:text-[40px] lg:text-[60px] font-pattaya">
              The Renaissance Gentleman
            </h1>
          </div>
          <div className="w-full lg:hidden block">
            <Nav></Nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center lg:flex-row  mt-[165px] lg:mt-[220px]">
        <div className="w-full lg:w-[10%] lg:block hidden">
          <Nav></Nav>
        </div>
        <div className="w-[90%] mx-auto mt-[70px] lg:mt-auto lg:w-[90%] px-4">
          {data?.portfolio ? (
            <>
              <section id="Home">
                <TopAdmin
                  topLeftImage={data?.portfolio.topLeftImage}
                  topRightImage={data.portfolio.topRightImage}
                  topCenterImg1={data.portfolio.topCenterImg1}
                  topCenterImg2={data.portfolio.topCenterImg2}
                  video={data.portfolio.video}
                ></TopAdmin>
              </section>
              <section id="Service">
                <ServicesAdmin
                  services={data?.portfolio.services}
                ></ServicesAdmin>
              </section>
              <section id="Books">
                <BooksAdmin books={data?.portfolio.books}></BooksAdmin>
              </section>

              <section id="About">
                <About></About>
              </section>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
