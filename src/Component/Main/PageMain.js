import React from 'react'
import Wallpaper from './Wallpaper';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import MyNavbar from '../Utilities/MyNavbar';
import BlogSection from '../Blog/BlogSection';

function PageMain(prop) {
    
    return (
        <React.Fragment>
            <Wallpaper label='Welcome'/>
            <MyNavbar location={prop.location.pathname}/>
            <Part1/>
            <BlogSection size={3}/>
            <Part1/>
            <Part2/>
            <Part1/>
            <Part3/>
            <Part1/>
        </React.Fragment>
    )
}

export default PageMain
