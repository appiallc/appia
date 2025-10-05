import { Inter } from "next/font/google";
import "./globals.css";

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
    </html>
  );
}
