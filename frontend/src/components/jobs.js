import React,{useEffect, useState} from 'react'
import Axios from "axios";
import "../styling/jobs.css"
import Navbar from './navbar';
export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  const url="http://localhost:4000/jobs"
  useEffect(() => {
    Axios.get(`${url}`)
      .then((response) => {
        const data = response.data;
        console.log(data)
        setJobs(data)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
                <Navbar />
            </div>
       <div className="jobs-container">
      {jobs.map((job) => (
        <div className="job-card" key={job.id}>
          <h2>{job.title}</h2>
          <p><strong>Job Title:</strong> {job.JobTitle}</p>
          <p><strong>Location:</strong> {job.Location}</p>
          <p><strong>Description:</strong> {job.Description}</p>
          <p>
            <strong>Application URL:</strong> <a href={job.URL} target="_blank" rel="noopener noreferrer">Apply Here</a>
          </p>
        </div>
      ))}
    </div>
    </div>
  )
}
