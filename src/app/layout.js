"use client"
import localFont from "next/font/local";
import {PT_Sans, Pattaya} from "next/font/google";
import { Provider } from 'react-redux'
import { store } from "@/store";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const pt_sans = PT_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-pt-sans',
	adjustFontFallback: false,
	weight: ["400", "700"]
})

const pattaya = Pattaya({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-pattaya',
	weight: ["400"]
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pt_sans.variable} ${pattaya.variable} text-black2 bg-obWhite`}
      >
		<Provider store={store}>
		{children}
		</Provider>
        
      </body>
    </html>
  );
}
