import React from 'react'
import MyNavbar from '../Utilities/MyNavbar';
import Footer from '../Utilities/Footer'
import {IoIosMail} from 'react-icons/io'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FaCode, FaGithub} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiReact, DiBootstrap} from 'react-icons/di'

function PageAbout(prop) {
    return (
        <div className='about'>
            <MyNavbar location={prop.location.pathname}/>
            <div className='container'>
                <div className='row m-0 p-0'>
                    <div className='col-12 col-md-6 col-lg-7 mt-3 m-0 p-0'>
                        <div className='text-left'>
                            <h4>FinalFantasy</h4>

                            <h5>Author: Gabriel Gutierrez</h5>
                            <a href='mailto:gabriel.ares93@gmail.com' className='contact_link'>
                                <div>
                                    <IoIosMail size='28px' color='black'/>
                                    <p>Email: </p>
                                </div>
                                <p>gabriel.ares93@gmail.com</p>
                            </a>

                            <a href='https://gabriel6go8d.github.io/curriculum-vitae-2/' className='contact_link'>
                                <div>
                                    <BsBriefcaseFill size='24px' color='black'/>
                                    <p>Portfolio: </p>
                                </div>
                                <p>https://gabriel6go8d.github.io/curriculum-vitae-2/</p>
                            </a>
                            
                            <a href='https://github.com/Gabriel6go8d/FinalFantasy' className='contact_link'>
                                <div>
                                    <FaCode size='21px' color='black'/>
                                    <p>Project Code: </p>
                                </div>
                                <p>https://github.com/Gabriel6go8d/FinalFantasy</p>
                            </a>
                            <a href='https://github.com/Gabriel6go8d' className='contact_link'>
                                <div>
                                    <FaGithub size='26px' color='black'/>
                                    <p>GitHub: </p>
                                </div>
                                <p>https://github.com/Gabriel6go8d</p>
                            </a>

                            <h5 className='mt-3'>Used Tecnologies: </h5>
                            <div className='contact_tec'>
                                <AiFillHtml5 size='40px' color='#FF7300'/>
                                <DiCss3 size='40px' color='#2881b8'/>
                                <DiReact size='40px' color='#2C2F73'/>
                                <DiBootstrap size='40px' color='#022873'/>
                            </div>

                            <h5 className='mt-3'>What I Learn?</h5>
                            <p>In this project I learned how to create animations with CSS and how to use InteractionObserver in order to trigger the animation when the element reaches certain point, how to handle a download button for files on the local server and use the Cards from Bootstrap. Also, how to create a Parallax effect and how to use the react-odometer. Additionally I learned how to use the react-route-dom, especially for GitHub Pages, using HashRouter insted of BrowserRouter and dealing with the scroll bug from HashRouter.</p>
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
