import toast, { Toaster } from "react-hot-toast";

const CareersPage = () => {
  const jobOpenings = [
    {
      title: "Customer Support Specialist",
      location: "Remote",
      description:
        "Help customers resolve issues and provide exceptional support.",
    },
    {
      title: "Frontend Developer",
      location: "San Francisco, CA",
      description: "Build and maintain beautiful user interfaces for our site.",
    },
    {
      title: "Marketing Manager",
      location: "New York, NY",
      description: "Create and execute marketing strategies to boost sales.",
    },
  ];

  // Function to handle the Apply button click
  const handleApplyClick = (jobTitle) => {
    toast.success(`Application for "${jobTitle}" submitted successfully! 🎉`, {
      position: "top-center",
    });
  };

  return (
    <div className="w-11/12 mx-auto pt-36 pb-6">
      <h1 className="text-4xl font-semibold text-center mb-8">Join Our Team</h1>
      <p className="text-center mb-12">
        Be part of a passionate and dynamic team at Sports Zone. Check out our
        current job openings below.
      </p>

      <div className="space-y-6">
        {jobOpenings.map((job, index) => (
          <div
            key={index}
            className="shadow-lg border rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
            <p className=" mb-4">{job.location}</p>
            <p className="">{job.description}</p>
            <button
              onClick={() => handleApplyClick(job.title)}
              className="mt-4 bg-gradient-to-r from-blue-400 to-teal-400   text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
      <Toaster />
    </div>
  );
};

export default CareersPage;
