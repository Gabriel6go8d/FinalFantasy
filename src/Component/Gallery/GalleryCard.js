import React, {useState, useRef} from 'react'
import {FiShare2} from 'react-icons/fi'
import {FaRegHeart, FaHeart, FaInfoCircle} from 'react-icons/fa'
import {AiOutlineCloudDownload} from 'react-icons/ai'
import CardThumnails from './CardThumnails'

function GalleryCard(prop) {

    const [bol, setBol] = useState(true)  
    const changeHearth = () => {
        if(bol){
            setRed(<FaHeart size='25px' color='red'/>)
        }else{
            setRed(<FaRegHeart size='25px' color='black'/>)
        }   
        setBol(!bol)   
    }

    const CardRef =useRef(null)

    const [bol2, setBol2] = useState(true)  
    const moreInfo = () => {
        if(bol2){
            CardRef.current.classList.add('card_open')
        }else{
            CardRef.current.classList.remove('card_open')
        }
        setBol2(!bol2)
    }

    const [red, setRed] = useState(<FaRegHeart size='25px' color='black'/>)

    const present = prop.values.faces.map((xx, index) => <CardThumnails values={xx} key={index}/>)

    return (
        <div className='col-12 col-md-6 col-lg-6 col-xl-4 m-0 p-0' ref={CardRef}>
            <div className='gallery_image myHover m-1' style={{backgroundImage: `url(${require(`../../Images/ima${prop.values.id}.png`)})`}}>

                <div onClick={() => window.location = require(`../../Images/ima${prop.values.id}.png`)} className='click_div'></div>

                <div className='gallery_image_footer'>
                    <div className='row m-0 p-0 pb-3 align-items-center justify-content-around' style={{height: '80px'}}>

                        <div className='col-7 m-0 p-0' style={{display: 'flex'}}>
                            <p>{prop.values.label}</p>
                            <p>{prop.values.bold}</p>
                        </div>
                        <div className='gallery_image_footer_icon'>
                            <FiShare2 size='25px' color='gray'/> 
                        </div>
                        <div className='gallery_image_footer_icon' onClick={changeHearth}>
                            {red}
                        </div> 
                        <a className='gallery_image_footer_icon' href={require(`../../Images/ima${prop.values.id}.png`)} download>
                            <AiOutlineCloudDownload size='35px' color='black'/>
                        </a>
                        <div className='gallery_image_footer_icon'>
                            <FaInfoCircle size='25px' color='#2477BF' onClick={moreInfo}/>                        
                        </div>
                    </div>

                    <div className='gallery_image_info'>
                        <h5>Author: Unknown</h5>
                        <img alt='LittleImg' className='little_img' src={require(`../../Images/ima${prop.values.id}.png`)}></img>
                        <div className='row m-0 p-0'>
                            {present}
                        </div>                        
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default GalleryCard
