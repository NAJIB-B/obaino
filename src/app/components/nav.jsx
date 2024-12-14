"use client";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const navlinks = ["Home", "Service", "Books", "About", "Reach Out"];

const Nav = () => {
  const [active, setActive] = useState("Home");

  const navbarHeight = 215; 
const sectionMarginTop = 90; 

	const handleScroll = () => {

		const sections = document.querySelectorAll('section')

		let currentSection = ''

		sections.forEach((section) => {
			const rect = section.getBoundingClientRect()

			const adjustedTop = rect.top - navbarHeight - sectionMarginTop;

			if (adjustedTop <= 0 && rect.bottom >= 0) {
				currentSection = section.id
			}
		})

		setActive(currentSection)
	}

  useEffect(() => {
	document.addEventListener('scroll', handleScroll)

	return () => { document.removeEventListener('scroll', handleScroll)
	}
  }, [])

  return (
    <div className="flex justify-center bg-white">
      <div className=" flex flex-row lg:flex-col fixed  bg-white max-[1024px]:w-[100%] lg:w-auto max-[1024px]:justify-center  lg:h-[100vh] px-3 lg:mt-5">
        {navlinks.map((link, index) => (
          <Link
            key={index}
			to={navlinks[index]} 
            smooth={true} 
            duration={500} 
            activeClass="active-nav-link"
            className={
              active === navlinks[index]
                ? "lg:border-r-[3px] 2xl:text-[20px] desktop:text-[24px] lg:border-r-black2 py-4 pr-3 xl:pr-4 xl:pl-2 2xl:pr-6 max-[1024px]:border-b-black2 max-[1024px]:border-b-[3px] max-[1024px]:px-5 max-[550px]:px-2 max-[400px]:text-[13px]"
                : "lg:border-r-[3px] 2xl:text-[20px] desktop:text-[24px] lg:border-r-gray2 py-4 pr-3 xl:pr-4 xl:pl-2 2xl:pr-6 text-gray7 max-[1024px]:border-b-gray2 max-[1024px]:border-b-[3px] max-[1024px]:px-5 max-[550px]:px-2 max-[400px]:text-[13px]"
            }
            // onClick={() => setActive(index)}
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
