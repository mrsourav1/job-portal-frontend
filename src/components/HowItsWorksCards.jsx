import React from 'react'
import {RxPerson} from 'react-icons/rx'

const HowItsWorksCards = ({icon,about,para}) => {
  return (
    <div className='howItsWorks_CardContainer'>
        <div className='howItsWorks_CardIconContainer'>
            <div className='howItsWorks_CardIcon' >
                {/* <RxPerson className='howItsWorks_Icon' /> */}
                <span>{icon}</span>
            </div>
        </div>
        <div className='howItsWorks_CardAboutContainer'>
            <div className='howItsWorks_CardAbout'>
                <h3>{about}</h3>
            </div>
        </div>
        <div className='howItsWorks_CardDetailsContainer'>
            <div className='howItsWorks_CardDetails'>
                <p>{para}</p>
            </div>
        </div>
    </div>
  )
}

export default HowItsWorksCards