import React from 'react'
import BlogCard from './BlogCard'
import listBlog from './ListOfBlog.json'

function BlogSection(prop) {

    const toShow = listBlog.slice(0, prop.size).map( xx => <BlogCard values={xx} key={xx.id}/>)

    return (
        <div className='container'>
            <div className='row justify-content-around'>
                {toShow}
            </div>
        </div>
    )
}

export default BlogSection
