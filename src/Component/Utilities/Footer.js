import React from 'react'

function Footer() {
    const FooStyles = {
        height: '10s0px',
        backgroundColor: '#333333'
    }

    return (
        <div style={FooStyles}>
            <div className='container'>
                <div className='row justify-content-between align-items-center' style={{height: '100px'}}>
                    <a className='btn default col-12 col-lg-4' href={process.env.PUBLIC_URL + '/#/'}><h3 className='text-white'>FinalFantasy</h3></a>
                    <div className='col-12 col-lg-4'>
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
