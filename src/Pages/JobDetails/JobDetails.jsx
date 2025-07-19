import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaBriefcase, FaClock } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";

export default function JobDetails() {
  const { jobId } = useParams();
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobList = async () => {
      const response = await fetch("/jobs.json");
      const data = await response.json();
      setJob(data.find((dt) => dt._id == jobId));
      setLoading(false);
    };
    fetchJobList();
  }, [jobId]);

  if (loading)
    return (
      <div className="container mx-auto my-[45vh] text-center text-2xl font-medium">
        Loading...
      </div>
    );

  return (
    <main>
      <section className="">
        {/* Top Area */}
        <div className="bg-[#04343a] py-12">
          <div className="container mx-auto">
            <div className="pt-[10vh] Pb-20">
              <div className="inline-block p-1 px-2 rounded-full bg-white mb-2">
                <p className="text-xs font-bold text-[#04343a]">
                  {job.jobType}
                </p>
              </div>
              <h2 className="text-4xl font-bold text-white my-5">
                {job.title}
              </h2>
              <p className="flex items-center gap-2 text-gray-400 text-xl capitalize">
                {" "}
                <FaMapMarkerAlt /> <span>{job.location}</span>{" "}
              </p>
              <p className="text-white text-justify mt-3">
                {job.shortDescription}
              </p>

              {/* Hero Below Items */}
              <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-12 mt-12">
                {/* item */}
                <div className="flex items-center gap-2">
                  <FaBriefcase className="text-5xl text-[#0b8260]" />
                  <div>
                    <p className="text-white leading-5">Department</p>
                    <p className="text-white font-bold text-lg capitalize">
                      {job.department}
                    </p>
                  </div>
                </div>
                {/* item */}
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-5xl text-[#0b8260]" />
                  <div>
                    <p className="text-white leading-5">Location</p>
                    <p className="text-white font-bold text-lg capitalize">
                      {job.location}
                    </p>
                  </div>
                </div>
                {/* item */}
                <div className="flex items-center gap-2">
                  <FaSackDollar className="text-5xl text-[#0b8260]" />
                  <div>
                    <p className="text-white leading-5">Salary</p>
                    <p className="text-white font-bold text-lg">{job.salary}</p>
                  </div>
                </div>
                {/* item */}
                {job.workHours && (
                  <div className="flex items-center gap-2">
                    <FaClock className="text-5xl text-[#0b8260]" />
                    <div>
                      <p className="text-white leading-5">Work Hours</p>
                      <p className="text-white font-bold text-lg">
                        {job.workHours}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Job Details Area */}
        <div className="pt-12 pb-5 bg-gray-50">
          <div className="container mx-auto">
            <div className="md:flex gap-8 items-start">
              <div className="md:w-8/12 shadow-2xl p-4 md:p-12 bg-white rounded-md">
                <h4 className="text-2xl font-medium mb-5">Job Description</h4>
                {job.description
                  .split(/<br\s*\/?>/gi)
                  .map((paragraph, index) => (
                    <p key={index} className="mb-4 text-lg">
                      {paragraph}
                    </p>
                  ))}

                {job.experience && (
                  <div className="mb-5">
                    <h5 className="text-xl font-medium mb-2">Experience:</h5>
                    <p className="ml-4">{job.experience}</p>
                  </div>
                )}

                <div className="mb-5">
                  <h5 className="text-xl font-medium mb-2">Requirements:</h5>
                  <ul className="ml-12 list-disc">
                    {job.requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-5">
                  <h5 className="text-xl font-medium mb-2">
                    Responsibilities:
                  </h5>
                  <ul className="ml-12 list-disc">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-5">
                  <h5 className="text-xl font-medium mb-2">
                    Qualifications and Skills:
                  </h5>
                  <ul className="ml-12 list-disc">
                    {job.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>

                {job.benefits && job.benefits.length > 0 && (
                  <div className="mb-5">
                    <h5 className="text-xl font-medium mb-2">Benefits:</h5>
                    <ul className="ml-12 list-disc">
                      {job.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Footer Area */}
                <div className="border-t border-gray-200 pb-0 p-5">
                  <div className="flex items-center gap-3">
                    <p>Share This Job:</p>
                    <div className="flex items-center gap-1">
                      <FaFacebookSquare className="text-4xl text-gray-400" />
                      <FaLinkedin className="text-4xl text-gray-400" />
                      <FaTwitterSquare className="text-4xl text-gray-400" />
                      <FaInstagram className="text-4xl text-gray-400" />
                      <FaWhatsappSquare className="text-4xl text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-4/12 p-4 md:p-12 bg-white rounded-md">
                <h4 className="text-2xl font-medium mb-2">Ready To Apply?</h4>
                <p className="text-xs mb-4">
                  Complete the eligibities checklist now and get started with
                  your online application
                </p>

                <div className="mb-6">
                  <h5 className="font-medium mb-2">
                    Eligibility Requirements:
                  </h5>
                  <ul className="text-xs list-disc pl-5 space-y-1">
                    {job.requirements
                      .filter(
                        (req) =>
                          req.includes("authorized") ||
                          req.includes("located") ||
                          req.includes("citizenship") ||
                          req.includes("Veriff")
                      )
                      .map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                  </ul>
                </div>

                {job.requirements.some((req) => req.includes("Veriff")) && (
                  <div className="mb-6 p-3 bg-gray-50 rounded">
                    <h5 className="font-medium mb-1 text-sm">Why Veriff?</h5>
                    <p className="text-xs">
                      Veriff helps us verify your identity securely to prevent
                      fraud and ensure compliance with US employment laws. This
                      one-time verification protects both you and our
                      organization, and takes less than 2 minutes to complete.
                    </p>
                  </div>
                )}

                <div className="border-t pt-4">
                  <h5 className="font-medium mb-2 text-sm">
                    Application Details:
                  </h5>
                  {job.applicationDeadline && (
                    <p className="text-xs mb-1">
                      <span className="font-medium">Deadline:</span>{" "}
                      {job.applicationDeadline}
                    </p>
                  )}

                  <h5 className="font-medium mb-2 text-sm mt-3">
                    Alternative Application:
                  </h5>
                  <p className="text-xs mb-2">
                    Prefer to apply via email? Send your CV and details to:
                  </p>
                  <a
                    href="mailto:career@surveycamel.com"
                    className="text-blue-600 text-xs underline"
                  >
                    career@surveycamel.com
                  </a>

                  <p className="text-xs mt-3 mb-1">Need assistance?</p>
                  <a
                    href="mailto:support@surveycamel.com"
                    className="text-blue-600 text-xs underline"
                  >
                    support@surveycamel.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
