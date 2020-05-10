import React from 'react'
import MyNavbar from '../Utilities/MyNavbar';
import GalleryImage from './GalleryCard'
import listImg from './ListOfPictures.json'
import Footer from '../Utilities/Footer'

function PageGallery(prop) {   

    const present = listImg.map(xx => <GalleryImage values={xx} key={xx.id}/>)

    return (
        <div>            
            <MyNavbar location={prop.location.pathname}/> 
            <div className='row m-0 p-0 justify-content-between mr-lg-5 ml-lg-5 pt-5 pb-5'>
                {present}
            </div>   
            <Footer/>         
        </div>
    )
}

export default PageGallery
