import React from 'react'
import MyNavbar from '../Utilities/MyNavbar';

function PageAbout(prop) {
    return (
        <div>
            <MyNavbar location={prop.location.pathname}/>
            <div className='container text-left mt-5'>
                <h4>FinalFantasy</h4>
                <p>Author: Gabriel Gutierrez</p>
                <p>Email: <a href='mailto:gabrie.ares93@gmail.com'>gabriel.ares93@gmail.com</a></p>
                <p>Portafolio <a href='https://gabriel6go8d.github.io/curriculum-vitae-2/'>https://gabriel6go8d.github.io/curriculum-vitae-2/</a></p>
                <p>This Project Code: <a href='https://github.com/Gabriel6go8d/FinalFantasy'>https://github.com/Gabriel6go8d/FinalFantasy</a></p>

                <p className='mt-3'>Used Tecnologies: </p>
                <p>HTML5  CSS3  Javascript  React  Bootstrap</p>
                <p className='mt-3'>What I Learn?</p>
                <p>In this project I learn how to create animations with CSS, check the scroll position, how handle a download buttom, use the Cards from Bootstrap, how create a Parallax effect and how use the react-odometer. </p>
            </div>
        </div>
    )
}

export default PageAbout
