import React from 'react'
// import Nav from '../components/Nav'
import './Home.css'
import {FaSearch} from 'react-icons/fa'
import {HiOutlineHome} from 'react-icons/hi'
import {TfiWorld} from 'react-icons/tfi'
import { TbBook2 } from 'react-icons/tb'
import { MdComputer, MdOutlineScience } from 'react-icons/md'
import { RiBrush4Line, RiHeartPulseLine } from 'react-icons/ri'
import { GiFoodTruck } from 'react-icons/gi'
import { useState } from 'react'
import PopularCategoryCard from '../components/PopularCategoryCard'
import { Link } from 'react-router-dom'
import {RxPerson} from 'react-icons/rx'
import {BiSearchAlt} from 'react-icons/bi'
import { SlTrophy } from 'react-icons/sl'
import HowItsWorksCards from '../components/HowItsWorksCards'
import BlogPostCards from '../components/BlogPostCards'
import Footer from '../components/Footer'
import NavBar from '../components/Nav'

const Home = () => {
    const [searchValue,setSearchValue] = useState("")



  return (
    <>
    <div className='home_section'>
        <NavBar />
        {/* front Section start ========================>*/}
        <div className='homeintro_section'> 
            <div className='homeintro_sectionContainer'>
                <div className='leftSection_container'>
                    <div className='introHeading_container'>
                        <div className='introHeading'>
                            <h2 className='introHeading_style'>Find the</h2>
                            <h2 className='introHeading_style' style={{marginTop:'0px'}}>job that fits your life</h2>
                        </div>
                    </div>
                    <div className='introPara_container'>
                        <p className='introPara'>Lorem ipsum dolor sit amet strum facere iusto quibusdam officia, asperiores corrupti reiciendis quatur.</p>
                    </div>
                    <div className='jobSearch_Section'>
                        <div className='jobSearch_container'>
                            <form className='jobSearch_intro'>
                                <div className='introSearch_container'>
                                    <input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} className='introSearch_area' type="text" placeholder='Search Job or Company' />
                                </div>
                                <div className='introSubmit_container'>
                                    <button className='introSearch_SubmitButton' type="submit"><FaSearch /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='righttSection_container'>
                    <div className='introImage_container'>
                        <img className='introImage' src="/images/intro.png" alt="intro_Image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* front Section end ========================>*/}

    {/* browse category start */}

    <div className='browseCategory_Section'>
        <div className='browseCategory_Container'>
            {/* browse category heading seaction start */}
            <div className='browseCategoryHeading_Section'>
                <div className='browseCategoryHeading_Container'>
                    <h2 className='browseCategory_Heading'>Browse Categories</h2>
                </div>
                <div className='browseCategoryPara_Container'>
                    <p className='browseCategoryHeading_Para'>Most popular categories of portal, sorted by popularity</p>
                </div>
            </div>
            {/* browse category heading seaction end */}

            {/* popular category Card section start */}
            
            <div className='popularCategoryCard_Section'>
                <div className='popularCategoryCard_Container'>
                    <div className='popularCard_Section'>
                        <PopularCategoryCard name="Finance" icon= {<HiOutlineHome className="cardIcons" />} />
                        <PopularCategoryCard name="Sales/Marketing" icon= {<TfiWorld className="cardIcons" />} />
                        <PopularCategoryCard name="Education/Training" icon= {<TbBook2 className="cardIcons" />} />
                        <PopularCategoryCard name="Technologies" icon= {<MdComputer className="cardIcons" />} />
                        <PopularCategoryCard name="Art/Design" icon= {<RiBrush4Line className="cardIcons" />} />
                        <PopularCategoryCard  name="HealthCare" icon= {<RiHeartPulseLine className="cardIcons" />} />
                        <PopularCategoryCard name="Science" icon= {<MdOutlineScience className="cardIcons" />} />
                        <PopularCategoryCard name="Food Service" icon= {<GiFoodTruck className="cardIcons" />} />
                    </div>
                </div>
            </div>

            {/* popular category Card section end */}
        </div>
    </div>
    {/* browse category end */}

    {/* home post a job start */}
    <div className='postjobHome_Section'>
        <div className='postjobHome_Container'>
            <div className='postjobHomeleft_Section'>
                <div className='postjobHomeleft_container'>
                    <div className='postjobHomeHeading_Container'>
                        <h1 className='postjobHome_Heading'>10000+ Candidates</h1>
                    </div>
                    <div className='postjobHomePara_Container'>
                        <p className='postjobHome_Para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam veniam natus repudiandae sed possimus sint, pariatur, illo alias ex perferendis expedita praesentium nulla, atque omnis.</p>
                    </div>
                    <div className='postjobHome_ButtonContainer'>
                        <button className='postjobHome_Button'><Link to="#" style={{color:"white"}}>Post Job For Free</Link></button>
                    </div>
                </div>
            </div>
            <div className='postjobHomeright_Section'>
                <div className='postjobHomeright_container'>
                    <div className='postjobHomeImage_Section'>
                        <div className='postjobHomeImage_container'>
                            <img className='postjobHome_Image' src="/images/search.png" alt="searchImage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* home post a job end */}

    {/* how its work start */}

    <div className='howItsWorks_Section'>
        <div className='howItsWorks_Container'>
            <div className='howItsWorks_HeadingSection'>
                <div className='howItsWorks_HeadingContainer'>
                    <div className='howItsWorksHeading_Head'>
                        <h2>How It Works?</h2>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam </p>
                    </div>
                </div>
            </div>
            <div className='howItsWorks_CardSection'>
                <div className='howItsWorks_Cards'>                  
                    <HowItsWorksCards
                    icon={<RxPerson className='howItsWorks_Icon' />}
                    about ='Create an Account'
                    para="Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best."
                    />
                    <HowItsWorksCards
                    icon={<BiSearchAlt className='howItsWorks_Icon'/>}
                    about= 'Search Jobs'
                    para="Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best."
                    />
                    <HowItsWorksCards
                    icon ={<SlTrophy className='howItsWorks_Icon' />}
                    about='Apply'
                    para="Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best."
                    />
                </div>
            </div>
        </div>
    </div>
    {/* how its work end ====================================================================================>*/}
    {/* blog post start==========================================================================> */}

    <div className='blogPost_Section'>
        <div className='blogPost_Container'>
            <div className='blogPost_headingSection'>
                <div className='blogPost_headingContainer'>
                    <h2 className='blogPost_heading'>Heading</h2>
                </div>
                <div className='blogPost_ParaContainer'>
                    <p className='blogPost_Para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et
                        metus effici turac fringilla lorem facilisis.</p>
                </div>
            </div>
            <div className='blogPost_CardSection'>
                <div className='blogPost_CardContainer'>
                    {/* <div className='blogPost_Card'>
                        <div className='blogPost_CardImg'>
                            <img className='blog_images' src="/images/img1.jpg" alt="Blog_image" />
                        </div>
                        <div className='blogPostAboutCard_Container'>
                            <h4 className='blogPost_AboutCard'>Tips to write an impressive resume online for beginner</h4>
                        </div>
                        <div className='blogPostCardDetails_Container'>
                            <p className='blogPost_CardDetails'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae.</p>
                        </div>
                    </div> */}
                    <BlogPostCards 
                    img="/images/img1.jpg"
                    heading="Tips to write an impressive resume online for beginner"
                    para = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae."  />
                    <BlogPostCards
                    img="/images/img2.jpg"
                    heading="Increase your chance for getting selection by giving Quick test"
                    para = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae."  />
                    <BlogPostCards
                    img="/images/img3.jpg" 
                    heading="How to convince recruiters and get your dream job" 
                    para = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae."  />                   
                </div>
            </div>
        </div>
    </div>

    {/* blog post end */}
    <Footer />

    </>
  )
}

export default Home