import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import Nav from "./components/nav";
import Services from "./components/services";
import Books from "./components/books";
import About from "./components/about";
import Footer from "./components/footer";
import Top from "./components/top";
import Header from "./components/Header";

export default async function Home() {
  const res = await fetch("https://obaino-backend.onrender.com/home");
  const portfolio = await res.json();
  return (
    <>
      <Header />
      <div className="w-full lg:w-[10%] lg:block hidden sticky top-0 z-10 shadow-headerShadow">
        <Nav />
      </div>
      <div className="flex flex-col justify-center lg:flex-row lg:-mt-[550px]">
        <div className="px-5 md:px-10 mx-auto lg:mt-auto lg:pl-[15%]">
          <section id="Home">
            <Top
              topLeftImage={portfolio.portfolio.topLeftImage}
              topCenterImg1={portfolio.portfolio.topCenterImg1}
              topCenterImg2={portfolio.portfolio.topCenterImg2}
              topRightImage={portfolio.portfolio.topRightImage}
              video={portfolio.portfolio.video}
            />
          </section>
          <section id="Service">
            <Services services={portfolio.portfolio.services} />
          </section>
          <section id="Books">
            <Books books={portfolio.portfolio.books} />
          </section>
          <section id="About">
            <About />
          </section>
          <section id="Reach Out">
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
}
