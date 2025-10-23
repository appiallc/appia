import { Inter } from "next/font/google";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa6";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // optional, for Tailwind integration
});



export const metadata = {
title: "Appia Consultancy Services",
  description: "Appia helps Fortune 500 companies thrive at the intersection of technology and people. Get ROI-driven Digital Engineering, AI, and Cloud services with our 'Define, Build, Run' model.",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
       <a
              href="https://wa.me/916352217192" // replace with your number
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
            >
              <FaWhatsapp size={24} />
            </a>
    </html>
  );
}
