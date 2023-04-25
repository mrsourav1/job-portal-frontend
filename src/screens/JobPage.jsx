import React from 'react'
import JobCard from '../components/JobCard';
import JobPageSideBar from '../components/JobPageSideBar';
import "./JobPage.css"

const JobPage = () => {
  return (
    <div className='jobPage_Section'>
        <div> 
            <JobPageSideBar />
        </div>
        <div>
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
        </div>
    </div>
  )
}

export default JobPage;