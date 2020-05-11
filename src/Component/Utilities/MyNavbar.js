import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

function MyNavbar(prop) {
    
    return (
        <React.Fragment>
            <Navbar variant='dark' sticky='top' expand="lg" style={{backgroundColor: '#333333'}}>
            <div className='container'>
                <img src={require('../../Images/logo2.png')} alt='logo' className='logo_img' 
                    onClick={() => window.location = process.env.PUBLIC_URL + "/#/"}></img>
                <Navbar.Brand href={process.env.PUBLIC_URL + "/#/"} style={{fontSize: '20px'}}>                    
                    FinalFantasy
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">                
                <Nav className="mr-auto" activeKey={prop.location}>
                    <Nav.Link href={process.env.PUBLIC_URL + "/#/blog"} style={{fontSize: '20px'}}>Blog</Nav.Link>
                    <Nav.Link href={process.env.PUBLIC_URL + "/#/gallery"} style={{fontSize: '20px'}}>Gallery</Nav.Link>  
                    <Nav.Link href={process.env.PUBLIC_URL + "/#/about"} style={{fontSize: '20px'}}>About</Nav.Link>   
                                    
                </Nav> 
                {/* <Nav activeKey={prop.location}>
                    <Nav.Link href="/login" style={{fontSize: '20px'}} disabled>Login</Nav.Link>
                    <Nav.Link href="/register" style={{fontSize: '20px'}} disabled>Register</Nav.Link>                                    
                </Nav> */}
                
                </Navbar.Collapse>
            </div>
            </Navbar>
        </React.Fragment>
    )
}

export default MyNavbar
