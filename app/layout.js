"use client";
import { useJobStore } from "../app/store/store";
import "../app/globals.css";
import DarkModeToggle from "@/components/DarkModeToggle";
import Link from "next/link";

export default function Layout({ children }) {
  const { darkMode } = useJobStore();

  return (
    <html lang="en">
      <body className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
        {/* Navbar */}
        <nav className="w-full h-20 bg-pink-300 flex items-center px-6 space-x-6">
          <Link href="/">Home</Link>&nbsp;
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        {children}
        <DarkModeToggle />
      </body>
    </html>
  );
}
