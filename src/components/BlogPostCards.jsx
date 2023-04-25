import React from 'react'

const BlogPostCards = ({img,heading,para}) => {
  return (
    <div className='blogPost_Card'>
        <div className='blogPost_CardImg'>
            <img className='blog_images' src={img} alt="Blog_image" />
        </div>
        <div className='blogPostAboutCard_Container'>
            <h4 className='blogPost_AboutCard'>{heading}</h4>
        </div>
        <div className='blogPostCardDetails_Container'>
            <p className='blogPost_CardDetails'>{para}</p>
        </div>
    </div>
  )
}

export default BlogPostCards;