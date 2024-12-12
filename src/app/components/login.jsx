"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  getCookie,
  getCookies,
  setCookie,
  deleteCookie,
  hasCookie,
} from "cookies-next/client";

import Image from "next/image";
import { useLoginMutation } from "../services/dashboard";

import LoadingPage from "./loadingPage";

const Login = () => {
  const router = useRouter();
  const [loginAdmin, { isLoading, isSuccess, isError, data, error }] =
    useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const response = await loginAdmin(data).unwrap();

      if (response.status === 200) {
        setCookie("token", response.token);

        router.push("/admin");
      }
    } catch (error) {
      console.error(error);

      setErrorMsg(error.data.message);
    }
  };
  return (
    <>
      {isLoading ? <LoadingPage></LoadingPage> : ""}
      <div>
        <div className="w-full top-0 z-10 left-0 bg-white font-ptSans mt-6">
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
            </div>
            <div className="flex justify-center flex-col items-center shadow-black">
              <h1 className="max-[400px]:text-[25px] text-[30px] sm:text-[40px] lg:text-[60px] font-pattaya">
                The Renaissance Gentleman
              </h1>
            </div>
            <div className="w-full lg:hidden block"></div>
          </div>
        </div>
        <div className="absolute top-[40%] left-[50%] translate-x-[-50%]  text-center">
          <h1 className="font-bold text-[24px]">Log In to Admin</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              className="p-5 border border-gray8 my-2 outline-none rounded-[10px] bg-gray9"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              required
            />
            <br />
            <input
              type="text"
              className="p-5 border border-gray8 my-2 outline-none rounded-[10px] bg-gray9"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              required
            />
            <br />
            {errorMsg ? <p className="text-red-500">{errorMsg}</p> : ""}
            <button
              className="bg-black rounded font-bold text-white py-2 px-6 my-3"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
