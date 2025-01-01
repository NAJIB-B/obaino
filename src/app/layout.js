"use client"
import localFont from "next/font/local";
import { PT_Sans, Pattaya } from "next/font/google";
import { Provider } from 'react-redux'
import { store } from "@/store";
import "./globals.css";
import Head from "next/head";

const metadata = {
  title: "Obiano",
  description: "Obiano",
  icons: {
    icon: "./logo.svg",
    apple: "./logo.svg",
  },
};


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
      <Head>
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Product+Sans&display=swap"
          rel="stylesheet"
        />
		<title>The Renaissance Gentleman</title>
		<meta name="description" content="The Renaissance Gentleman- rediscovering the lost art of masculinity"></meta>
      </Head>
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
