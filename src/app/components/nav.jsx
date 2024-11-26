"use client";
import { useState } from "react";

const navlinks = ["Home", "Service", "Books", "About", "Reach Out"];

const Nav = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex justify-center bg-white">
      <div className=" flex flex-row lg:flex-col fixed  bg-white max-[1024px]:w-[100%] lg:w-auto max-[1024px]:justify-center  lg:h-[100vh] px-3 lg:mt-5">
        {navlinks.map((link, index) => (
          <a
            key={index}
            href="#home"
            className={
              active === index
                ? "lg:border-r-[3px] 2xl:text-[20px] desktop:text-[24px] lg:border-r-black2 py-4 pr-3 xl:pr-4 xl:pl-2 2xl:pr-6 max-[1024px]:border-b-black2 max-[1024px]:border-b-[3px] max-[1024px]:px-5 max-[550px]:px-2 max-[400px]:text-[13px]"
                : "lg:border-r-[3px] 2xl:text-[20px] desktop:text-[24px] lg:border-r-gray2 py-4 pr-3 xl:pr-4 xl:pl-2 2xl:pr-6 text-gray7 max-[1024px]:border-b-gray2 max-[1024px]:border-b-[3px] max-[1024px]:px-5 max-[550px]:px-2 max-[400px]:text-[13px]"
            }
            onClick={() => setActive(index)}
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nav;
