import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "SunCart Summer Essentials Store",
  description: "Modern summer eCommerce platform",

};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme="light" suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Navbar/>
        <main className="max-w-7xl mx-auto">{children} </main>
        <Footer/>
      </body>
    </html>
  );
}
