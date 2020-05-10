import React from 'react'
import MyNavbar from '../Utilities/MyNavbar';
import Footer from '../Utilities/Footer'

function PageAbout(prop) {
    return (
        <div className='about'>
            <MyNavbar location={prop.location.pathname}/>
            <div className='container'>
                <div className='row m-0 p-0'>
                    <div className='col-12 col-md-6 col-lg-7 mt-5 m-0 p-0'>
                        <div className='text-left'>
                            <h4>FinalFantasy</h4>
                            <p>Author: Gabriel Gutierrez</p>
                            <p>Email: <a href='mailto:gabrie.ares93@gmail.com'>gabriel.ares93@gmail.com</a></p>
                            <p>Portafolio <a href='https://gabriel6go8d.github.io/curriculum-vitae-2/'>https://gabriel6go8d.github.io/curriculum-vitae-2/</a></p>
                            <p>This Project Code: <a href='https://github.com/Gabriel6go8d/FinalFantasy'>https://github.com/Gabriel6go8d/FinalFantasy</a></p>

                            <p className='mt-3'>Used Tecnologies: </p>
                            <p>HTML5  CSS3  Javascript  React  Bootstrap</p>
                            <p className='mt-3'>What I Learn?</p>
                            <p>In this project I learn how to create animations with CSS and create and InterractionObserver in order to trigger the animation when the Element is visible, how handle a download buttom, use the Cards from Bootstrap, how create a Parallax effect and how use the react-odometer. Aditionaly I learn how to use the react-route-dom, especially for GitHub Pages, using HashRouter insted of BrowserRouter, dealing with the scroll problem from HashRouter.</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-5'>
                        <img alt='Sword' className='about_img' src={require('../../Images/sword.png')}></img>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PageAbout
