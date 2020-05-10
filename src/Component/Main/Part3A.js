import React, {useEffect, useRef} from 'react'

function Part3A(prop) {

    const textA = <div className='col-lg-6 m-0 pl-5 pr-5 align-self-center' ><h1>{prop.values.label}</h1><p>{prop.values.body}</p></div>
    const imgA = <div className='col-lg-6 m-0 p-0'><img src={prop.values.src} alt='test wall' style={{width: '100%'}}/></div>
      
    var present = ''
    if(prop.values.position === 'left'){
        present = <React.Fragment>{imgA}{textA}</React.Fragment>
    }else{
        present = <React.Fragment>{textA}{imgA}</React.Fragment>
    }

    const divRef = useRef(null)
    var go = true
    const test = (e) => {
        let partPY = divRef.current.offsetTop
        let scrollPY = Math.floor(document.body.getBoundingClientRect().y) * (-1)
        if(scrollPY > partPY - window.innerHeight + 125 && go === true){
            divRef.current.classList.add('part3A_ready')
            go = false
        }        
    }

    useEffect(()=>{        
        window.addEventListener('scroll', test)
        return () => {
            window.removeEventListener('scroll', test)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className='container'>
            <div className={'row justify-content-center part3A'} ref={divRef}>
                {present}                
            </div>
        </div>
    )
}

export default Part3A
