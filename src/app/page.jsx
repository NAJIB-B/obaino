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
import Sidebar from "./components/sidebar";
import Calendly from "./components/calendly";

export default async function Home() {
  const res = await fetch("https://obaino-backend.onrender.com/home");
  const portfolio = await res.json();
  return (
    <div>
       <link
          href="https://fonts.googleapis.com/css2?family=Product+Sans&display=swap"
          rel="stylesheet"
        />
      <Header />
      <Sidebar />
      <div className="flex flex-col justify-center lg:flex-row absolute top-[43%] sm:top-[50%] lg:top-[37%]">
        <div className="px-5 md:px-10 mx-auto lg:pl-[16%]">
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
      </div >
    </div>
  );
}
