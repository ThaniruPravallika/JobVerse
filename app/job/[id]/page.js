"use client";
import { useParams } from "next/navigation";

const JobDetailPage = () => {
  const { id } = useParams();

  // Mock job data (replace with API call if needed)
  const jobs = [
    { id: "1", title: "Frontend Developer", company: "Google", description: "Build amazing UIs!" },
    { id: "2", title: "Backend Engineer", company: "Amazon", description: "Develop scalable APIs!" },
    { id: "3", title: "Full Stack Developer", company: "Meta", description: "Work on full-stack projects!" },
  ];

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p className="text-gray-600">Company: {job.company}</p>
      <p className="mt-2">{job.description}</p>
    </div>
  );
};

export default JobDetailPage;
