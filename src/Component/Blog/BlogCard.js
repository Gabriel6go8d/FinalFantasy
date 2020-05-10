import React, {useEffect, useRef} from 'react'
import { Card } from 'react-bootstrap'

function BlogCard(prop) {
    const desUrl = `${process.env.PUBLIC_URL}/#/blog/${prop.values.id}`

    const cardRef = useRef(null)
    useEffect(()=>{ 
        const myObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    const div = entry.target
                    div.classList.add('mycard_ready')    
                    observer.disconnect()
                }
            })
        })
        myObserver.observe(cardRef.current)
    },[])

    return (
        <div className='col-9 col-sm-8 col-md-5 col-lg-4 m-0 p-0 mt-4 mycard' ref={cardRef}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require(`../../ImagesBlog/blog${prop.values.id}.png`)} style={{height: 150}}/>
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
