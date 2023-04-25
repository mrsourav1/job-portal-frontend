import React from 'react'
import "./JobCard.css"
import { GoLocation } from 'react-icons/go'
import { BsBag } from "react-icons/bs"
import { TbMoneybag } from "react-icons/tb"

const JobCard = () => {
  return (
    <div className='jobCard_Section'>
        <div className='jobCard_Container'>
            <div className='jobCard_details'>
                <div className='jobCard_heading'>
                    <h6 style={{marginTop:"20px"}}>Job is About</h6>
                    <p>Company`s Name</p>
                </div>
                <div className='job_location'>
                    <div style={{marginRight:"5px",marginTop:"5px"}}>
                        <GoLocation />
                    </div>
                    <div>
                        <p> Work From Home</p>
                    </div>
                </div>
                <div className='job_details'>
                    <div style={{marginRight:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <p style= {{display:"flex",alignItems:"center"}}><BsBag style={{marginRight:"10px"}} />1 Year</p>
                    </div>
                    {/* <div style={{marginRight:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <p tyle= {{display:"flex",justifyContent:"center",alignItems:"center"}}><TbMoneybag />3 LPA</p>
                    </div> */}
                    <div style={{marginRight:"5px",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"60px"}}>
                        <p style= {{display:"flex",alignItems:"center"}}><TbMoneybag style={{marginRight:"10px"}} />2-3 LPA</p>
                    </div>
                </div>
                <div className='card_Footer'>
                    <div className='viewDetails_button'>
                        <p>View Details</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobCard