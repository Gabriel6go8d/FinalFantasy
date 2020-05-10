import React, {useEffect, useRef} from 'react'
import {FaFacebookSquare, FaTwitter, FaGoogle} from 'react-icons/fa'

function Part2A(props) {

    const CountRef = useRef(null)
    useEffect(()=>{ 
        const myObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    console.log('lol')
                    CountRef.current.innerHTML = props.value 
                    observer.disconnect()
                }
            })
        })
        myObserver.observe(document.getElementById('part2'))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    var present = ''
    switch(props.icon){
        case 'facebook':
            present = <FaFacebookSquare size='50px' color='white' className='col-12'/>
            break
        case 'twitter':
            present = <FaTwitter size='50px' color='white' className='col-12'/>
            break
        case 'google':
            present = <FaGoogle size='50px' color='white' className='col-12'/>
            break
        default:
            break
    }

    return (
        <div className='col-4 text-center'>
            <h1 className='odometer text-white col-12' style={{fontSize: '40px'}} ref={CountRef}>0</h1>
            {present}
        </div>
    )
}

export default Part2A
