import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

function MyNavbar(prop) {
    
    return (
        <React.Fragment>
            <Navbar bg="dark" variant='dark' sticky='top' expand="lg">
            <div className='container'>
                <Navbar.Brand href="/" style={{fontSize: '20px'}}>FinalFantasy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">                
                <Nav className="mr-auto" activeKey={prop.location}>
                    <Nav.Link href="/blog" style={{fontSize: '20px'}}>Blog</Nav.Link>
                    <Nav.Link href="/gallery" style={{fontSize: '20px'}}>Gallery</Nav.Link>  
                    <Nav.Link href="/about" style={{fontSize: '20px'}}>About</Nav.Link>                       
                </Nav> 
                <Nav activeKey={prop.location}>
                    <Nav.Link href="/login" style={{fontSize: '20px'}} disabled>Login</Nav.Link>
                    <Nav.Link href="/register" style={{fontSize: '20px'}} disabled>Register</Nav.Link>                                    
                </Nav>
                
                </Navbar.Collapse>
            </div>
            </Navbar>
        </React.Fragment>
    )
}

export default MyNavbar
