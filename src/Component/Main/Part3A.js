import React, {useEffect, useRef} from 'react'

function Part3A(prop) {

    const textA = <div className='col-12 col-lg-6 m-0 pl-5 pr-5 align-self-center' >
                        <h1 className='m-0 p-0'>{prop.values.label}</h1>
                        <p className='m-0 p-0'>{prop.values.body}</p>
                    </div>

    const imgA = <div className='col-12 col-lg-6 m-0 p-0'>
                        <img src={prop.values.src} alt='test wall' style={{width: '100%'}}/>
                    </div>

    const matches = window.matchMedia('(min-width:1000px)').matches
    var present = ''
    if(prop.values.position === 'right' && matches){
        present = <React.Fragment>{textA}{imgA}</React.Fragment>        
    }else{
        present = <React.Fragment>{imgA}{textA}</React.Fragment>
    }  

    const divRef = useRef(null)
    useEffect(()=>{ 
        const myObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    const div = entry.target
                    div.classList.add('part3A_ready')    
                    observer.disconnect()
                }
            })
        })
        myObserver.observe(divRef.current)
    },[])

    return (
        <div className='container'>
            <div className={'row m-0 p-0 justify-content-center part3A mt-5 mt-lg-0'} ref={divRef}>
                {present}         
            </div>
        </div>
    )
}

export default Part3A
