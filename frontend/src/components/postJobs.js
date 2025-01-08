import React, { useState } from 'react';
import "../styling/postJob.css"
import Axios from "axios";
function PostJob() {
  const [formData, setFormData] = useState({
    JobTitle: '',
    Location: '',
    Description: '',
    URL: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const url = "https://api.ocean-technology.org/jobs";
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have submitted the job details successfully")
    Axios.post(`${url}`, formData)
    .then((response) => {
      console.log(response)
    })
    .then((err) => console.log(err));
    setSubmitted(true);
  };

  return (
    <div className='body_postjob'>
    <div className="form-container">
      {!submitted ? (
        <form id="jobForm" onSubmit={handleSubmit}>
          <h2>Job Application Form</h2>
          <div className="form-group">
            <label htmlFor="jobTitle">JobTitle:</label>
            <input
              type="text"
              id="jobTitle"
              name="JobTitle"
              value={formData.JobTitle}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="Location"
              value={formData.Location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="Description"
              rows="5"
              value={formData.Description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="url">Application URL:</label>
            <input
              type="url"
              id="url"
              name="URL"
              value={formData.URL
              }
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <div id="jobDetails">
          <h2>Job Details</h2>
          <p>
            <strong>Job Title:</strong> <span>{formData.JobTitle}</span>
          </p>
          <p>
            <strong>Location:</strong> <span>{formData.Location}</span>
          </p>
          <p>
            <strong>Description:</strong> <span>{formData.Description}</span>
          </p>
          <p>
            <strong>Application URL:</strong> <a href={formData.URL} target="_blank" rel="noopener noreferrer">Apply Here</a>
          </p>
        </div>
      )}
    </div>
    </div>
  );
}

export default PostJob;
