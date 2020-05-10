import React from 'react'

function CardThumnails(prop) {
    return (
        <div className='thumnails col-3'>
            <img alt='thumnail' src={require(`../../ImagesFaces/${prop.values}.png`)}></img>
            <h4 style={{textTransform: 'capitalize'}}>{prop.values}</h4>
        </div>
    )
}

export default CardThumnails
