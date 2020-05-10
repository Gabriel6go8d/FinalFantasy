import React from 'react'
import { Parallax } from "react-parallax";

function Wallpaper(props) {

    return (
        <div>
            <Parallax bgImage={require('../../Images/bigone.png')} strength={500}>
                <div style={{height: '100vh'}}>
                    {/* <h1 className='wall_label'>
                        Even if you end up as the world's Enemy...<br/>I'll be your Knight, I'll Protect You
                    </h1> */}
                </div>
            </Parallax>       
        </div>
    )
}

export default Wallpaper
