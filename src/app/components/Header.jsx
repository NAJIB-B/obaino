"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import React, { useState, useEffect } from "react"
import Nav from "./nav"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Logo from "./logo"


export default function Header() {
    return (
        <div className="fixed top-0 w-full z-20 bg-white shadow-headerShadow header_o  sm:h-[50%] lg:h-[37%]">
            <Logo />
           
            <div>
                <div className="flex justify-center flex-col items-center shadow-black">
                    <h1 className="max-[400px]:text-[25px] text-[30px] sm:text-[40px] lg:text-[60px] font-pattaya">
                        The Renaissance Gentleman
                    </h1>
                </div>
				<div className="flex justify-center items-center gap-4">
                <Image src="/star.svg" alt="stars" width={20} height={30}></Image>
                <span className="text-lightGray text-[20px]">Rediscovering the lost art of masculinity</span>
            </div>
                <div className="w-full lg:hidden sticky top-0 z-20 block mb-10">
                    <Nav />
                </div>
            </div>
        </div>
    )
}