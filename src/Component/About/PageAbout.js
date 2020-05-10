import React from 'react'
import MyNavbar from '../Utilities/MyNavbar';

function PageAbout(prop) {
    return (
        <div>
            <MyNavbar location={prop.location.pathname}/>
            <div className='container text-left mt-5'>
                <h4>FinalFantasy</h4>
                <p>Author: Gabriel Gutierrez</p>
                <p>Email: <a href='mailto:gabrie.ares93@gmail.com'>gabriel.ares93@gmail.com</a></p>
                <p>Portafolio <a href='https://gabriel6go8d.github.io/curriculum-vitae-2/'>https://gabriel6go8d.github.io/curriculum-vitae-2/</a></p>
                <p>This Project Code: <a href='https://github.com/Gabriel6go8d/firts-steps'>https://github.com/Gabriel6go8d/firts-steps</a></p>

                <p className='mt-3'>Used Tecnologies: </p>
                <p>HTML5  CSS3  Javascript  React  Bootstrap</p>
                <p className='mt-3'>What I Learn?</p>
                <p>In this little project I learned the basics of React, the Layout and Components, how to use Components dinamicaly, useStates and React Hooks. Also it worked as practice for Bootstrap, making the page responsive while displaying good stylish components. I learn how to create new Repositories in GitHub and how to deploy my projects on the gh-Pages, make the first commit ever and prepare the way for the future.</p>
            </div>
        </div>
    )
}

export default PageAbout
