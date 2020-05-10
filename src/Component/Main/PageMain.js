import React from 'react'
import Wallpaper from './Wallpaper';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import MyNavbar from '../Utilities/MyNavbar';
import BlogSection from '../Blog/BlogSection';
import Footer from '../Utilities/Footer'

function PageMain(prop) {
    
    return (
        <React.Fragment>
            <Wallpaper label='Welcome'/>
            <MyNavbar location={prop.location.pathname}/>
            <Part1 label='Welcome'/>
            <BlogSection size={3}/>
            <Part1 label='Fallow us'/>
            <Part2/>
            <Part1 label='Take a look'/>
            <Part3/>
            <Part1 label='Never stop Dreaming'/>
            <Footer/>  
        </React.Fragment>
    )
}

export default PageMain
