import { Geist, Geist_Mono } from "next/font/google";
import { Orbitron } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar"
import { Icon } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata = {
  title: "Quark 26",
  icons: {
    icon: "/favicon.png",
  },
  description: "Quark 26 - Personal Website of Quark26",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
