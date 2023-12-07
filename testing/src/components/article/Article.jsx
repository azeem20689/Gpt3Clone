import React from 'react'
import './article.css';

function Article({imageUrl,date , title}) {
  return (
    <div className='article'>
      <div className="article_image">
        <img src={imageUrl} alt="blog" />
      </div>
      <div className="text_content">
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
      <p className='lastP'>Read Full Article</p>
    </div>
  )
}

export default Article
