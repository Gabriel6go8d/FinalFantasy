import React from 'react'
import 'react-odometerjs'
import 'odometer/themes/odometer-theme-minimal.css'
import Part2A from './Part2A'

function Part2() {    
    const divStyle = {
        backgroundColor: '#333333',
        height: '250px'
    }

    return (
        <div style={divStyle}> 
            <div className='container' id='part2'>
                <div className='row justify-content-around align-items-center' style={{height: 250}}>     
                        <Part2A value='15' icon='facebook'/>
                        <Part2A value='50' icon='twitter'/>
                        <Part2A value='99' icon='google'/>             
                </div>
            </div>
        </div>
    )
}

export default Part2
