"use client";
import { useState } from "react";
import { useJobStore } from "../store/store";
 
import Link from "next/link";

export default function Dashboard() {
  const { jobs, addJob } = useJobStore();
  const [newJob, setNewJob] = useState({ title: "", company: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newJob.title || !newJob.company) return;

    // Generate a unique ID
    const jobWithId = { ...newJob, id: jobs.length + 1 };

    addJob(jobWithId);
    setNewJob({ title: "", company: "" }); // Clear form
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Company Dashboard</h1>

      {/* Form to post jobs */}
      <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-3">
        <input
          type="text"
          placeholder="Job Title"
          value={newJob.title}
          onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Company Name"
          value={newJob.company}
          onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
          className="p-2 border rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Post Job
        </button>
      </form>

      {/* Job Listings */}
      <h2 className="text-xl font-bold mb-2">Posted Jobs</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="border-b p-2">
            <Link href={`/job/${job.id}`}>
              <span className="text-blue-600 cursor-pointer">{job.title}</span> - {job.company}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
