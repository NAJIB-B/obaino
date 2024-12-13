import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


import Nav from "./components/nav";
import Services from "./components/services";
import Books from "./components/books";
import About from "./components/about";
import Footer from "./components/footer";
import Top from "./components/top";

export default async function Home() {
	const res = await fetch('http:/127.0.0.1:3000/home')
	const portfolio = await res.json()
	console.log(portfolio)
  return (
    <>
      <div className="shadow-headerShadow fixed w-full top-0 z-10 left-0 bg-white font-ptSans">
        <div className="bg-white">
          <div className="flex items-center justify-center relative p-7">
            <Image src="/logo.svg" alt="logo" width={150} height={150} className="hidden sm:block"></Image>
			<Image src="/logo.svg" alt="logo" width={115} height={115} className="sm:hidden block"></Image>
            <div className="absolute flex flex-row items-center rounded-[80px] border border-darkGray sm:py-2 max-[400px]:px-1 px-2 sm:px-[12px] right-4 max-[500px]:right-1 gap-1 sm:gap-3 text-[13px] sm:text-[16px] max-[500px]:text-[9px]">
              <FontAwesomeIcon icon={faEnvelope} width={20} className="hidden sm:block"></FontAwesomeIcon>
			  <FontAwesomeIcon icon={faEnvelope} width={12} className="sm:hidden block"></FontAwesomeIcon>
              <span>inquiry@obaino.com</span>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center shadow-black">
            <div className="flex items-center">
              <Image src="/star.svg" alt="stars" width={20} height={30}></Image>
              <span>An Intro</span>
            </div>
            <h1 className="max-[400px]:text-[25px] text-[30px] sm:text-[40px] lg:text-[60px] font-pattaya">The Renaissance Gentleman</h1>
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
          <Top topLeftImage={portfolio.portfolio.topLeftImage}
		  topCenterImg1={portfolio.portfolio.topCenterImg1}
		  topCenterImg2={portfolio.portfolio.topCenterImg2}
		  topRightImage={portfolio.portfolio.topRightImage}
		  ></Top>
          <Services services={portfolio.portfolio.services}></Services>
          <Books books={portfolio.portfolio.books}></Books>
          <About></About>
          <Footer></Footer>
        </div>
      </div>
    </>
  );



}
