"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import React, { useState, useEffect } from "react"
import Nav from "./nav"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


export default function Header() {
    return (
        <>
            <div className="shadow-headerShadow w-full top-0 z-20 left-0 bg-white font-ptSans pt-5">
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
                            <span className="text-lightGray">An Intro</span>
                        </div>
                        <h1 className="max-[400px]:text-[25px] text-[30px] sm:text-[40px] lg:text-[60px] font-pattaya">
                            The Renaissance Gentleman
                        </h1>
                    </div>
                </div>
            </div>
            <div className="w-full lg:hidden sticky top-0 z-20 block mb-10">
                <Nav />
            </div>
        </>
    )
}