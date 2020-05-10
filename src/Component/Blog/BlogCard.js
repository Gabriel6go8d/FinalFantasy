import React, {useEffect, useRef} from 'react'
import { Card } from 'react-bootstrap'

function BlogCard(prop) {
    const desUrl = `/blog/${prop.values.id}`

    const cardRef = useRef(null)
    var go = true
    const test = (e) => {
        let partPY = cardRef.current.offsetTop
        let scrollPY = Math.floor(document.body.getBoundingClientRect().y) * (-1)
        if(scrollPY > partPY - window.innerHeight && go === true){
            cardRef.current.classList.add('mycard_ready')
            go = false
        }        
    }

    useEffect(()=>{        
        window.addEventListener('scroll', test)
        test()
        return () => {
            window.removeEventListener('scroll', test)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className='col-9 col-sm-8 col-md-5 col-lg-4 m-0 p-0 mt-4 mycard' ref={cardRef}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prop.values.src} style={{height: 150}}/>
                <Card.Body>
                    <Card.Title>{prop.values.title}</Card.Title>
                    <Card.Text style={{height: '60px'}}>{prop.values.description}</Card.Text>
                    <a className='btn btn-primary' href={desUrl}>Read More</a>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BlogCard
