import React, { useState } from 'react'
import './JobDescription.css'
import { TfiLocationPin } from 'react-icons/tfi'
import { BsBag,BsPeople } from "react-icons/bs"
import { TbMoneybag, TbExternalLink } from "react-icons/tb"

const JobDescription = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const buttonClicked = () => {
        // perform some action here
        setIsButtonDisabled(true);
      };

  return (
    <div className='jobDescription_section'>
        <div className='jobDescription_container'>
            <div className='jobDecription_titleSection'>
                <div className='jobDecription_titleContainer'>
                    <h3>Software Engineer Job in Delhi at HMInnovance</h3>
                </div>
            </div>
            <div className='jobCard_section'>
                <div className='jobCard_container'>
                    <div style={{textAlign:"start"}}>
                        <h5>Software Engineer</h5>
                        <p>HM Innovance</p>
                    </div>
                    <div style={{marginTop:"7px"}}>
                        <p style={{display:"flex",alignItems:"center"}}><TfiLocationPin style={{marginRight:"10px"}} />Delhi</p>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <p style={{display:"flex",alignItems:"center"}}><BsBag style={{marginRight:"10px"}} /> Experience : Fresher</p>
                            <p style={{display:"flex",alignItems:"center"}}><TbMoneybag style={{marginRight:"10px"}} />CTC: 2-4 LPA</p>
                        </div>
                        <p style={{display:"flex",alignItems:"center"}}><BsPeople style={{marginRight:"10px"}} />Number of Openings : 5</p>
                        {/* {isButtonDisabled?<p style={{backgroundColor:"#F7F7F7",height:"35px",width:"75px",color:"black",textAlign:"center"}}>Applied...</p>:<button style={{backgroundColor:"#519CF1",height:"35px",width:"75px",color:"#fff"}} onClick={buttonClicked} disabled={isButtonDisabled}>Apply</button>} */}
                        <button style={{backgroundColor:"#519CF1",height:"35px",width:"75px",color:"#fff"}}>Apply</button>
                    </div>
                </div>
            </div>
            <div className='aboutCompany_section'>
                <div className='aboutCompany_container'>
                    <div className='aboutCompany_headerContainer'>
                        <h5 style={{textAlign:"start"}}>About HM Innovace</h5>
                        <p style={{display:"flex",alignItems:"center"}}>Webite <TbExternalLink style={{marginLeft:"10px"}} /></p>
                    </div>
                    <div className='aboutComapany_description'>
                        <p style={{textAlign:"start"}}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reprehenderit debitis iusto tenetur nobis laboriosam, exercitationem repellendus nemo similique accusantium incidunt esse vel? Laboriosam quis cupiditate maxime quos qui. Quasi, rem hic. Ab sit ut temporibus non at nihil suscipit harum ea aspernatur nisi maxime quae corporis, tempore esse pariatur nobis. Quia, ipsam est pariatur possimus repellendus mollitia provident corporis sit saepe quibusdam laboriosam?
                        </p>
                    </div>
                </div>
            </div>
            <div className='aboutJobRole_section'>
                <div className='aboutJobRole_container'>
                    <div className='aboutJobRole_headingSection'>
                        <h5>About Job Role</h5>
                    </div>
                    <div className='aboutJobRole_paraSection'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas commodi dicta cupiditate velit minima quae vero adipisci dolores quos distinctio libero officia ipsa sunt, eum ex debitis totam assumenda iure et odit ea. Et unde quibusdam eveniet alias id debitis impedit consequuntur dignissimos eum, ad, beatae iusto tempora! Eum amet perspiciatis numquam dolores, est perferendis facilis eius quos corporis sunt asperiores architecto ut esse!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobDescription