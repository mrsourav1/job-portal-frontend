import React from 'react'

const PopularCategoryCard = ({icon,name}) => {
  return (
    <div className='popularCard_Container'>
        <div className='CardIcon_section'>
            <div className='cardIcon_container'>
                {/* <HeaderMenuOptions optionText="Premium" OptionIcon={<SecurityIcon />} /> */}
                <span>{icon}</span>
                {/* <{ props.icon } /> */}
            </div>
        </div>
        <div className='AboutCard_Section'>
            <div className='AboutCard_Container'>
                <p className='AboutCard'>{name}</p>
            </div>
        </div>
    </div>
  )
}

export default PopularCategoryCard;