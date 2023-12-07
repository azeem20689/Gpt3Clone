import React from 'react'
import './blog.css';
import Article from '../../components/article/Article';
import {blog01,blog02,blog03,blog04,blog05} from './imports.js';

function Blog() {
  return (
    <div className='blog'>
      <div className="heading">
        <h1 className='gradient__text'>A lot is happening,<br/> We are blogging about it.</h1>
      </div>
      <div className="blog_container">
        <div className="blog_container_a">
        <Article imageUrl={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="blog_container_b">
        <Article imageUrl={blog02} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imageUrl={blog03} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imageUrl={blog04} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imageUrl={blog05} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog
