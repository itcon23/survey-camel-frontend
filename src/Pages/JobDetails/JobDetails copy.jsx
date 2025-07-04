import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
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
  const [job, setJob] = useState(null);
  
 
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const fetchJobList = async () => {
      const response = await fetch('public/jobs.json');
      const data = await response.json();
      setJobList(data)
    }

    fetchJobList();
  },[])

  console.log(jobList);
  

  return (
    <main>
      <section className="">
        {/* Top Area */}
        <div className="bg-[#04343a] py-12">
          <div className="container mx-auto">
            <div className="md:w-6/12">
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
                      <p className="text-white font-bold text-lg">
                        {job.salary}
                      </p>
                    </div>
                  </div>
                </div>
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
                <p className="text-xs">
                  Complete the eligibities checklist now and get started with
                  your online application
                </p>

                {/* Form Start  */}
                <form action="">
                  <div className="mt-5">
                    <label className="input validator w-full">
                      <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <g
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2.5"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </g>
                      </svg>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        minlength="3"
                        maxlength="30"
                        title="Only letters, numbers or dash"
                      />
                    </label>
                  </div>
                  <div className="mt-5">
                    <label className="input validator w-full">
                      <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <g
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2.5"
                          fill="none"
                          stroke="currentColor"
                        >
                          <rect
                            width="20"
                            height="16"
                            x="2"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                      </svg>
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        minlength="3"
                        maxlength="30"
                        title="Only letters, numbers or dash"
                      />
                    </label>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="" className="text-gray-400">Upload Your Resume</label>
                    <input
                      type="file"
                      className="w-full file-input file-input-accent"
                    />
                  </div>
                  <div className="mt-5">
                    <h5>Are you authorized to work In USA?</h5>
                    <div className="flex gap-2 items-center">
                      <div className="flex gap-2 items-center">
                        <label htmlFor="">Yes</label>
                        <input
                          type="radio"
                          name="usa-radio"
                          className="radio radio-accent radio-xs"
                          defaultChecked
                        />
                      </div>
                      <div className="flex gap-2 items-center">
                        <label htmlFor="">No</label>
                        <input
                          type="radio"
                          name="usa-radio"
                          className="radio radio-accent radio-xs"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h5>Do you have USA GOV Document <span className="xs">( Nid, Driving License, Passport etc)</span> </h5>
                    <div className="flex gap-2 items-center">
                      <div className="flex gap-2 items-center">
                        <label htmlFor="">Yes</label>
                        <input
                          type="radio"
                          name="usa-doc-radio"
                          className="radio radio-accent radio-xs"
                          defaultChecked
                        />
                      </div>
                      <div className="flex gap-2 items-center">
                        <label htmlFor="">No</label>
                        <input
                          type="radio"
                          name="usa-doc-radio"
                          className="radio radio-accent radio-xs"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h5>Do you have a Bachelor Degree?</h5>
                    <div className="flex gap-2 items-center">
                      <div className="flex gap-2 items-center">
                        <label htmlFor="">Yes</label>
                        <input
                          type="radio"
                          name="bachelor-radio"
                          className="radio radio-accent radio-xs"
                          defaultChecked
                        />
                      </div>
                      <div className="flex gap-2 items-center">
                        <label htmlFor="">No</label>
                        <input
                          type="radio"
                          name="bachelor-radio"
                          className="radio radio-accent radio-xs"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h5>Do you have a Masters Degree?</h5>
                    <div className="flex gap-2 items-center">
                      <div className="flex gap-2 items-center">
                        <label htmlFor="">Yes</label>
                        <input
                          type="radio"
                          name="masters-radio"
                          className="radio radio-accent radio-xs"
                          defaultChecked
                        />
                      </div>
                      <div className="flex gap-2 items-center">
                        <label htmlFor="">No</label>
                        <input
                          type="radio"
                          name="masters-radio"
                          className="radio radio-accent radio-xs"
                        />
                      </div>
                    </div>
                  </div>
                  {job.location === "remote" && <div className="mt-5">
                    <h5>Do you agree to confirm your Identity with <a href="https://www.veriff.com/" target="_blank" className="text-blue-600 underline">veriff</a>?</h5>
                    <div className="flex gap-2 items-center">
                      <div className="flex gap-2 items-center">
                        <label htmlFor="">Yes</label>
                        <input
                          type="radio"
                          name="veriff-radio"
                          className="radio radio-accent radio-xs"
                          defaultChecked
                        />
                      </div>
                      <div className="flex gap-2 items-center">
                        <label htmlFor="">No</label>
                        <input
                          type="radio"
                          name="veriff-radio"
                          className="radio radio-accent radio-xs"
                        />
                      </div>
                    </div>
                  </div>}
                  

                  <input type="submit" className="btn btn-accent mt-8 w-full" value="Submit Application" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
