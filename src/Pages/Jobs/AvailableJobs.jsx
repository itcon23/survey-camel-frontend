import { useEffect } from "react";
import { useState } from "react";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AvailableJobs() {

  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const fetchJobList = async () => {
      const response = await fetch('jobs.json');
      const data = await response.json();
      setJobList(data)
    }

    fetchJobList();
  },[])

  
  return (
    <section className="my-20">
      <div className="container mx-auto">
        {/* Header Part Start */}
        <div className="md:w-6/12 mx-auto">
          <h2 className="text-4xl font-bold text-center">Avaialble Jobs</h2>
          <p className="my-2 text-center">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores
          </p>
        </div>
        {/* Header Part End */}

        {/* Jobs Container Area Start */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
              jobList.map(job => <div className="bg-white rounded-xl border border-gray-200 overflow-hidden relative" key={job._id}>
              <div className="absolute top-5 right-5 bg-cyan-500 text-white py-2 px-5 rounded-md font-medium">
                Experience - {job.experience}
              </div>
              <div className="p-8 pt-16">

                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-gray-700">{job.title}</h3>
                  <div className="flex items-center gap-3 mb-5 mt-1">
                    <p className="text-lg font-medium text-gray-400 flex items-center gap-1 capitalize"><FaMapMarkerAlt/>{job.location}</p>
                    <p className="text-lg font-medium text-gray-400 flex items-center gap-1 capitalize"><FaBriefcase/>{job.jobType}</p>
                  </div>
                  <p className="text-lg font-bold">{job.salary}</p>
                  <p className="mt-2 text-gray-500 w-full truncate-3-lines">
                    {job.description}
                  </p>
                </div>

                <div className="mt-6 text-right">
                    <button className="btn btn-accent px-5"><Link to={`/jobs/${job._id}`}>See Details</Link></button>
                </div>
              </div>
            </div>)
            }
          </div>
        </div>
        {/* Jobs Container Area End */}
      </div>
    </section>
  );
}
