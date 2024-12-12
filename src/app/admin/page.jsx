"use client"
import {
	getCookie,
	deleteCookie,
    getCookies
  } from "cookies-next/client";
import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";

const Admin = () => {
	const router = useRouter()
	useLayoutEffect(()=> {
     const token = getCookie('token')
	 if (!token) {
		console.log("found the cookie", token)
		router.push("/login")
	 }
	},[])

	const logout = () => {
		deleteCookie('token')
	}

	return ( <div>welcome to the dashboard
		<button onClick={logout}>log out</button>
	</div> );
}


 
export default Admin;