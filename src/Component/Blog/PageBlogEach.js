import React from 'react'
import MyNavbar from '../Utilities/MyNavbar'
import listBlog from './ListOfBlog.json'
import { Parallax } from "react-parallax"
import Footer from '../Utilities/Footer'

function PageBlogEach(prop) {  
    console.log('Rendering BlogPage')
    const blog = listBlog[prop.match.params.id]

    return (
        <div>
            <MyNavbar/>

            <div className='container mt-5 mb-5 text-left'>
                <Parallax bgImage={require(`../../ImagesBlog/blog${blog.id}.png`)} strength={500} style={{height: '300px'}}/>
                <h1 className='mt-5'>{blog.title}</h1>
                <h5>Author: {blog.author}</h5>
                <small>Last Update: {blog.lastUpdate}</small>
                <p className='mt-1'>{blog.description}</p>
                <p className='mt-4' style={{textAlign: 'justify'}}>{blog.body}</p>
            </div>

            <Footer/>
        </div>
    )
}
export default PageBlogEach
