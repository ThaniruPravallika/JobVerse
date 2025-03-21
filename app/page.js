"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "../app/globals.css";
export default function Home() {
  const [jobs, setJobs] = useState([]);

  // Mock job data (replace with API fetch if needed)
  useEffect(() => {
    setJobs([
      { id: 1, title: "Frontend Developer", company: "Google" },
      { id: 2, title: "Backend Engineer", company: "Amazon" },
      { id: 3, title: "Full Stack Developer", company: "Meta" },
    ]);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Job Listings</h1>
      <ul className="mt-4">
        {jobs.map((job) => (
          <li key={job.id} className="p-2 border-b">
            <Link href={`/job/${job.id}`}>
              <span className="text-blue-600 cursor-pointer">{job.title}</span> - {job.company}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
