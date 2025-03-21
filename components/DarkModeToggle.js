"use client";
import { useEffect } from "react";
import { useJobStore } from "../app/store/store"; // Adjust if needed
import "../app/globals.css"; // Ensure this is the correct path

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useJobStore();

  // Apply dark mode class to <body> on toggle
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 mt-4 bg-gray-300 dark:bg-gray-800 text-black dark:text-white rounded"
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
