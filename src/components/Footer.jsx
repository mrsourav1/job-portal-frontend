import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import { FaGooglePlusG } from "react-icons/fa"
import { RiLinkedinLine } from "react-icons/ri"
import { BsFacebook } from "react-icons/bs"
import { IoLogoTwitter } from "react-icons/io"


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_container'>
            <div className='footer_SectionA'>
                <div className='companyLogo_Section'>
                    <div className='companyLogo_Container'>
                        <img className='companyLogo_image' src="/images/logo.png" alt="Company_Logo" />
                    </div>
                    <div className='companyLogoPara_Cotainer'>
                        <p className='companyLogo_Para'>
                            Sed consequat sapien faus quam bibendum convallis quis in nulla. Pellentesque volutpat odio eget diam cursus semper.
                        </p>
                    </div>
                </div>
            </div>
            <div className='footer_SectionB'>
                <div className='quickLink_Section'>
                    <div className='quickLink_Container'>
                        <div className='quickLink_Heading'>
                            <h5 style={{color:"white",fontSize:"bold"}}>Quick Link</h5>
                        </div>
                        <div className='quickLink_linkContainer'>
                            <div className='quickLink_linkfirst'>
                                <ul>
                                    <Link><li style={{width:"150px",marginBottom:"15px",fontSize:"0.9rem",color:"#272f3d"}}>About Us</li></Link>
                                    <Link><li style={{width:"150px",marginBottom:"15px",fontSize:"0.9rem",color:"#272f3d"}}>Support</li></Link>
                                    <Link><li style={{width:"150px",marginBottom:"15px",fontSize:"0.9rem",color:"#272f3d"}}>Licence</li></Link>
                                    <Link><li style={{width:"150px",marginBottom:"15px",fontSize:"0.9rem",color:"#272f3d"}}>Contact</li></Link>
                                </ul>
                            </div>
                            <div className='quickLink_linkSecond'>
                                <ul>
                                    <Link><li style={{width:"150px",marginBottom:"15px",fontSize:"0.9rem",color:"#272f3d"}}>Terms & Conditions</li></Link>
                                    <Link><li style={{width:"150px",marginBottom:"15px",fontSize:"0.9rem",color:"#272f3d"}}>Privacy</li></Link>
                                    <Link><li style={{width:"150px",marginBottom:"15px",fontSize:"0.9rem",color:"#272f3d"}}>Product License</li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer_SectionC'>
                <div className='socialMedia_handleSection'>
                    <div className='socialMedia_handlesContainer'>
                        <h5 style={{color:"white",marginBottom:"5px"}}>Connect With Us</h5>
                        <ul>
                            <Link to="#" style={{color:"#272f3d"}}><li className='socialIcon_list'><FaGooglePlusG className='social_icons' style={{color:"#fff",backgroundColor:"#dd4b39"}} /> Gmail</li></Link>
                            <Link to="#" style={{color:"#272f3d"}}><li className='socialIcon_list'><RiLinkedinLine className='social_icons'  style={{color:"#fff",backgroundColor:"#007bb5"}} /> LinkedIn</li></Link>
                            <Link to="#" style={{color:"#272f3d"}}><li className='socialIcon_list'><BsFacebook className='social_icons'  style={{color:"#55acee",backgroundColor:"#fff"}}  />Facebook</li></Link>
                            <Link to="#" style={{color:"#272f3d"}}><li className='socialIcon_list'><IoLogoTwitter className='social_icons'  style={{color:"#fff",backgroundColor:"3b5998"}}  /> Twitter</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer