import React, {useState, useEffect} from 'react'
import {FaFacebookSquare, FaTwitter, FaGoogle} from 'react-icons/fa'

function Part2A(props) {
    const [countA, setCountA] = useState(0)
    var go = true
    const test = (e) => {
        let partPY = document.getElementById('part2').offsetTop
        let scrollPY = Math.floor(document.body.getBoundingClientRect().y) * (-1)
        if(scrollPY > partPY - window.innerHeight + 125 && go === true){
            setCountA(props.value)
            go = false
        }        
    }

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
    useEffect(()=>{        
        window.addEventListener('scroll', test)
        return () => {
            window.removeEventListener('scroll', test)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className='col-4 text-center'>
            <h1 className='odometer text-white col-12' style={{fontSize: '40px'}}>{countA}</h1>
            {present}
        </div>
    )
}

export default Part2A
