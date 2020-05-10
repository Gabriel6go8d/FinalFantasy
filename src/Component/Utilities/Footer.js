import React from 'react'

function Footer() {
    return (
        <div className='footer'>
            <div className='container' style={{height: '100%'}}>
                <div className='row justify-content-between align-items-center' style={{height: '100%'}}>
                    
                    <div className='col-12 col-sm-6 col-lg-4'>
                        <img src={require('../../Images/logo2.png')} alt='logo' className='logo_img' 
                            onClick={() => window.location = process.env.PUBLIC_URL + "/#/"}></img>
                        <a className='btn default' href={process.env.PUBLIC_URL + '/#/'}>
                            <h3 className='text-white'>FinalFantasy</h3>
                        </a>
                    </div>
                    
                    <div className='col-12 col-sm-6 col-lg-4'>
                        <div className='row justify-content-around'>                            
                            <a className='btn default col-3 ' href={process.env.PUBLIC_URL + '/#/blog'}><h5 className='text-white'>Blog</h5></a>
                            <a className='btn default col-3 ' href={process.env.PUBLIC_URL + '/#/gallery'}><h5 className='text-white'>Gallery</h5></a>
                            <a className='btn default col-3 ' href={process.env.PUBLIC_URL + '/#/about'}><h5 className='text-white'>About</h5></a>
                        </div>    
                    </div>                
                </div>
            </div>            
        </div>
    )
}

export default Footer
